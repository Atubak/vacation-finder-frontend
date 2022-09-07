export default function Search() {
  return (
    <div id="Searchpage">
      <div id="categorySelection">
        <h3>Click on the categories you want at your ~~~VacaLoca~~~</h3>
        {/* should get a list of all cats from redux on pageload and then map over it to render them on page, might need to be a different component*/}
      </div>
      <div id="selectedCategories">
        <h4>Categories selected: </h4>
        {/* insert here a list of all clicked cats, same as above */}
        {/* should be possible to remove them */}
        <button>START SEARCH</button>
      </div>
    </div>
  );
}
