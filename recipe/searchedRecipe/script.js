const renderSearchedRecipePage = function() {
    $('#root').on("click", "#profile_button", handleProfileButton);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    $('#root').on("click", "#recipes_button", handleRecipesButton);
    $('#root').on("click", "#store_button", handleStoreButton);
    $('#root').on("click", "#motiv_button", handleMotiveButton);
    $('#root').on("click", "#music_button", handleMusicButton);
    return `<div id="everything">
          <section class="hero is-bold is-dark">
            <div class="hero-body">
              <div class="container">
              <img src="https://imgix.ranker.com/user_node_img/50068/1001343031/original/gon-and-killua-from-hunter-x-hunter-photo-u2?w=650&q=50&fm=pjpg&fit=crop&crop=faces" alt="hxh" width="360" height"360" align="right">
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
              <li class="is-active"><a>Search</a></li>
              <li id="store_button"><a>Find store</a></li>
              <li id="motiv_button"><a>Need motivation?</a></li>
              <li id="music_button"><a>Let's listen to some music!</a></li>
            </ul>
          </div>`
}

const renderNoValidSearch = function() {
    $('#root').on("click", "#try", handleTryAgainButton);
    return `<section class="hero is-warning" id="searchRecipes">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Sorry, no recipes match your search :(
                </h1>
            </div>
            <div class="section buttons">
                <button id="try" class="button is-primary">Search Again</button>
            </div>
        </div>
    </section>`
}

const renderValidSearch = function(title, ing, inst) {
    $('#root').on("click", "#try", handleTryAgainButton);
    return `<section class="hero is-warning" id="searchRecipes">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Here is your recipe!
                </h1>
            </div>
            <div class="section buttons">
                <button id="try" class="button is-primary">Search Again</button>
            </div>
        </div>
    </section>
    <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p><strong>${title}</strong></p>
          <p>Ingredients:</p>
          <p><small>${ing}</small></p>
          <p>Instructions:</p>
          <p><small>${inst}</small></p>
        </div>
      </div>
    </article>
  </div>`
}

const handleTryAgainButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    location.href=`../../privateSearch/index.html`;
}

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

const handleMotiveButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();  
  location.href=`/../motiv/index.html`;
};

const handleMusicButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    location.href=`../music/index.html`;
};

const loadDom = function() {
    const $root = $('#root');
    $root.append(renderSearchedRecipePage());
    
    let searchedRecipe = localStorage.getItem('searchedRecipe');

    if (searchedRecipe == null) {
        $root.append(renderNoValidSearch());
    } else {
        localStorage.removeItem('searchedRecipe');
        let jwt = localStorage.getItem('jwt');

        const priRoot = new axios.create({
            baseURL: "http://localhost:3000/private"
        })
      
        async function getRecipes() {
            return await priRoot.get('/recipes', {
              headers: { Authorization: `Bearer ${jwt}` }
            });
        }
      
        (async () => {
            let info = await getRecipes();
      
            let sortedRecipes = Object.keys(info.data.result).sort();

            let recipe = info.data.result[searchedRecipe];

            $root.append(renderValidSearch(recipe.title, recipe.ing, recipe.inst));
          })();
    }
  };
  
  $(function() {
      async function main() {
          loadDom();
      }
      main();
  });