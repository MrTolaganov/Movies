const searchHandler = (arr, term) => {
  if (term.length === 0) {
    return arr;
  } else {
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  }
};

const filterHandler = (arr, filter) => {
  switch (filter) {
    case "popular":
      return arr.filter((item) => item.like);
    case "mostViewers":
      return arr.filter((item) => item.viewers > 800);
    default:
      return arr;
  }
};

export { searchHandler, filterHandler };
