export const selectAllCategories = () => (reduxState) =>
  reduxState.locations.allCategories;
export const selectSelectedLocation = () => (reduxState) =>
  reduxState.locations.selectedLocation;
export const selectQueryCategories = () => (reduxState) =>
  reduxState.locations.query.categories;
export const selectQueryResults = () => (reduxState) =>
  reduxState.locations.query.results;
