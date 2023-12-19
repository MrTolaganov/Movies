import { useContext } from "react";
import "./app-filter.scss";
import { Context } from "../../context";

const AppFilter = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="btn-group">
      {btnsArr.map((btn) => (
        <button
          key={btn.name}
          type="button"
          className={
            "btn btn-" + (btn.name === state.filter ? "" : "outline-") + "dark"
          }
          onClick={() => dispatch({ type: "ON_FILTER", payload: btn.name })}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const btnsArr = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "Mashhur kinolar" },
  { name: "mostViewers", label: "Eng ko'p ko'rilgan kinolar" },
];

export default AppFilter;
