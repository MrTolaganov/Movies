import "./app.scss";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import { Component } from "react";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: "Empire of osman",
          viewers: 988,
          favourite: false,
          like: false,
          id: 1,
        },
        {
          name: "Ertugrul",
          viewers: 789,
          favourite: false,
          like: false,
          id: 2,
        },
        { name: "Omar", viewers: 1091, favourite: false, like: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }));
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    };

    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    } else {
      return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
    }
  };

  updateTermHandler = (term) => this.setState({ term });

  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((item) => item.like);
      case "mostViewers":
        return arr.filter((item) => item.viewers > 800);
      default:
        return arr;
    }
  };

  updateFilterHandler = (filter) => this.setState({ filter });

  render() {
    const { data, term, filter } = this.state;
    const allMoviesCount = data.length;
    const favouriteMoviesCount = data.filter((item) => item.favourite).length;
    const visibleData = this.filterHandler(
      this.searchHandler(data, term),
      filter
    );

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo
            allMoviesCount={allMoviesCount}
            favouriteMoviesCount={favouriteMoviesCount}
          />
          <div className="search-panel">
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
          </div>
          <MovieList
            data={visibleData}
            onDelete={this.onDelete}
            onToggleProp={this.onToggleProp}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

// const App = () => {
//   const data = [
//     { name: "Empire of osman", viewers: 988, favourite: false, id: 1 },
//     { name: "Ertugrul", viewers: 789, favourite: false, id: 2 },
//     { name: "Osman", viewers: 1091, favourite: true, id: 3 },
//   ];

//   const onDelete = (id) => {
//     console.log(id);
//   };

//   return (
//     <div className="app font-monospace">
//       <div className="content">
//         <AppInfo />
//         <div className="search-panel">
//           <SearchPanel />
//           <AppFilter />
//         </div>
//         <MovieList data={data} onDelete={onDelete} />
//         <MoviesAddForm />
//       </div>
//     </div>
//   );
// };

export default App;
