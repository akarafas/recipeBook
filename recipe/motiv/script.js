const renderPrivateHomePage = function() {
    $('#root').on("click", "#profile_button", handleProfileButton);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    $('#root').on("click", "#recipes_button", handleRecipesButton);
    $('#root').on("click", "#store_button", handleStoreButton);
    $('#root').on("click", "#recipes_button", handleRecipesButton);
    $('#root').on("click", "#gen_button", handleGenButton);
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
              <li id="store_button"><a>Find store</a></li>
              <li id="motiv_button" class="is-active"><a>Need motivation?</a></li>
            </ul>
          </div>
          <div class="container is-fluid">
          <div class="notification">
            <h1 class="title is-4"> " "</h1>
            <div class="place_motive">Will it replace</div>
            <button id="gen_button" class="button is-primary">Generate</button>
          </div>
        </div>
        </div>`
  };


const handleProfileButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    location.href=`../../user_profile/index.html`;

};

const handleLogoutButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();  
  location.href=`../../index.html`;
 };

const handleRecipesButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();  
  location.href=`../../private_homepage/index.html`;
};

const handleStoreButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();  
  location.href=`../../mapquest_api/index.html`;
};

const createMotiv = function () { 
    let arr = ["Keep cooking!", "Go Chef!", "Chef on!"];
    let num = Math.floor(arr.length*Math.random());
    let str = arr[num];
    console.log(str);
    // $("place_motiv").append(`<div>`+str+`</div>`);
    return `<div>` + str + '</div>'
};

const handleGenButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation(); 
  // $('#place_motiv').empty();
  // $('#place_motiv').append(createMotiv());
  $('#place_motiv').replaceWith(createMotiv());
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