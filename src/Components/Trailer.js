import { useState } from 'react';
import { Dialog } from 'react-dialog-element';
import { FaCirclePlay } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import VideoBackground from './VideoBackground';

const Trailer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openBox = () => {
        setIsOpen(true);
      };
    
  const closeBox = () => {
        setIsOpen(false);
      };


  return (
      <>
         <button className="py-2 text-4xl text-white px-4 rounded" onClick={openBox}>
              <FaCirclePlay />
         </button>
          <Dialog isOpen={isOpen} setOpen={setIsOpen}>
                      <div className="h-80 w-96 bg-white">
                          <div><RxCross2 className="text-2xl m-2 font-extrabold"onClick={closeBox}/></div>
                          {/* <VideoBackground/> */}
                      </div>
          </Dialog> 
      </>
   )
};

export default Trailer;


// const Trailer = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openBox = () => {
//     setIsOpen(true);
//   };

//   const closeBox = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button className="py-2 text-4xl text-white px-4 rounded" onClick={openBox}>
//                <FaCirclePlay />
//       </button>

//       {isOpen && (
//         <>
//           <ReactDialogBox
//             closeBox={closeBox}
//             modalWidth='w-3/5' // Tailwind equivalent for 60%
//             headerBackgroundColor='bg-red-500'
//             headerTextColor='text-white'
//             headerHeight='h-16' // Tailwind does not have 65px, use the closest which is 64px (16)
//             closeButtonColor='text-white'
//             bodyBackgroundColor='bg-white'
//             bodyTextColor='text-black'
//             bodyHeight='h-52' // Tailwind equivalent for 200px
//             headerText='Movie Trailer'
//           >
//          </ReactDialogBox>
//         </>
//       )}
//     </div>
//   );
// };

// export default Trailer;
