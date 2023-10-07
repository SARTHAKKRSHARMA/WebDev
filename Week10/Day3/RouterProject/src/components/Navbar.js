import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import {toast} from "react-hot-toast";

export default function Navbar(props)
{
    const {isLoggedIn, setIsLoggedIn} = props;

    function logoutHandler()
    {
        setIsLoggedIn(false);
        toast.success("Logged Out");
    }

    return (
        <div className="flex w-11/12 max-w-[1080px] mx-auto justify-between items-center text-white mt-4">
            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>

            <div>
                <ul className="flex gap-6">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>

            <div className="flex gap-6 items-center">
                {
                    !isLoggedIn &&
                    <Link to="/login"><button className="rounded-[8px] border border-richblack-700 py-[8px] px-[12px] bg-richblack-800">Login</button></Link>
                }
                {
                    !isLoggedIn &&
                    <Link to="/signup"><button className="rounded-[8px] border border-richblack-700 py-[8px] px-[12px] bg-richblack-800" >Signup</button></Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/"><button onClick={logoutHandler} className="rounded-[8px] border border-richblack-700 py-[8px] px-[12px] bg-richblack-800">Logout</button></Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard"><button className="rounded-[8px] border border-richblack-700 py-[8px] px-[12px] bg-richblack-800">Dashboard</button></Link>
                }
            </div>
        </div>
    )
}