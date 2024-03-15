import { authModalState } from '@/atoms/authModalAtoms';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '@/firebase/firebase';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Loginforuser from './Loginforuser';
import Forms from '@/pages/Forms/Forms';


type LoginProps = {
    
};

const Login: React.FC<LoginProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = (type: "login" | "register" | "forgotPassword") => {
		setAuthModalState((prev) => ({ ...prev, type }));
	};
	const [inputs, setInputs] = useState({ serviceemail: "", servicepassword: "" });
	const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
	const router = useRouter();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!inputs.serviceemail || !inputs.servicepassword) return alert("Please fill all fields");
		try {
			const newUser = await signInWithEmailAndPassword(inputs.serviceemail, inputs.servicepassword);
			if (!newUser) return;
			router.push("../Forms/Forms");
		} catch (error: any) {
					toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
		}
	};
	

	useEffect(() => {
		if (error) alert(error.message);
	},[error])
    
    return(
        <div className='hello'>
		<div className='first-register'>
		<form className='helloform' onSubmit={handleLogin}>
			<h3 className='text-xl font-medium text-white text-center'>Sign in As Service Person</h3>
			<div>
				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
					Your Email
				</label>
				<input
					onChange={handleChange}
					type='email'
					name='serviceemail'
					id='serviceemail'
					className='hellotext'
					placeholder='name@company.com'
				/>
			</div>
			<div>
				<label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
					Your Password
				</label>
				<input
				onChange={handleChange}
					type='password'
					name='servicepassword'
					id='servicepassword'
					className='hellotext'
					placeholder='*******'
				/>
			</div>

			<button
				type='submit'
				className='submitbutton'
			>
				{loading ? "Loading..." : "Log In"}
			</button>
			<button className='flex w-full justify-end' onClick={() => handleClick("forgotPassword")}>
				<a href='#' className='text-sm block text-brand-orange hover:underline w-full text-right'>
					Forgot Password?
				</a>
			</button>
			<div className='reg'>
				Not Registered?{" "}
				<a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick("register")}>
					Create account
				</a>
			</div>
		</form>
		</div>
		<Loginforuser/>
		</div>
    );
}
export default Login;