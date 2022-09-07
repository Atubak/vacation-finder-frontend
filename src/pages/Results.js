export default function Results() {
  return (
    <div id="Resultspage">
      <div id="resultsDiv">
        {/* consist of a list of cards with each location and some basic info */}
        {/* locations should have a like button on them, might be good to make it a component so that details page can also use it */}
      </div>
      <div id="selectedCategories">
        <div id="selectedCategories">
          <h4>Categories selected: </h4>
          {/* insert here a list of all clicked cats, same as above */}
          {/* if there are no valid locations, show which category was the bottleneck and make it possible to remove them from the selection */}
          <button>REDO SEARCH</button>
        </div>
      </div>
    </div>
  );
}
