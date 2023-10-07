import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignupForm(props)
{
    const [formData, setFormData] = useState({user:"student", firstName : "", lastName : "", email : "", password : "", confirmPassword : ""});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
        toast.success("Account created Successfully");
        navigate("/dashboard");
    }

    return (
        <div className="w-[450px] max-w-11/12 flex flex-col gap-5">
            <div className="flex gap-5 rounded-[25px] mt-3 bg-richblack-700 w-fit px-4 py-2 box-border">
                <button name="user" onClick={() => {setFormData((prevFormData) => {return {...prevFormData, user:"student"}})}} className={formData.user === "student" ? " text-white rounded-[25px] bg-black py-2 px-6" : "text-white"}>Student</button>
                <button name="user" onClick={() => {setFormData((prevFormData) => {return {...prevFormData, user:"instructor"}})}} className={formData.user === "instructor" ? " text-white rounded-[25px] bg-black py-2 px-3" : "text-white"}>Instructor</button>
            </div>
            <form onSubmit={submitHandler} className="flex flex-col gap-5 w-11/12 max-w-[450px]">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-2">
                        <label className="text-white" htmlFor="firstName">First Name<sup className=" text-red-500">*</sup></label>
                        <input className=" appearance-none px-2 rounded-[8px] py-1 bg-richblack-700 focus:outline focus:outline-2 focus:outline-blue-500 text-white" required type="text" name="firstName" id="firstName" onChange={changeHandler} value={formData.firstName} placeholder="Enter first name"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-white" htmlFor="lastName">Last Name<sup className=" text-red-500">*</sup></label>
                        <input className=" appearance-none px-2 rounded-[8px] py-1 bg-richblack-700 focus:outline focus:outline-2 focus:outline-blue-500 text-white" required type="text" name="lastName" id="lastName" onChange={changeHandler} value={formData.lastName} placeholder="Enter last name"/>
                    </div>  
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email">
                        <p className='text-white'>Email Address<sup className=' text-red-500'>*</sup></p>
                    </label>
                    <input className=' appearance-none w-full bg-richblack-700 px-3 py-2 rounded-[8px] focus:outline focus:outline-2 focus:outline-blue-600 text-white' required type="text" name="email" id="email" onChange={changeHandler} value={formData.email} placeholder="Enter email id"/>
                </div>

                <div className="flex gap-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">
                            <p className="text-white">Password<sup className=" text-red-500">*</sup></p>
                        </label>
                        <div className='flex w-full relative items-center bg-richblack-700 rounded-[8px]'>
                            <input required type={showPassword ? "text" : "password"} name="password" id="password" value={formData.password} onChange={changeHandler} placeholder="Enter password" className=' appearance-none bg-richblack-700 px-3 py-2 rounded-[8px] text-white focus:outline focus:outline-2 focus:outline-blue-600'></input>
                            <span onClick={() => {setShowPassword(!showPassword)}} className="absolute right-0 mr-2 cursor-pointer">
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>                    
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="confirmPassword">
                            <p className="text-white">Confirm Password<sup className=" text-red-500">*</sup></p>
                        </label>
                        <div className='flex w-full relative items-center bg-richblack-700 rounded-[8px]'>
                            <input required type={showConfirmPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={changeHandler} placeholder="Re-enter password" className=' appearance-none bg-richblack-700 px-3 py-2 rounded-[8px] text-white focus:outline focus:outline-2 focus:outline-blue-600'></input>
                            <span onClick={() => {setShowConfirmPassword(!showConfirmPassword)}} className="absolute right-0 mr-2 cursor-pointer">
                                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>
                    </div>
                </div>

                <button className='text-white text-[18px] font-medium my-5 w-full bg-yellow-50 py-2 rounded-[8px]'>Create Account</button>
            </form>
        </div>
    );
}