import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/Constants";
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
          <div className="z-10 p-2 w-screen absolute bg-gradient-to-b from-black flex justify-between">
              <img  className=" w-60 px-10 mx-10 " src={LOGO_URL} alt="logo_img"/>
               { user && (
                    <div className="flex p-4">
                        { showGptSearch && (
                            <select className="mx-2 px-2 bg-gray-950 text-white" onChange = { handleLangChange }>
                                   {SUPPORTED_LANG.map((lang)=> <option key={lang.identifier}>{lang.name}</option>)}
                            </select>
                        )}
                    <button className="py-2 px-2 bg-red-800 rounded-lg text-white" onClick = { handleGptSearchClick }>
                         { showGptSearch ?   <div className="flex"><IoMdHome className="text-2xl mr-2"/>  Page</div> : <div className="flex"><SiGooglegemini className="text-2xl mr-2" /> AI Search</div>}
                    </button>
                     <div className="h-10 w-10 mx-2">
                        <img src={user.photoURL} atl="usericon"/>
                    </div>
                    <div>
                        <button className="font-bold text-white" 
                             onClick={ handleBtnClick }><FaArrowRightFromBracket  className="text-rose-600 text-4xl mx-4"/>
                        </button></div>
                   </div>
               )}
          </div>
        </>
    );
};

export default Header;