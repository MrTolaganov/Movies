import "./app-filter.scss";

const AppFilter = ({ updateFilterHandler, filter }) => {
  return (
    <div className="btn-group">
      {btnsArr.map((btn) => (
        <button
          key={btn.name}
          type="button"
          className={
            "btn btn-" + (btn.name === filter ? "" : "outline-") + "dark"
          }
          onClick={() => updateFilterHandler(btn.name)}
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
