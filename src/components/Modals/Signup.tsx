import { authModalState } from '@/atoms/authModalAtoms';
import { auth } from '@/firebase/firebase';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Signupforuser from './Signupforuser';
import Login from './Login';


type SignupProps = {
    
};

const Signup:React.FC<SignupProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = () => {
		setAuthModalState((prev) => ({ ...prev, type: "login" }));
	};
	const [inputs, setInputs] = useState({ serviceemail: '', servicedisplayName: '', servicepassword: '' });
	const router = useRouter();
  
	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
	  setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
  
	const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
	  e.preventDefault();
	  if (!inputs.serviceemail || !inputs.servicepassword || !inputs.servicedisplayName) return alert("Please fill all fields");

	  try {
		toast.loading("Creating your account", { position: "top-center", toastId: "loadingToast" });

		// Creating a new user
		const newUser = await createUserWithEmailAndPassword(inputs.serviceemail, inputs.servicepassword);
  
		if (!newUser) return;
		
		  router.push('/Forms"');
		
		} catch (error: any) {
			toast.error(error.message, { position: "top-center" });
		} finally {
			toast.dismiss("loadingToast");
		}
	};

	

  
	useEffect(() => {
	  if (error) alert(error.message);
	}, [error]);


	
    return (
        
        <div className='hello'>
            <div className='first-register1'>
        <form className='helloform' onSubmit={handleRegister}>
			<h3 className='text-xl font-medium text-white text-center'>Register As Service Person</h3>
			<div>
				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
					Email
				</label>
				<input 
				onChange={handleChangeInput}
					
					type='email'
					name='serviceemail'
					id='serviceemail'
					className='hellotext'
					placeholder='name@company.com'
				/>
			</div>
			<div>
				<label htmlFor='displayName' className='text-sm font-medium block mb-2 text-gray-300'>
					Display Name
				</label>
				<input 
				onChange={handleChangeInput}
					
					type='displayName'
					name='servicedisplayName'
					id='servicedisplayName'
					className='hellotext'
					placeholder='John Doe'
				/>
			</div>
			<div>
				<label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
					Password
				</label>
				<input 
				onChange={handleChangeInput}
					
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
				{loading ? "Registering..." : "Register"}
			</button>

			<div className='account'>
				Already have an account?{" "}
				<a href='#' className='text-blue-700 hover:underline' onClick={handleClick}>
					Log In
				</a>
			</div>
		</form>
        </div>
        <Signupforuser/>
	
        
        </div>
    );
}
export default Signup;