const renderUserProfile = function() {
    $('#root').on("click", "#home_button", handleHomeButton);
    $('#root').on("click", "#edit_button", handleEditButtonPress);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    return `<div id="userProf">
          <section class="hero is-bold is-dark">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Recipe Book
                </h1>
                <h2 class="subtitle">
                  COMP426
                </h2>
              </div>
              <div class="section buttons">
                <button id="home_button" class="button is-primary is-light">Home</button>
                <button id="edit_button" class="button is-link is-light">Edit Profile</button>
                <button id="logout_button" class="button is-danger is-light">Logout</button>
              </div>
            </div>
          </section>
        </div>
        <div class="container is-fluid">
          <div class="notification">
            <h1 class="title is-4">Name</h1>
            <h1 class="title is-4">Username</h1>
            <h1 class="title is-4">Email</h1>
            <h1 class="title is-4">Bio</h1>
            <h1 class="title is-4">Birthday</h1>
            <h1 class="title is-4">Favorite Recipe</h1>
            <h1 class="title is-4">Favorite Cooking Song</h1>

          </div>
        </div>`
  };

  const renderEditProfile = function() {
    $('#root').on("click", "#cancel", handleCancelButton);
    $('#root').on("click", "#save", handleSaveButton);
    return `<div id="editProf">
          <div>
          <section class="hero is-bold is-dark">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Recipe Book
                </h1>
                <h2 class="subtitle">
                  COMP426
                </h2>
              </div>
              <div class="section buttons">
                <button id="home_button" class="button is-primary is-light">Home</button>
                <button id="edit_button" class="button is-link is-light">Edit Profile</button>
                <button id="logout_button" class="button is-danger is-light">Logout</button>
              </div>
            </div>
          </section>
        </div>
        <div class="container is-fluid">
          <div class="notification">
            <h1 class="title is-4">Name</h1>
            <h1 class="title is-4">Username</h1>
            <h1 class="title is-4">Email</h1>
            <h1 class="title is-4">Bio</h1>
            <h1 class="title is-4">Birthday</h1>
            <h1 class="title is-4">Favorite Recipe</h1>
            <h1 class="title is-4">Favorite Cooking Song</h1>

          </div>
        </div>
        </div>`
  };

const handleEditButtonPress = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    $('#userProf').replaceWith('#editProf');
};

const handleHomeButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  location.href=`../private_homepage/index.html`;
};

const handleLogoutButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  location.href=`../index.html`;
};

const loadDom = function() {
    const $root = $('#root');
    $root.append(renderUserProfile());
  };
  
  $(function() {
      async function main() {
          loadDom();
      }
      main();
  });