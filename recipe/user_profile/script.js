const renderUserProfile = function(username, name, email) {
    $('#root').on("click", "#home_button", handleHomeButton);
    $('#root').on("click", "#secret_button", handelSecretButton);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    return `<div id="userProf">
          <div>
          <section>
            <div class="hero-body">
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
              <div class="container">
                <h1 class="title">
                  My Profile
                </h1>
              </div>
              <div class="section buttons">
                <button id="home_button" class="button is-primary is-light">Home</button>
                <button id="secret_button" class="button is-warning is-light">Secret Recipes</button>
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
                    ${name}
                  </div>
                </div>
              <h1 class="title is-4">Username</h1>
                <div class="container is-fluid">
                  <div class="notification has-text-dark">
                  ${username}
                  </div>
                </div>
              <h1 class="title is-4">Email</h1>
                <div class="container is-fluid">
                  <div class="notification has-text-dark">
                  ${email}
                  </div>
                </div>
            </div>
          </div>
        </section>
      </div>`
  };

const handleEditButtonPress = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    $(event.target.closest('#userProf')).replaceWith(renderEditProfile());
};

const handelSecretButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  location.href=`../secret_recipes/index.html`;
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
  location.reload();
};

const handleSaveButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
};

const loadDom = function(users) {
    const $root = $('#root');
    let username = users.data.user.name;
    let name = users.data.user.data.fullName;
    let email = users.data.user.data.email;

    $root.append(renderUserProfile(username, name, email));
  };
  
  $(function() {
      async function createAccount() {
        let jwt = localStorage.getItem('jwt');
    
        const result = await axios({
          method: 'GET',
          url:'http://localhost:3000/account/status',
          headers: { Authorization: `Bearer ${jwt}` }
    
        });
        return result;
      }
      async function main() {
          let userInfo = await createAccount();
          loadDom(userInfo);
      }
      main();
  });