import { useContext, useState } from "react";
import "./movies-add-form.scss";
import { Context } from "../../context";

const MoviesAddForm = () => {
  const [state, setState] = useState({ name: "", views: "" });

  const { _, dispatch } = useContext(Context);

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
    dispatch({ type: "ADD_FORM", payload: data });
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

export default MoviesAddForm;
