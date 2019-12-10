const renderUserProfile = function() {
    $('#root').on("click", "#home_button", handleHomeButton);
    $('#root').on("click", "#edit_button", handleEditButtonPress);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    return `<div id="userProf">
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
        <section class="hero is-primary is-small">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-4">Name</h1>
                <div class="container is-fluid">
                  <div class="notification has-text-dark">    
                  </div>
                </div>
              <h1 class="title is-4">Username</h1>
                <div class="container is-fluid">
                  <div class="notification has-text-dark">
                  </div>
                </div>
              <h1 class="title is-4">Email</h1>
                <div class="container is-fluid">
                  <div class="notification has-text-dark">
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section class="hero is-link is-small">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-4">Bio</h1>
              <div class="container is-fluid">
                <div class="notification has-text-dark">    
                </div>
              </div>
            <h1 class="title is-4">Birthday</h1>
              <div class="container is-fluid">
                <div class="notification has-text-dark">
                </div>
              </div>
            <h1 class="title is-4">Favorite Recipe</h1>
              <div class="container is-fluid">
                <div class="notification has-text-dark">
                </div>
              </div>
            <h1 class="title is-4">Favorite Cooking Song</h1>
              <div class="container is-fluid">
                <div class="notification has-text-dark">
                </div>
              </div>
          </div>
          </div>
      </section>
        </div>`
  };

  const renderEditProfile = function() {
    $('#root').on("click", "#cancel", handleCancelButton);
    $('#root').on("click", "#save", handleSaveButton);
    return `<div id="editProf">
          <div>
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
                <button id="cancel" class="button is-link is-light">Cancel</button>
                <button id="save" class="button is-danger is-light">Save</button>
              </div>
            </div>
          </section>
        </div>
        <section class="hero is-link is-small">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-4">Bio</h1>
              <div class="control">
                <input class="input is-focused" type="text" placeholder="Focused input">
              </div>
            <h1 class="title is-4">Birthday</h1>
              <div class="control">
                <input class="input is-focused" type="text" placeholder="Focused input">
              </div>
            <h1 class="title is-4">Favorite Recipe</h1>
              <div class="control">
                <input class="input is-focused" type="text" placeholder="Focused input">
              </div>
            <h1 class="title is-4">Favorite Cooking Song</h1>
              <div class="control">
                <input class="input is-focused" type="text" placeholder="Focused input">
              </div>
          </div>
          </div>
      </section>
        </div>
        </div>
        </div>`
  };

const handleEditButtonPress = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    $(event.target.closest('#userProf')).replaceWith(renderEditProfile());
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

const handleCancelButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  $('#editProf').replaceWith(renderUserProfile());

};

const handleSaveButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
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