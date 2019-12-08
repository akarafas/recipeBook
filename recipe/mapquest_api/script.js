const renderPrivateHomePage = function() {
    $('#root').on("click", "#profile_button", handleProfileButton);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    $('#root').on("click", "#recipes_button", handleRecipesButton);
    $('#root').on("click", "#motiv_button", handleMotiveButton);
    return `<div>
          <section class="hero is-bold is-dark">
            <div class="hero-body">
              <div class="container">
              <img src="https://media2.giphy.com/media/3o72FiGvRpncRVKbbG/source.gif" alt="cutefood" width="200" height"200" align="right">
                <h1 class="title">
                  Recipe Book
                </h1>
                <h2 class="subtitle">
                  COMP426
                </h2>
              </div>
              <div class="section buttons">
                <button id="profile_button" class="button is-link is-light">View Profile</button>
                <button id="logout_button" class="button is-danger is-light">Log Out</button>
              </div>
            </div>
          </section>
          <div class="tabs is-medium">
            <ul>
              <li id="recipes_button"><a>Recipes</a></li>
              <li id="store_button" class="is-active"><a>Find store</a></li>
              <li id="motiv_button"><a>Need motivation?</a></li>
            </ul>
          </div>
        </div>`
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