import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-dark">
        Barcha kinolar
      </button>
      <button type="button" className="btn btn-outline-dark">
        Mashhur kinolar
      </button>
      <button type="button" className="btn btn-outline-dark">
        Eng ko'p ko'rilgan kinolar
      </button>
    </div>
  );
};

export default AppFilter;
