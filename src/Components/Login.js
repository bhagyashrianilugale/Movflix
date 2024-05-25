import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate"
 
const Login = ()=>{

    const [isSignIn, setIsSignIn ] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const confirm_password = useRef(0);
    const full_name = useRef(false);

    const toggleForm = ()=>{
          setIsSignIn(!isSignIn);
    }

    const handleBtnClick = ()=>{
        //Validate the form data
        const message = checkValidData(email.current.value, password.current.value,confirm_password.current.value, full_name.current.value);
        console.log(confirm_password.current.value);
        console.log(full_name.current.value);
       console.log(message);

        setErrorMessage(message);
    }
    return(
    <div>
            <Header/>
            <div className="absolute">
                   <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
                  alt="background_img"/>
            </div>

            <form onSubmit= { (e)=> e.preventDefault() }className="w-3/12 absolute p-12 
                          bg-black my-36 mx-auto right-0 left-0
                          text-white rounded-xl bg-opacity-80
                           cursor-pointer">
                <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                {!isSignIn &&  <input type="text"
                      ref={full_name}
                      required
                      placeholder="Full name" 
                      className="p-2 my-2 w-full rounded-lg bg-black bg-opacity-20 border border-slate-50"></input>
                }

                <input type="text"
                       ref={email}
                       required
                       placeholder="Email address" 
                       className="p-2 my-2 w-full rounded-lg  bg-black bg-opacity-20 border border-slate-50"></input>

                <input type="password" 
                       ref={password}
                       required
                       placeholder="Password" 
                       className="p-2 my-2 w-full rounded-lg bg-black bg-opacity-20 border border-slate-50"></input>

                {!isSignIn && <input type="password" 
                       ref={confirm_password}
                       required
                       placeholder="Confirm Password" 
                       className="p-2 my-2 w-full rounded-lg bg-black bg-opacity-20  border border-slate-50"></input>}
                

                <p className="text-red-500 font-bold p-2">{errorMessage}</p>

                <button className="p-2 my-6 bg-red-700 w-full  rounded-lg" onClick={handleBtnClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>

                <p className="font-semibold" onClick={toggleForm}>
                    {isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In now"}
                </p>
                <p className="font-light text-xs">This page is protected by Google reCAPTCHA to<br/> 
                ensure you're not a bot. <span className="font-bold">Learn more.</span></p>
            </form>
    </div>
    )
};

export default Login;