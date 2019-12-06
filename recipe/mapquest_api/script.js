const renderPrivateHomePage = function() {
    $('#root').on("click", "#profile_button", handleProfileButton);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    $('#root').on("click", "#recipes_button", handleRecipesButton);
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
                <button id="logout_button" class="button is-danger is-light">Log Out</button>
              </div>
            </div>
          </section>
          <div class="tabs is-medium">
            <ul>
              <li id="recipes_button"><a>Recipes</a></li>
              <li id="store_button" class="is-active"><a>Find store</a></li>
            </ul>
          </div>
        </div>
        <div class="container is-fluid">
          <div class="notification">
            render recipe feed here!!!
          </div>
        </div>`
  };

// const mapThis = function () {
//   let L;
//   window.onload = function() {
//     L.mapquest.key = '7jPFJ6XLu4weUKW4DE4hEfan2nBuz4SO';
//     let map = L.mapquest.map('map', {
//       center: [53.480759, -2.242631],
//       layers: L.mapquest.tileLayer('map'),
//       zoom: 12
//     });

//   }
// }

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


const loadDom = function() {
    const $root = $('#root');
    $root.append(renderPrivateHomePage());
  };
  
  $(function() {
      async function main() {
          // mapThis();
          loadDom();
      }
      main();
  });