import { useSelector } from "react-redux";
import useTrailerVideos from "../hooks/useTrailerVideos";

const VideoBackground = ({movieId})=>{

   const TrailerVideo = useSelector((store) => store?.movies?.trailerVideos);

   // Fetch data from TMDB  Video API and update appstore accordingly
   const trailerVideo = useTrailerVideos(movieId);
   return(
      // You tube snippet to show background video
      <>
        <div className="w-full h-full">
         <div>
            <div className="w-full h-[6%] lg:h-[12%] bg-black absolute"></div>
            <iframe 
                    className="w-full aspect-video h-full overflow-hidden" 
                    src={ "https://www.youtube.com/embed/"+TrailerVideo?.key+"?si=&controls=1&hd=1&showinfo=0"+TrailerVideo?.key+"?loop=1&autoplay=1&mute=1&modestbranding=1&rel=0"}
                    title="Inside Out 2 | Announce Trailer" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
            </iframe>
           </div>
           <div className="w-full h-[18%] top-[26%] md:top-[20%] lg:top-[100%] bg-black absolute"></div>
         </div>
      </>
     );
};


export default VideoBackground;