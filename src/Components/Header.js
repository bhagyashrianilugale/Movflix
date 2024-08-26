import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/Constants";
import { changeLanguage } from "../utils/conFigSlice";
import { SiGooglegemini } from "react-icons/si";
import { IoMdHome } from "react-icons/io";

const Header =  ()=>{
    
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const user = useSelector(store => store.user);
    const showGptSearch =  useSelector((store)=> store.gpt.showGptSearch);

    const handleBtnClick = ()=>{
        signOut(auth).then(() => {
         }).catch((error) => {
            console.log(error);
        });
        
    };

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
               // User is signed in
               const displayName = user.displayName;
               const email = user.email;
               const uid = user.uid;
               const photoURL = user.photoURL;
               dispatch(addUser(
                   {
                    uid: uid, 
                    email: email, 
                    displayName: displayName, 
                    photoURL: photoURL
                   }));
               navigate("/browse");

              } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            }
      });

      // Unsubscribe logic when component unmount
      return (()=> unSubscribe());

    },[]);

    const handleGptSearchClick = ()=>{
        // Toggle GPT search
        dispatch(toggleGptSearchView());
    }

    const handleLangChange = (e)=>{
         dispatch(changeLanguage(e.target.value));
    }

    return(
        <>
          <div className="z-10 p-1 w-screen absolute bg-gradient-to-b from-black flex justify-between">
               <h1 className="w-30 px-10 my-auto text-3xl font-bold text-red-600 cursor-default" >MOVFLIX</h1>
               { user && (
                    <div className="flex p-4">
                        { showGptSearch && (
                            <select className="mx-1 py-1 my-auto bg-gray-950 text-white" onChange = { handleLangChange }>
                                   {SUPPORTED_LANG.map((lang)=> <option key={lang.identifier}>{lang.name}</option>)}
                            </select>
                        )}
                    <button className=" py-1 px-2 my-auto bg-red-800 rounded-sm text-white" onClick = { handleGptSearchClick }>
                         { showGptSearch ? <div className="flex font-semibold p-1">
                                            <IoMdHome className="text-xl mx-1 mr-2"/>
                                                <span className="text-sm">Page</span>
                                           </div>
                                         : <div className="flex font-semibold p-1">
                                            <SiGooglegemini className="mx-1 text-xl" />
                                            <span className="text-sm">AI Search</span>
                                    </div>}
                    </button>
                     <div className="h-10 w-10 mx-2 my-auto">
                        <img src={user.photoURL} atl="usericon"/>
                    </div>
                    <div>
                        <button className="font-bold text-white" 
                             onClick={ handleBtnClick }><FaArrowRightFromBracket  className="text-rose-600 text-4xl py-1 my-auto mx-1"/>
                        </button></div>
                   </div>
               )}
          </div>
        </>
    );
};

export default Header;