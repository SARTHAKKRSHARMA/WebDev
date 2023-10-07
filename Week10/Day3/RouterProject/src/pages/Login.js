import Templates from "../components/Templates"
import login from "../assets/login.png"

export default function Login(props)
{
    return (
        <Templates 
            title="Welcome Back"
            desc="Build skills for today, tomorrow and beyond"
            desc2="Education to future-proof your career"
            image={login}
            formType="login"
            setIsLoggedIn={props.setIsLoggedIn}
        />
    )
}