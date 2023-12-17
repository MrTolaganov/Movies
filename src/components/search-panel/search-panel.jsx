import { Component, useState } from "react";
import "./search-panel.scss";

const SearchPanel = (props) => {
  const [term, setTerm] = useState("");

  const updateTermHandler = (event) => {
    const term = event.target.value.toLowerCase().trim();
    setTerm(term);
    props.updateTermHandler(term);
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

// class SearchPanel extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { term: "" };
//   }

//   updateTermHandler = (event) => {
//     const term = event.target.value.toLowerCase().trim();
//     this.setState({ term });
//     this.props.updateTermHandler(term);
//   };

//   render() {
//     return (
//       <input
//         type="text"
//         className="form-control search-input"
//         placeholder="Kinolarni qidirish"
//         onChange={this.updateTermHandler}
//         value={this.state.term}
//       />
//     );
//   }
// }

export default SearchPanel;
