import { Component, useContext } from "react";
import "./movie-list-item.scss";
import { Context } from "../../context";

// class MovieListItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favourite: false,
//       like: false,
//     };
//   }

//   changeFav = () => {
//     this.setState(({ favourite }) => ({
//       favourite: !favourite,
//     }));
//   };

//   changeLike = () => {
//     this.setState(({ like }) => ({
//       like: !like,
//     }));
//   };

//   render() {
//     const { name, viewers, favourite, like, onDelete, onToggleProp } =
//       this.props;

//     return (
//       <li
//         className={`list-group-item d-flex justify-content-between ${
//           favourite && "favourite"
//         } ${like && "like"}`}
//       >
//         <span
//           className="list-group-item-label"
//           onClick={onToggleProp}
//           data-toggle="like"
//         >
//           {name}
//         </span>
//         <input
//           type="number"
//           className="list-group-item-input"
//           defaultValue={viewers}
//         />
//         <div className="d-flex justify-content-center align-items-center">
//           <button
//             type="button"
//             className="btn-cookie btn-sm"
//             onClick={onToggleProp}
//             data-toggle="favourite"
//           >
//             <i className="fas fa-cookie"></i>
//           </button>
//           <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
//             <i className="fas fa-trash"></i>
//           </button>
//           <i className="fas fa-star"></i>
//         </div>
//       </li>
//     );
//   }
// }

const MovieListItem = (props) => {
  const { name, viewers, favourite, like, id } = props;

  const { state, dispatch } = useContext(Context);

  const onDelete = () => {
    dispatch({ type: "ON_DELETE", payload: id });
  };

  const onToggleProp = (event) => {
    const payload = {
      id,
      prop: event.currentTarget.getAttribute("data-toggle"),
    };

    dispatch({ type: "ON_TOGGLE_PROP", payload });
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        favourite && "favourite"
      } ${like && "like"}`}
    >
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={viewers}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
          data-toggle="favourite"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default MovieListItem;
