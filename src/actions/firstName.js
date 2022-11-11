export const fetchMovies = () => dispatch => {
    fetch('http://universities.hipolabs.com/search?country=United+States')
      .then(res => res.json())
      .then(movies =>
        dispatch({
          type: "FETCH_MOVIES",
          payload: movies
        })
      );
  };

  export const filterMovieList = (str,mList) => dispatch => {
        dispatch({
          type: "UPDATE_LIST",
          payload: mList.filter(item => item.name.toLowerCase().startsWith(str.toLowerCase()))
        })
  };