import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";


const Header =  ()=>{
   const user = useSelector(store => store.user)
   const handleBtnClick = ()=>{
        signOut(auth).then(() => {
         }).catch((error) => {
            console.log(error);
        });
        
    }

    return(
        <div className="z-10  p-2 w-screen absolute bg-gradient-to-b from-black flex justify-between">
              <img  className="w-80 px-10 mx-20 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo_img"/>
               {user && (
                    <div className="flex p-4">
                    <div className="h-10 w-10 mx-2"><img src={user?.photoURL} atl="usericon"/></div>
                    <div><button className="font-bold  text-white" onClick={handleBtnClick}>Sign Out</button></div>
                 </div>
               )}
        </div>
    )
};

export default Header;