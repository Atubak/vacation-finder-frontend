export const selectAllCategories = () => (reduxState) =>
  reduxState.locations.allCategories;
export const selectSelectedLocation = () => (reduxState) =>
  reduxState.locations.selectedLocation;
export const selectSelectedLocationDataPoints = () => (reduxState) =>
  reduxState.locations.selectedLocation.dataPoints;
export const selectQueryCategories = () => (reduxState) =>
  reduxState.locations.query.categories;
export const selectQueryResults = () => (reduxState) =>
  reduxState.locations.query.results;
export const selectResultsAmt = () => (reduxState) =>
  reduxState.locations.query.resultsAmt;
export  const selectRecentLocs = () => (reduxState) => reduxState.locations.recentLocations;