const renderSearchedRecipePage = function() {
    $('#root').on("click", "#profile_button", handleProfileButton);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    $('#root').on("click", "#recipes_button", handleRecipesButton);
    $('#root').on("click", "#store_button", handleStoreButton);
    $('#root').on("click", "#motiv_button", handleMotiveButton);
    $('#root').on("click", "#music_button", handleMusicButton);
    return `<div id="everything">
          <section>
            <div class="hero-body">
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
              <div class="container">
              <img src="https://imgix.ranker.com/user_node_img/50068/1001343031/original/gon-and-killua-from-hunter-x-hunter-photo-u2?w=650&q=50&fm=pjpg&fit=crop&crop=faces" alt="hxh" width="360" height"360" align="right">
                <h1 class="title">
                  Search for a Recipe!
                </h1>
                
                <h2 class="subtitle">
                  Looking for a specific recipe? Search in the search bar down below!
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
              <li class="navigation__item" id="search_button"><a href="#" class="is-active">Search</a></li>
              <li class="navigation__item" id="store_button"><a href="#">Find store</a></li>
              <li class="navigation__item" id="motiv_button"><a href="#">Need motivation?</a></li>
              <li class="navigation__item" id="music_button"><a href="#">Let's listen to some music!</a></li>
            </ul>
          </nav>
          </div>
          </header>`
}

const renderNoValidSearch = function() {
    $('#root').on("click", "#try", handleTryAgainButton);
    return `<section>
        <div class="hero-body">
        <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
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
    return `<section>
        <div class="hero-body">
        <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
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