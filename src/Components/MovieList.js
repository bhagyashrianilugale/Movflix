import MovieCard from "./MovieCard";

const MovieList = ({Title, movies}) => {
  return (
      <>
       <div className="mt-10 pb-10"> 
        <h1 className="text-4xl font-semibold pl-4 text-white opacity-90">{Title}</h1>
         <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex">
            {movies?.map((movie)=> <MovieCard key = { movie.id }
                                              cardInfo = {{ posterId: movie.id, 
                                                             language: movie.original_language, 
                                                             posterPath: movie.poster_path,  
                                                             title: movie.original_title, 
                                                             voteCount: movie.vote_count, 
                                                             releaseDate: movie.release_date, 
                                                             overview : movie.overview,
                                                             popularity: movie.popularity}} 
                                              
                />)}
           </div>
         </div>
       </div>
     </>
  );
};

export default MovieList;
