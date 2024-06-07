import MovieCard from "./MovieCard";

const MovieList = ({Title, movies}) => {
  
  return (
   <div className="my-10"> 
        <h1 className="text-2xl font-semibold pl-4 text-white opacity-90">{Title}</h1>
         <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex">
            {movies?.map((movie)=> <MovieCard key = { movie.id }   
                                              posterId = { movie.id }
                                              posterPath = { movie.poster_path } 
                                              title = { movie.title } 
                                              voteCount = { movie.vote_count } 
                                              voteAverage = { movie.vote_average }
                                              releaseDate = { movie.release_date }
                />)}
          </div>
      </div>
  </div>
  );
};

export default MovieList;
