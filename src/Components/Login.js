import { useState } from "react";
import Header from "./Header";

const Login = ()=>{

    const [isSignIn, setIsSignIn ] = useState(true);

    const toggleForm = ()=>{
          setIsSignIn(!isSignIn);
    }
    return(
    <div>
            <Header/>
            <div className="absolute">
                   <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
                  alt="background_img"/>
            </div>

            <form className="w-3/12 absolute p-12
                          bg-black my-36 mx-auto right-0 left-0
                          text-white rounded-xl bg-opacity-80
                           cursor-pointer">
                <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn &&  <input type="text"
                      placeholder="Full name" 
                      className="p-4 my-4 w-full rounded-lg bg-black bg-opacity-20 border-white"></input>
                }
                <input type="text"
                      placeholder="Email address" 
                      className="p-4 my-4 w-full rounded-lg  bg-black bg-opacity-20 border-white"></input>

                <input type="password" 
                      placeholder="Password" 
                      className="p-4 my-4 w-full rounded-lg bg-black bg-opacity-20  border-white"></input>

               <input type="password" 
                      placeholder="Confirm Password" 
                      className="p-4 my-4 w-full rounded-lg bg-black bg-opacity-20  border-white"></input>

                <button className="p-4 my-6 bg-red-700 w-full  rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
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