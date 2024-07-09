import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/Constants"; 
import Footer from "./Footer";

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
                        photoURL: USER_AVATAR
                      }).then(() => {
                        // Profile updated!
                        const displayName = auth.currentUser.displayName;
                        const email = auth.currentUser.email;
                        const uid = auth.currentUser.uid;
                        const photoURL = auth.currentUser.photoURL
                        dispatch(
                            addUser({uid: uid, 
                                     email: email, 
                                     displayName: displayName, 
                                     photoURL: photoURL})
                        );
                       
                        setSuccessMessage(`Welcome! ${username.current.value}`);
                      
                      }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                      });
                      
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
    };

    return(
       <>
            <Header/>
            <div className="absolute">
                   <img src={BG_URL}
                  alt="background_img"/>
                  <Footer/>
            </div>
            <form onSubmit= {(e)=> e.preventDefault()}className="w-3/12 absolute p-12
                          bg-black my-[10%] mx-auto right-0 left-0
                          text-white rounded-xl bg-opacity-80
                           cursor-pointer">
                <h1 className="font-bold text-2xl py-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>

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
                       className="p-1 my-1 w-full rounded-lg  bg-black bg-opacity-20 border border-slate-50"></input>

                <input type="password" 
                       ref={password}
                       required
                       placeholder="Password" 
                       className="p-2 my-1 w-full rounded-lg bg-black bg-opacity-20 border border-slate-50"></input>

                {!isSignIn && <input type="password" 
                       ref={confirm_password}
                       required
                       placeholder="Confirm Password" 
                       className="p-2 my-1 w-full rounded-lg bg-black bg-opacity-20  border border-slate-50"></input>}
               
                <p className="text-red-700 font-bold p-2">{successMessage ? successMessage : errorMessage }</p>

                <button className="p-1 my-2 bg-red-700 w-full  rounded-lg" onClick={handleBtnClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>

                <p className="font-semibold" onClick={toggleForm}>
                    {isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In now"}
                </p>
                <p className="font-light text-xs">This page is protected by Google reCAPTCHA to<br/> 
                ensure you're not a bot. <span className="font-bold">Learn more.</span></p>
            </form>
        </>
    );
};

export default Login;