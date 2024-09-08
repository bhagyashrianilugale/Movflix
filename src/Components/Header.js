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
          <div className="z-10 md:p-1 md:mb-0 mb-10 w-screen absolute bg-gradient-to-b from-black flex justify-between">
               <h1 className="w-30 px-10 md:my-auto md:py-0 py-2 text-xl md:text-3xl font-bold text-red-800 cursor-default" >
                     MOVFLIX
               </h1>
               { user && (
                <div className="flex py-1 md:p-2">
                        { showGptSearch && (
                            <select className="mx-4 py-1 my-auto bg-gray-950 text-white" onChange = { handleLangChange }>
                                   {SUPPORTED_LANG.map((lang)=> 
                                <option 
                                      key={lang.identifier}>{lang.name}</option>)}
                            </select>
                        )}
                    <button 
                          className="md:py-1 mx-2 px-0 h-6 md:h-10 md:px-2 my-auto bg-red-800 rounded-sm text-white" 
                          onClick = { handleGptSearchClick }>
                         { showGptSearch ? <div className="flex font-semibold p-1">
                                            <IoMdHome className="text-lg md:text-2xl md:mx-2 mr-2"/>
                                                <span className="text-xs mb-8 md:text-lg">Page</span>
                                           </div>
                                         : <div className="flex font-semibold px-2 md:p-1">
                                            <SiGooglegemini className="md:mx-1 text-lg md:text-3xl pr-1" />
                                            <span className="text-xs md:text-lg text-center">AI Search</span>
                                    </div>}
                    </button>
                     <div className="h-5 w-5 md:h-10 md:w-10 mx-2 md:mx-2 my-auto">
                        <img 
                         src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
                         atl="usericon"/>
                    </div>
                    <div>
                        <button className="font-bold text-white" 
                             onClick={ handleBtnClick }><FaArrowRightFromBracket  
                             className="text-rose-600 text-3xl md:text-4xl p-2 pt-2 sm:p-0 sm:pt-1 md:py-1 md:my-auto md:mx-1"/>
                        </button>
                    </div>
                </div>
               )}
          </div>
        </>
    );
};

export default Header;