import useTrailerVideos from "../hooks/useTrailerVideos";

const VideoBackground = ({movieId})=>{
   // Fetch data from TMDB  Video API and update appstore accordingly
   const trailerVideo = useTrailerVideos(movieId);
   return(
      // You tube snippet to show background video
      <>
        <div className="w-full h-full">
         <div>
            <div className="w-full h-[12%] bg-black absolute"></div>
            <iframe 
             className="w-full aspect-video h-full overflow-hidden"
                    src={"https://www.youtube.com/embed/XeDbyVODQ5M?si=" + trailerVideo?.key + "&controls=0&autoplay=1&mute=1&XeDbyVODQ5M?loop=1&modestbranding=1&rel=0"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen 
                   >
             </iframe>
            </div>
        </div>
      </>
     );
};


export default VideoBackground;