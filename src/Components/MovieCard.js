import { IMG_CDN_URL } from "../utils/Constants";
import { useState } from 'react';
import { Dialog } from 'react-dialog-element';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideoId } from "../utils/moviesSlice";
import YouTube from 'react-youtube';
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { youTubeOpts } from "../utils/Constants";
import useCardTrailerVideo from "../hooks/useCardTrailerVideo";
import Error from "../Components/Error";

const MovieCard = ({ cardInfo }) => {
    const dispatch = useDispatch();
    const { trailerVideoId, cardTrailerVideo } = useSelector((store) => store.movies);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpentwo, setIsOpentwo] = useState(false);
    const [error, setError] = useState(false);

    // Fetch cardTrailer
    useCardTrailerVideo(trailerVideoId);

    const { posterPath, title, voteCount, releaseDate, posterId, language, overview, popularity } = cardInfo;

    const onError = (event) => {
          console.error('Error occurred:', event.data);
          setError(true); // Set error state when an error occurs
    };

    const handleFirstClick = (e) => {
          dispatch(addTrailerVideoId(e.target.id));
          setIsOpen(!isOpen);
    };

    const handleSecondClick = () => {
          setIsOpentwo(!isOpentwo);
    };

    if (!posterPath) return null;

    return (
        <>
            <article>
                <div className="w-52 px-2 my-4 mx-2 bg-black cursor-pointer transition-all duration-900 hover:scale-110">
                    <img className="h-38 w-42" src={IMG_CDN_URL + posterPath} alt="movie_card_img" id={posterId} onClick={ handleFirstClick } />
                </div>
            </article>
            {isOpen &&
                <Dialog isOpen={ isOpen } setOpen={ setIsOpen } className="w-[60%] h-[70%] rounded-xl text-white bg-black border-2 fixed border-white overflow-y-scroll no-scrollbar">
                    <header>
                        <RxCross2 className="text-2xl m-1 font-extrabold" onClick={ handleFirstClick } />
                        <p className="font-bold py-2 text-2xl mx-14 my-2 inline-flex">{title}</p>
                    </header>
                    <section className="flex">
                        <div className="w-1/3">
                            <img className="h-34 w-36 mx-auto rounded-lg" id={posterId} src={IMG_CDN_URL + posterPath} alt="movie_card_img" />
                            <button className="bg-white text-black mx-20 px-4 text-lg mt-2 border-double border-black border-4 rounded-lg hover:bg-opacity-80" onClick={handleSecondClick}>
                                <AiFillCaretRight className="inline text-lg font-bold" />Play
                            </button>
                        </div>
                        <div className="w-2/3 pr-6 opacity-80 text-sm">
                            <p className="py-1"><b>Language:</b> {language}</p>
                            <p className="py-1"><b>Votes:</b> {voteCount.toLocaleString()}<FaThumbsUp className="inline text-xl mx-2 mb-2 text-red-600" /></p>
                            <p className="py-1"><b>Popularity:</b> {popularity}<AiFillFire className="inline text-xl mx-2 mb-2 text-orange-600" /></p>
                            <p className="py-1"><b>Release Date:</b> {releaseDate}</p>
                            {overview && <p className="py-1"><b>Overview:</b> {overview}</p>}
                        </div>
                    </section>
                </Dialog>
            }
            {isOpentwo &&
                <Dialog isOpen={ isOpentwo } setOpen={ setIsOpentwo } className="w-[60%] h-[80%] rounded-xl flex bg-black border-2 border-white overflow-hidden">
                    <div>
                        <YouTube videoId={ cardTrailerVideo?.key }
                            opts={ youTubeOpts }
                            onError={ onError }
                            className="mx-auto" />
                    </div>
                </Dialog>}
            {error && <Error />}
        </>
    );
};

export default MovieCard;
