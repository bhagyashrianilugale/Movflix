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
                <div className="w-52 px-2 my-4 mx-2 bg-black text-white cursor-pointer transition-all duration-900 hover:scale-110">
                    <img className="h-38 w-42" src={IMG_CDN_URL + posterPath} alt="movie_card_img" id={posterId} onClick={ handleFirstClick } />
                    <p className="truncate text-sm font-bold opacity-80">{title}</p>
                    <p className="text-xs font-semibold">{releaseDate}</p>
                </div>
            </article>
            {isOpen &&
                <Dialog isOpen={ isOpen } setOpen={ setIsOpen } 
                     className="w-[54%] h-[65%] rounded-xl text-white bg-black border-2 
                                fixed border-white overflow-y-scroll no-scrollbar">
                    <header>
                        <RxCross2 className="text-4xl mx-5 my-1 font-extrabold mt-2" onClick={ handleFirstClick } />
                        <p className="font-bold py-2 text-2xl mx-14 inline-flex">{title}</p>
                    </header>
                    <section className="flex">
                        <div className="w-1/3">
                            <img className="h-[90%] w-[70%] mx-auto rounded-lg" 
                                  id={ posterId } src={ IMG_CDN_URL + posterPath } alt="movie_card_img" />
                            <button className="bg-white text-black mx-20 px-2 mt-4 border-double
                                     border-black border-4 rounded-lg hover:bg-opacity-80 text-2xl" onClick={handleSecondClick}>
                                <AiFillCaretRight className="inline text-3xl font-bold" />Play
                            </button>
                        </div>
                        <div className="w-2/3 pr-6 opacity-80 text-lg">
                             <b>Language:</b><span> &nbsp;{language}</span><br/>
                            <b>Votes:</b><span>&nbsp;{voteCount.toLocaleString()}
                                 <FaThumbsUp className="inline text-xl mx-2 mb-2 text-red-600" />
                            </span><br/>
                            <b>Popularity:</b><span>&nbsp;{popularity}
                                 <AiFillFire className="inline text-xl mx-2 mb-2 text-orange-600" />
                            </span><br/>
                            <b>Release Date:</b><span>&nbsp;{releaseDate}</span>
                            {overview && <p className="py-1"><b>Overview: </b> {overview}</p>}
                        </div>
                    </section>
                </Dialog>
            }
            {isOpentwo &&
                <Dialog isOpen={ isOpentwo } setOpen={ setIsOpentwo } 
                        className="rounded-xl w-[54%] h-[65%] flex bg-black border-2 border-white overflow-hidden">
                    <div>
                        <div className="bg-black w-full h-[12%] absolute"></div>
                        <div className="bg-black w-full h-[16%] mt-[54%] absolute"></div>
                           <YouTube videoId={ cardTrailerVideo?.key }
                            opts={ youTubeOpts }
                            onError={ onError }
                            className="" />
                    </div>
                </Dialog>}
            {error && <Error />}
        </>
    );
};

export default MovieCard;
