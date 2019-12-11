const renderPrivateHomePage = function() {
    $('#root').on("click", "#profile_button", handleProfileButton);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    $('#root').on("click", "#recipes_button", handleRecipesButton);
    $('#root').on("click", "#motiv_button", handleMotiveButton);
    $('#root').on("click", "#music_button", handleMusicButton);
    return `<div>
          <section>
            <div class="hero-body">
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
              <div class="container">
              <img src="https://media2.giphy.com/media/3o72FiGvRpncRVKbbG/source.gif" alt="cutefood" width="200" height"200" align="right">
                <h1 class="title">
                Search for a grocery store near you!
                </h1>
                <h2 class="subtitle">
                Unsure where the nearest grocery store near you is? Scroll down to search!
                </h2>
              </div>
              <div class="section buttons">
                <button id="profile_button" class="button is-link is-light">View Profile</button>
                <button id="logout_button" class="button is-danger is-light">Log Out</button>
              </div>
            </div>
          </section>
          <header class="header sticky sticky--top js-header">
          <div class="grid">
          <nav class="navigation">
            <ul class="navigation__list navigation__list--inline">
              <li class="navigation__item" id="recipes_button"><a href="#">Recipes</a></li>
              <li class="navigation__item" id="search_button"><a href="#">Search</a></li>
              <li class="navigation__item" id="store_button"><a href="#" class="is-active">Find store</a></li>
              <li class="navigation__item" id="motiv_button"><a href="#">Need motivation?</a></li>
              <li class="navigation__item" id="music_button"><a href="#">Let's listen to some music!</a></li>
            </ul>
          </nav>
          </div>
          </header>`
  };


const handleProfileButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    location.href=`../user_profile/index.html`;

};

const handleLogoutButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();  
    location.href=`../index.html`;
  };

  const handleRecipesButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();  
    location.href=`../private_homepage/index.html`;
  };

  const handleMotiveButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();  
    location.href=`/../motiv/index.html`;
  };

  const handleMusicButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    location.href=`../music/index.html`;
  }

const loadDom = function() {
    const $root = $('#root');
    $root.append(renderPrivateHomePage());
  };
  
  $(function() {
      async function main() {
          loadDom();
      }
      main();
  });