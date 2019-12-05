const renderPrivateHomePage = function() {
    $('#root').on("click", "#profile_button", handleProfileButton);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    return `<div>
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
                <button id="profile_button" class="button is-link is-light">View Profile</button>
                <button id="logout_button" class="button is-link is-light">Log Out</button>
              </div>
            </div>
          </section>
          <div class="tabs is-medium">
            <ul>
              <li class="is-active"><a>Recipes</a></li>
              <li><a>Planning</a></li>
              <li><a>Find store</a></li>
              <li><a>Find recipes</a></li>
            </ul>
          </div>
        </div>
        <div class="container is-fluid">
          <div class="notification">
            render recipe feed here!!!
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