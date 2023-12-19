import { useContext } from "react";
import MovieListItem from "../movie-list-item/movie-list-item";
import "./movie-list.scss";
import { Context } from "../../context";
import { filterHandler, searchHandler } from "../../utilities/data";

const MovieList = () => {
  const { state, _ } = useContext(Context);
  const data = filterHandler(
    searchHandler(state.data, state.term),
    state.filter
  );

  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem id={item.id} {...item} />
      ))}
    </ul>
  );
};

export default MovieList;
