export default function User() {
  return (
    <div id="User">
      <div id="userInfo">
        {/* when clicking on either the image or the description, might be nice to be able to change the info */}
        <div id="userImg">
          <img src="" alt="your nice face" />
        </div>
        <div id="userDescription">
          <p>some cool text to describe you</p>
        </div>
      </div>

      <div id="friendsAndFavList">
        <div id="friends">
          {/* insert a list of friends here, needs a db req */}
          {/* each friend is ideally clickable */}
        </div>
        <div id="favList">
          {/* list all your fav locations here with the same cards as on the results page, also stored in db */}
        </div>
      </div>
    </div>
  );
}
