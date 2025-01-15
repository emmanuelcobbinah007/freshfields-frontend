import Navbar from "../components/Navbar";
import SignInForm from "../components/SignInForm";

export default function SignIn()  {
    return (
        <div className="font-poppins">
            <div className="bg-[#FFC1070F] h-[40px]"></div>
            <Navbar/>
            <SignInForm />
        </div>
    )
}