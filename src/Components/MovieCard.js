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
            { isOpen || isOpentwo ? <div className='fixed inset-0 bg-opacity-60 bg-black backdrop-blur-xl z-40'></div>: null}

            <article>
                <div className="w-36 lg:w-44 my-4 mx-2 lg:mx-1 text-white cursor-pointer transition-transform duration-50 transform hover:scale-90">
                    <img className="h-32 w-44 lg:h-26 md:h-34 md:w-40 lg:h-full lg:w-44 enhanced-image" 
                         src={IMG_CDN_URL + posterPath} alt="movie_card_img" id={posterId} onClick={ handleFirstClick } />
                    <p className="truncate text-sm font-semibol">{title}</p>
                    <p className="text-xs font-thin">{releaseDate}</p>
                </div>
            </article>
            {isOpen &&
                <Dialog isOpen={ isOpen } setOpen={ setIsOpen } 
                     className="w-full h-[50%] lg:w-[60%] lg:h-[70%] rounded-xl text-white bg-black border-2 
                                fixed border-white overflow-y-scroll no-scrollbar">
                    <header>
                        <RxCross2 className="lg:text-2xl text-xl mx-2 my-2 font-extrabold mt-2" onClick={ handleFirstClick } />
                        <p className="font-bold py-1 text-lg lg:text-xl mx-2 lg:px-8 inline-flex">{title}</p>
                    </header>
                    <section className="flex mx-2">
                        <div className="w-1/3">
                            <img className="h-[70%] lg:w-[70%] w-[90%] my-4 mx-auto rounded-sm enhanced-image" 
                                  id={ posterId } src={ IMG_CDN_URL + posterPath } alt="movie_card_img" />
                            <button className="bg-white text-black mx-4 font-extrabold lg:mx-16 px-2 mt-4 border-double
                                     border-black border-2 rounded-lg hover:bg-opacity-80 text-sm" onClick={ handleSecondClick }>
                                <AiFillCaretRight className="inline text-xl lg:text-2xl font-bold" />Play
                            </button>
                        </div>
                        <div className="w-2/3 pr-6 p-2 opacity-80 text-sm">
                             <b>Language:</b><span>&nbsp;{language}</span><br/>
                             <b>Votes:</b><span>&nbsp;{voteCount.toLocaleString()}
                                 <FaThumbsUp className="inline text-lg mx-2 mb-2 text-red-600" />
                            </span><br/>
                            <b>Popularity:</b><span>&nbsp;{popularity}
                                 <AiFillFire className="inline text-lg mx-2 mb-2 text-orange-600" />
                            </span><br/>
                            <b>Release Date:</b><span>&nbsp;{releaseDate}</span>
                            {overview && <p className="py-1  lg:line-clamp-none line-clamp-3"><b>Overview: </b> {overview}</p>}
                        </div>
                    </section>
                </Dialog>
            }
            {isOpentwo &&
                <Dialog isOpen={ isOpentwo } setOpen={ setIsOpentwo }
                        className="w-full h-[50%] lg:w-[60%] lg:h-[70%] rounded-xl text-white bg-black border-2 
                                fixed border-white overflow-hidden"
                      >
                         <div className="bg-black w-full h-[10%] absolute">
                           <RxCross2 className="text-2xl mx-3 my-1 font-extrabold mt-2 text-white" onClick={ handleSecondClick } />
                        </div>
                        <div className="bg-black w-full h-[10%] top-[92%] lg:top-0 lg:mt-[52%] absolute"></div>
                           <YouTube videoId={ cardTrailerVideo?.key }
                            opts={ youTubeOpts }
                            height='460'
                            width='799'
                            onError={ onError }
                            />
                </Dialog>}
            {error && <Error />}
        </>
    );
};

export default MovieCard;
