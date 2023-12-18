import { useContext, useEffect, useState } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from "uuid";
import "./app.scss";
import { Context } from "../../context";

const App = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const { state, dispatch } = useContext(Context);

  const onDelete = (id) => {
    setData(data.filter((c) => c.id !== id));
  };

  const addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    const newArr = [...data, newItem];
    setData(newArr);
  };

  const onToggleProp = (id, prop) => {
    const newArr = data.map((item) => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] };
      } else {
        return item;
      }
    });

    setData(newArr);
  };

  const searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    } else {
      return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
    }
  };

  const filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((item) => item.like);
      case "mostViewers":
        return arr.filter((item) => item.viewers > 800);
      default:
        return arr;
    }
  };

  const updateTermHandler = (term) => setTerm(term);

  const updateFilterHandler = (filter) => setFilter(filter);

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
        setData(newArr);
        dispatch({ type: "GET_DATA", payload: newArr });
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo
          allMoviesCount={data.length}
          favouriteMoviesCount={data.filter((item) => item.favourite).length}
        />
        <div className="search-panel">
          <SearchPanel updateTermHandler={updateTermHandler} />
          <AppFilter
            filter={filter}
            updateFilterHandler={updateFilterHandler}
          />
        </div>
        {isLoading && "loading..."}
        <MovieList
          data={filterHandler(searchHandler(data, term), filter)}
          onDelete={onDelete}
          onToggleProp={onToggleProp}
        />
        <MoviesAddForm addForm={addForm} />
      </div>
    </div>
  );
};

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [
//         {
//           name: "Empire of osman",
//           viewers: 988,
//           favourite: false,
//           like: false,
//           id: 1,
//         },
//         {
//           name: "Ertugrul",
//           viewers: 789,
//           favourite: false,
//           like: false,
//           id: 2,
//         },
//         { name: "Omar", viewers: 1091, favourite: false, like: false, id: 3 },
//       ],
//       term: "",
//       filter: "all",
//     };
//   }

//   onDelete = (id) => {
//     this.setState(({ data }) => ({
//       data: data.filter((c) => c.id !== id),
//     }));
//   };

//   addForm = (item) => {
//     const newItem = {
//       name: item.name,
//       viewers: item.viewers,
//       id: uuidv4(),
//       favourite: false,
//       like: false,
//     };

//     this.setState(({ data }) => ({
//       data: [...data, newItem],
//     }));
//   };

//   onToggleProp = (id, prop) => {
//     this.setState(({ data }) => ({
//       data: data.map((item) => {
//         if (item.id === id) {
//           return { ...item, [prop]: !item[prop] };
//         }
//         return item;
//       }),
//     }));
//   };

//   searchHandler = (arr, term) => {
//     if (term.length === 0) {
//       return arr;
//     } else {
//       return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
//     }
//   };

//   updateTermHandler = (term) => this.setState({ term });

//   filterHandler = (arr, filter) => {
//     switch (filter) {
//       case "popular":
//         return arr.filter((item) => item.like);
//       case "mostViewers":
//         return arr.filter((item) => item.viewers > 800);
//       default:
//         return arr;
//     }
//   };

//   updateFilterHandler = (filter) => this.setState({ filter });

//   render() {
//     const { data, term, filter } = this.state;
//     const allMoviesCount = data.length;
//     const favouriteMoviesCount = data.filter((item) => item.favourite).length;
//     const visibleData = this.filterHandler(
//       this.searchHandler(data, term),
//       filter
//     );

//     return (
//       <div className="app font-monospace">
//         <div className="content">
//           <AppInfo
//             allMoviesCount={allMoviesCount}
//             favouriteMoviesCount={favouriteMoviesCount}
//           />
//           <div className="search-panel">
//             <SearchPanel updateTermHandler={this.updateTermHandler} />
//             <AppFilter
//               filter={filter}
//               updateFilterHandler={this.updateFilterHandler}
//             />
//           </div>
//           <MovieList
//             data={visibleData}
//             onDelete={this.onDelete}
//             onToggleProp={this.onToggleProp}
//           />
//           <MoviesAddForm addForm={this.addForm} />
//         </div>
//       </div>
//     );
//   }
// }

// const arr = [
//   {
//     name: "Empire of osman",
//     viewers: 988,
//     favourite: false,
//     like: false,
//     id: 1,
//   },
//   {
//     name: "Ertugrul",
//     viewers: 789,
//     favourite: false,
//     like: false,
//     id: 2,
//   },
//   { name: "Omar", viewers: 1091, favourite: false, like: false, id: 3 },
// ];

export default App;
