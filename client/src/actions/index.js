export const fetchMovies = () => {
    return dispatch => {
        fetch("/movies")
         .then(res => {
          return res.json();
        }).then(movies => {
            dispatch(moviesFetched(movies));
        });
  
    };
}
  
export function moviesFetched(movies) {
    return {
      type: "MOVIES_FETCHED",
      value: movies
    };
}

export const createMovie = movie =>  {
    return dispatch => {   
      fetch("/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
      }).then(() => dispatch(fetchMovies(movie)))
          // }).then((movies) => {
          //   dispatch(fetchMovies(movies));
          // });
    }
  }

  export function deleteMovie(id) {
    return function (dispatch) {
          
      fetch(`http://localhost:3002/movies/${id}`, {
        method: "DELETE"
      }
   )
          .then( (response) => {
            return response.json();
          }).then(() => {
            dispatch(fetchMovies());
          });
    
    };
  
  }

 
    