import { onAuthStateChanged } from "firebase/auth";
import Login from "../Components/Login";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import {addUser} from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";


const Body = ()=>{
     const dispatch = useDispatch(); 
    useEffect(()=>{
          onAuthStateChanged(auth, (user) => {
          if (user) {
               // User is signed in
               const displayName = user.displayName;
               const email = user.email;
               const uid = user.uid;
               const photoURL = user.photoURL
               dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL: photoURL}));
             } else {
              // User is signed out
              dispatch(removeUser());
            }
      });},[]);

 return(
    <div><Login/></div>    
)
};

export default Body;