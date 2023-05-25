import "./styles.css";
import {
  prevSearchParams,
  createSearchParams,
  useSearchParams
} from "react-router-dom";
import { useReducer, useState } from "react";
let initState = {
  category: [],
  sort: []
};

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const updateFilterParams = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      initState = {
        ...initState,
        category: [...searchParams.getAll("category"), name]
      };
      setSearchParams((p) => createSearchParams(initState));
    } else {
      initState = {
        ...initState,
        category: searchParams.getAll("category").filter((c) => c !== name)
      };
      setSearchParams((p) => createSearchParams(initState));
    }
  };

  const updateSortParams = (event) => {
    const { value } = event.target;
    initState = {
      ...initState,
      sort: value
    };
    setSearchParams((p) => createSearchParams(initState));
  };
  const removeSortParams = () =>
    setSearchParams(createSearchParams({ ...initState, sort: [] }));

  return (
    <div className="App">
      <form>
        <input
          type="checkbox"
          name="Mobile"
          checked={
            searchParams.has("category") &&
            searchParams.getAll("category").includes("Mobile")
          }
          onChange={updateFilterParams}
        />{" "}
        <label>Mobile</label>
        <input
          type="checkbox"
          name="Accessories"
          checked={
            searchParams.has("category") &&
            searchParams.getAll("category").includes("Accessories")
          }
          onChange={updateFilterParams}
        />
        <label>Accessories</label>
        <input
          type="checkbox"
          name="Laptop"
          checked={
            searchParams.has("category") &&
            searchParams.getAll("category").includes("Laptop")
          }
          onChange={updateFilterParams}
        />
        <label>Laptop</label>
        <input
          type="checkbox"
          name="Watch"
          checked={
            searchParams.has("category") &&
            searchParams.getAll("category").includes("Watch")
          }
          onChange={updateFilterParams}
        />
        <label>Watch</label>
        <input
          type="radio"
          name="sort"
          value="LTH"
          checked={searchParams.getAll("sort").includes("LTH")}
          onChange={updateSortParams}
        />
        <label>Low To High</label>
        <input
          type="radio"
          name="sort"
          value="HTL"
          checked={searchParams.getAll("sort").includes("HTL")}
          onChange={updateSortParams}
        />
        <label>High To Low</label>
        <p onClick={removeSortParams}>clear sort</p>
      </form>
    </div>
  );
}
