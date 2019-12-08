const renderPrivateHomePage = function() {
    $('#root').on("click", "#profile_button", handleProfileButton);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    $('#root').on("click", "#store_button", handleStoreButton);
    $('#root').on("click", "#postTweet_button", handlePostButtonPress);
    $('#root').on("click", "#motiv_button", handleMotivButton);
    return `<div id="everything">
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

          <section class="hero is-warning" id="postTweet">
          <div class="hero-body">
          <div class="container">
          <h1 class="title">
            Post Your Recipe!
          </h1>
          <h2 class="subtitle">
          <br>
          <button type="button" class="button is-dark level-item" id="postTweet_button">Post!</button>
          </h2>
          </div>
          </div>
          </section>

          <div class="tabs is-medium">
            <ul>
              <li class="is-active"><a>Recipes</a></li>
              <li id="store_button"><a>Find store</a></li>
              <li id="motiv_button"><a>Need motivation?</a></li>
            </ul>
          </div>
        
        <div class="container is-fluid">
          <div class="notification">
            render recipe feed here!!!
          </div>
        </div>
        </div>`
  };

  // create tweets in textarea
const renderCreate = function() {
  $('#root').on("click", "#create_button", handleCreateButtonPress);
  $('#root').on("click", "#posttweetCancel_button", handlePostCancelButtonPress);
  return `<section class="hero is-warning" id="create">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Create Your Recipe Post Here:
      </h1>
      <div id="newRecipe">
      <h2 class="title is-4">
      Title:
      </h2>
      <div><textarea id="newRecipe_title" class="textarea" placeholder="Ex. The Yummiest Christmas Cookies!" rows="1"></textarea></div>
      <br>
      <h2 class="title is-4">
      Ingredients:
      </h2>
      <div><textarea id="newRecipe_ing" class="textarea" placeholder="Ex. 2 cups of flour..."></textarea></div>
      <br>
      <h3 class="title is-4">
      Procedure:
      </h3>
      <div><textarea id="newRecipe_inst" class="textarea" placeholder="Ex. Step 1. Heat the oven to 350 degrees..."></textarea></div>
      <br>
      <button type="button" class="button is-primary" id="create_button">Post!</button>
      <button type="button" class="button is-dark" id="posttweetCancel_button">Cancel</button>
      </div>
    </div>
  </div>
  </section>`
};

// create tweet button press
const handleCreateButtonPress = function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  let title = $('#newRecipe_title').val();
  let ing = $('#newRecipe_ing').val();
  let inst = $('#newRecipe_inst').val();

  async function createRecipe() {
    await axios({
      method: 'POST',
      url: `http://localhost:3000/public/recipes/${title}`,
      data: {
        ing: ing,
        inst: inst
      }
    });
  
    await axios({
      method: 'POST',
      url: `http://localhost:3000/private/recipes/${title}`,
      data: {
        ing: ing,
        inst: inst
      }
    });
  }

  createRecipe();
};

const handlePostCancelButtonPress = function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  $('#everything').replaceWith(renderPrivateHomePage());
};

const handlePostButtonPress = function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  $('#postTweet').replaceWith(renderCreate());
}

const handleProfileButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    location.href=`../user_profile/index.html`;

};

const handleMotivButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  location.href=`../motiv/index.html`;
}

const handleLogoutButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();  
    location.href=`../index.html`;
  };

  const handleStoreButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();  
    location.href=`../mapquest_api/index.html`;
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