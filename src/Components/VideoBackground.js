import useTrailerVideos from "../utils/useTrailerVideos";

const VideoBackground = ({movieId})=>{

   // Fetch data from TMDB  Video API and update appstore accordingly
   const trailerVideo = useTrailerVideos(movieId);

   return(

      // You tube snippet to show background video
        <div className="w-screen">
         <div>
            <iframe 
            className="w-screen  aspect-video h-[100%]"
                    src={"https://www.youtube.com/embed/XeDbyVODQ5M?si=" + trailerVideo?.key + "&controls=0&autoplay=1&mute=1&XeDbyVODQ5Mloop=1&modestbranding=1&rel=0"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen 
                   >
             </iframe>
            </div>
        </div>
     )
}


export default VideoBackground;