import { Component } from "react";
import "./movies-add-form.scss";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      views: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addFormHandler = (event) => {
    event.preventDefault();

    this.props.addForm({
      name: this.state.name,
      viewers: this.state.views,
    });
    
    this.setState({
      name: "",
      views: "",
    });
  };

  render() {
    const { name, views } = this.state;

    return (
      <div className="movies-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex" onSubmit={this.addFormHandler}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino?"
            onChange={this.changeHandler}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Necha marotaba ko'rilgan?"
            onChange={this.changeHandler}
            name="views"
            value={views}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

// const MoviesAddForm = () => {
//   return (
//     <div className="movies-add-form">
//       <h3>Yangi kino qo'shish</h3>
//       <form className="add-form d-flex">
//         <input
//           type="text"
//           className="form-control new-post-label"
//           placeholder="Qanday kino?"
//         />
//         <input
//           type="number"
//           className="form-control new-post-label"
//           placeholder="Necha marotaba ko'rilgan?"
//         />
//         <button type="submit" className="btn btn-outline-dark">
//           Qo'shish
//         </button>
//       </form>
//     </div>
//   );
// };

export default MoviesAddForm;
