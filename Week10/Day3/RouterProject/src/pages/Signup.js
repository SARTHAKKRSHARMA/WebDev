import Templates from "../components/Templates"
import signup from "../assets/signup.png"

export default function Signup(props)
{
    return (
        <Templates 
            title="Join the millons trying to code with Study Notion for Free"
            desc="Build skills for today, tomorrow and beyond"
            desc2="Education to future-proof your career"
            image={signup}
            formType="signup"
            setIsLoggedIn={props.setIsLoggedIn}
        />
    )
}