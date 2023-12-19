import { useContext, useEffect, useState } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import "./app.scss";
import { Context } from "../../context";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { _, dispatch } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_end=7")
      .then((response) => response.json())
      .then((json) => {
        const newArr = json.map((item) => ({
          name: item.title,
          id: item.id,
          viewers: item.id * 10,
          favourite: false,
          like: false,
        }));
        dispatch({ type: "GET_DATA", payload: newArr });
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        {isLoading && "loading..."}
        <MovieList />
        <MoviesAddForm />
      </div>
    </div>
  );
};

export default App;
