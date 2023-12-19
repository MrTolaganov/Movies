import { useContext, useState } from "react";
import "./search-panel.scss";
import { Context } from "../../context";

const SearchPanel = () => {
  const [term, setTerm] = useState("");
  const { _, dispatch } = useContext(Context);

  const updateTermHandler = (event) => {
    const term = event.target.value.toLowerCase().trim();
    setTerm(term);
    dispatch({ type: "ON_TERM", payload: term });
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolarni qidirish"
      onChange={updateTermHandler}
      value={term}
    />
  );
};

export default SearchPanel;
