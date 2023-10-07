import React from 'react';
import { useState } from "react"
import toast from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function LoginForm(props)
{
    const [formData, setFormData] = useState({email : "", password : ""});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function changeHandler(event)
    {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }

    function submitHandler(event)
    {
        event.preventDefault();
        props.setIsLoggedIn(true);
        toast.success("Logged In Successfully");
        navigate("/dashboard");
    }

    return (
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email">
                    <p className='text-white'>Email Address<sup className=' text-red-500'>*</sup></p>
                </label>
                <input required type="email" name="email" id="email" value={formData.email} onChange={changeHandler} placeholder="Enter email id" className=' appearance-none bg-richblack-700 px-3 py-2 rounded-[8px] focus:outline focus:outline-2 focus:outline-blue-600 text-white'></input>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="password">
                    <p className='text-white'>Password<sup className=' text-red-500'>*</sup></p>
                </label>
                <div className='flex w-full relative items-center bg-richblack-700 rounded-[8px]'>
                    <input required type={showPassword ? "text" : "password"} name="password" id="password" value={formData.password} onChange={changeHandler} placeholder="Enter password" className=' appearance-none bg-richblack-700 px-3 py-2 rounded-[8px] flex-grow text-white focus:outline focus:outline-2 focus:outline-blue-600'></input>
                    <span onClick={() => {setShowPassword(!showPassword)}} className='text-white absolute right-2 cursor-pointer'>
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </span>
                </div>
                <div className='bg-green-300 relative'>
                    <Link className='text-white absolute right-0'>Forgot Password</Link>
                </div>
            </div>

            <button type='submit' className='text-white text-[18px] font-medium my-5 w-full bg-yellow-50 py-2 rounded-[8px]'>Sign In</button>
        </form>
    );
}