import { Component, useState } from "react";
import "./movies-add-form.scss";

const MoviesAddForm = ({ addForm }) => {
  const [state, setState] = useState({ name: "", views: "" });

  const changeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const addFormHandler = (event) => {
    event.preventDefault();

    if (state.name === "" || state.views === "") {
      alert("Complete name and views");
      return;
    }

    const data = { name: state.name, viewers: state.views };
    addForm(data);

    setState({ name: "", views: "" });
  };

  return (
    <div className="movies-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex" onSubmit={addFormHandler}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
          onChange={changeHandler}
          name="name"
          value={state.name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Necha marotaba ko'rilgan?"
          onChange={changeHandler}
          name="views"
          value={state.views}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

// class MoviesAddForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       views: "",
//     };
//   }

//   changeHandler = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   addFormHandler = (event) => {
//     event.preventDefault();

//     this.props.addForm({
//       name: this.state.name,
//       viewers: this.state.views,
//     });

//     this.setState({
//       name: "",
//       views: "",
//     });
//   };

//   render() {
//     const { name, views } = this.state;

//     return (
//       <div className="movies-add-form">
//         <h3>Yangi kino qo'shish</h3>
//         <form className="add-form d-flex" onSubmit={this.addFormHandler}>
//           <input
//             type="text"
//             className="form-control new-post-label"
//             placeholder="Qanday kino?"
//             onChange={this.changeHandler}
//             name="name"
//             value={name}
//           />
//           <input
//             type="number"
//             className="form-control new-post-label"
//             placeholder="Necha marotaba ko'rilgan?"
//             onChange={this.changeHandler}
//             name="views"
//             value={views}
//           />
//           <button type="submit" className="btn btn-outline-dark">
//             Qo'shish
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

export default MoviesAddForm;
