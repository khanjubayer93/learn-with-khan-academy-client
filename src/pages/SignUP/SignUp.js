import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/UserContext';

const SignUp = () => {
    const { createUser, googleProviderLogin } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();

    // sign up with google 
    const handleGoogleLogin = () => {
        googleProviderLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error.message))
    }

    // sign up with email and password 
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error.message))


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="hero min-h-screen bg-base-200 mb-5">
                    <div className="hero-content flex-col w-full">
                        <div className="">
                            <h1 className="text-5xl font-bold">Sign Up!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input name='photoURL' type="text" placeholder="photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div>
                                    <button onClick={handleGoogleLogin}>
                                        <FaGoogle></FaGoogle>
                                    </button>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SIGN UP</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;