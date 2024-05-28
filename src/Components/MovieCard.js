import { IMG_CDN_URL } from "../utils/Constants";


const MovieCard = ({posterPath}) => {
    console.log(posterPath);
  return (
    <div className="w-48 m-2">
        <img src={ IMG_CDN_URL + posterPath }alt="movie_card_img"/>
    </div>
  )
}

export default MovieCard;
