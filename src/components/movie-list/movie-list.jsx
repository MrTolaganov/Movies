import MovieListItem from "../movie-list-item/movie-list-item";
import "./movie-list.scss";

const MovieList = ({ data, onDelete, onToggleProp }) => {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
          like={item.like}
          onDelete={() => onDelete(item.id)}
          onToggleProp={(event) => onToggleProp(item.id, event.currentTarget.getAttribute("data-toggle"))}
        />
      ))}
    </ul>
  );
};

export default MovieList;
