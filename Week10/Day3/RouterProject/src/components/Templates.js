import SignupForm from "./SignUpForm"
import LoginForm from "./LoginForm"
import frameImage from "../assets/frame.png"
import { FcGoogle } from 'react-icons/fc';


export default function Templates({title, desc, desc2, image, formType, setIsLoggedIn})
{

    return (
        <div className=" flex flex-row justify-between w-11/12 max-w-[1080px] py-12 mx-auto mt-5">        
            <div className="w-11/12 max-w-[360px] flex flex-col">
                <h1 className="text-richblack-5 text-[1.875rem] leading-[2.375rem] font-semibold">{title}</h1>
                <p className="flex flex-col text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-richblack-100">{desc}</span>
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>
                {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} /> }

                <div className="flex items-center gap-2">
                    <div className="h-[1px] flex-grow bg-white"></div>
                    <p className="text-white">OR</p>
                    <div className="h-[1px] flex-grow bg-white"></div>
                </div>
                
                <button className="flex flex-row justify-center items-center gap-2 mt-10 w-[100%] rounded-[8px] font-medium border border-richblack-700 px-[12px] py-[8px]"><FcGoogle/> <span className="text-white">Sign Up with Google</span></button>
            </div>
            
            <div className="relative  w-11/12 max-w-[360px]">
                <img src={frameImage} alt="pattern" width={558} height={504} loading="lazy" className=" absolute"/>
                <img src={image} alt="students" width={558} height={490} loading="lazy" className="absolute -top-4 -left-4"/>
            </div>

        </div>
    )
}