// const handleInputChange = (event) => {
//   const { name, checked } = event.target;
//   console.log(name, checked);
//   setSearchParams((prevSearchParams) => {
//     const params = new URLSearchParams(prevSearchParams);
//     if (checked) {
//       params.append("category", name);
//       console.log(params);
//     } else {
//       const deleteParams = params
//         .getAll("category")
//         ?.filter((filter) => filter !== name);
//       if (deleteParams.length <= 0) {
//         console.log("i ran");
//         params.delete("category", name);
//       } else {
//         params.delete("category", name);
//         deleteParams.forEach((param) => params.append("category", param));
//       }
//     }
//     return params;
//   });
// };

// let sortBy = {};
//   const handleSort = (e) => {
//     const { value } = e.target;
//     setSearchParams(createSearchParams({ sort: [value] }));
//   };

//   // console.log();
//   const handleSortChange = (event) => {
//     const { value } = event.target;
//     console.log("i am in func", value);
//     setSearchParams((params) => {
//       if (value === "LTH") {
//         console.log("i am in lth");
//         params.append("sort", value);
//       } else if (value === "HTL") {
//         console.log("i am in htl");
//         params.append("sort", value);
//       }
//       return params;
//     }
