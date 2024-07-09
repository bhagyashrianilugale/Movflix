import React from "react";
import { RxCrossCircled } from "react-icons/rx";
const checkValidData = ( email, password, confirm_password )=>{
    
  const isValidEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email);
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     
      if( !isValidEmail && (email.length !== 0)) return(
        <React.Fragment>
           <div className="flex m-2">
                <span className="m-1 font-extrabold"> <RxCrossCircled /> </span>  Invalid email id
           </div>
        </React.Fragment>
      );
      if( !isValidPassword && (password.length !== 0) ) return(
        <React.Fragment>
           <div className="flex m-2">
               <span className="m-1 font-extrabold"> <RxCrossCircled /> </span>  Invalid password
           </div>
        </React.Fragment>
      );
     
      if(confirm_password){
        if(confirm_password !== password) return(
         <React.Fragment>
            <div className="flex m-2">
                 <span className="m-1 font-extrabold"> <RxCrossCircled /> </span> Password and Confirm password does not match
           </div>
         </React.Fragment>
        );
      }

      return(null)


}

export default checkValidData;