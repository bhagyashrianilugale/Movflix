import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = ()=>{
    
    const [ isSignIn, setIsSignIn ] = useState(true);
    const [ errorMessage, setErrorMessage ] = useState(null);
    const [ successMessage, setSuccessMessage ] = useState(null);

    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const confirm_password = useRef(0);
    const username = useRef(false);

    const toggleForm = ()=>{
          setIsSignIn(!isSignIn);
    }

    const handleBtnClick = ()=>{
        //Validate the form data
        const message = checkValidData(email.current.value, password.current.value, confirm_password.current.value, username.current.value);
        setErrorMessage(message);

        if(message) return;

        if( !isSignIn ){
              //Sign up Logic
              createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                       .then((userCredential) => {
                          // Signed up 
                       const user = userCredential.user;

                       updateProfile(user, {
                        displayName: username.current.value, 
                        photoURL: "https://avatars.githubusercontent.com/u/137088907?v=4"
                      }).then(() => {
                        // Profile updated!
                        const displayName = auth.currentUser.displayName;
                        const email = auth.currentUser.email;
                        const uid = auth.currentUser.uid;
                        const photoURL = auth.currentUser.photoURL
                        dispatch(
                            addUser({uid:uid, 
                                     email: email, 
                                     displayName: displayName, 
                                     photoURL: photoURL})
                        )
                    
                      }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                      });
                      
                       setSuccessMessage(`Welcome! ${username.current.value}`);
                      
                    })
                      .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      setErrorMessage(errorCode+ "/" + errorMessage);
                
                    });
            }
        else {
            // Sign In Logic
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                     .then((userCredential) => {
                      // Signed in 
                     const user = userCredential.user;
                     setSuccessMessage("Welcome! again");
                    })
                   .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      setErrorMessage(errorCode+ "/" + errorMessage);
                });

        }
    }
    return(
    <div>
            <Header/>
            <div className="absolute">
                   <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
                  alt="background_img"/>
            </div>

            <form onSubmit= { (e)=> e.preventDefault() }className="w-3/12 absolute p-12 
                          bg-black my-12 mx-auto right-0 left-0
                          text-white rounded-xl bg-opacity-80
                           cursor-pointer">
                <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                {!isSignIn &&  <input type="text"
                      ref={username}
                      required
                      placeholder="Username" 
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
               
                <p className="text-red-500 font-bold p-2">{successMessage ? successMessage : errorMessage }</p>

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