import { useContext } from "react";
import MovieListItem from "../movie-list-item/movie-list-item";
import "./movie-list.scss";
import { Context } from "../../context";
import { filterHandler, searchHandler } from "../../utilities/data";

const MovieList = ({ onDelete, onToggleProp }) => {
  const { state, dispatch } = useContext(Context);
  const data = filterHandler(
    searchHandler(state.data, state.term),
    state.filter
  );

  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem
          id={item.id}
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
          like={item.like}
        />
      ))}
    </ul>
  );
};

export default MovieList;
