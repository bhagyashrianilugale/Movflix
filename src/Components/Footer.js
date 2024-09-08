import React from 'react';

const Footer = () => {
 
  return (
    <>
    <footer className="w-screen h-[20%] md:h-[40%] bg-black px-2 text-white text-sm py-16 cursor-pointer">
    <div>
      <p className="mx-10 md:mx-20 my-6">Questions? Call 000-800-919-1694</p>
      <div className="flex justify-evenly md:flex md:justify-around">
        <div> 
          <p className="underline my-2 hover:opacity-60">FAQ</p>
          <p className="underline my-2 hover:opacity-60">Investor Relations</p>
          <p className="underline my-2 hover:opacity-60">Privacy</p>
          <p className="underline my-2 hover:opacity-60">Speed Test</p>
        </div>
        <div className="hidden md:block"> 
          <p className="underline my-2 hover:opacity-60">Help Centre</p>
          <p className="underline my-2 hover:opacity-60">Jobs</p>
          <p className="underline my-2 hover:opacity-60">Cookie Preferences</p>
          <p className="underline my-2 hover:opacity-60">Legal Notices</p>
        </div>
        <div className="hidden md:block"> 
          <p className="underline my-2 hover:opacity-60">Account</p>
          <p className="underline my-2 hover:opacity-60">Ways to watch</p>
          <p className="underline my-2 hover:opacity-60">Corporate Information</p>
          <p className="underline my-2 hover:opacity-60">Only on Movflix</p>
        </div>
        <div> 
          <p className="underline my-2 hover:opacity-60">Media Centre</p>
          <p className="underline my-2 hover:opacity-60">Terms of use</p>
          <p className="underline my-2 hover:opacity-60">Contact Us :</p>
          <p className="underline my-2 hover:opacity-60"><a href="bhagyashriugale6970@gmail.com">movflix@gmail.com</a></p>
        </div>
       </div>
        <p className="mx-10 md:mx-20 my-6">Movflix India</p>
     </div>
     </footer>
    </>
  );
}

export default Footer;
