import useTrailerVideos from "../utils/useTrailerVideos";

const VideoBackground = ({movieId})=>{

   // Fetch data from TMDB  Video API and update appstore accordingly
   const trailerVideo = useTrailerVideos(movieId);

   return(

      // You tube snippet to show background video
        <div className="w-screen">
         <div>
            <iframe 
            className="w-screen aspect-video"
                    src={"https://www.youtube.com/embed/XeDbyVODQ5M?si=" + trailerVideo?.key + "rel=0&controls=0&autoplay=1&mute=1"}
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