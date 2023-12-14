import { Component } from "react";
import "./search-panel.scss";

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  updateTermHandler = (event) => {
    const term = event.target.value.toLowerCase().trim();
    this.setState({ term });
    this.props.updateTermHandler(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Kinolarni qidirish"
        onChange={this.updateTermHandler}
        value={this.state.term}
      />
    );
  }
}

// const SearchPanel = () => {
//   return (
//     <input
//       type="text"
//       className="form-control search-input"
//       placeholder="Kinolarni qidirish"
//     />
//   );
// };

export default SearchPanel;
