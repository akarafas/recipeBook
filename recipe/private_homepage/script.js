

const renderPrivateHomePage = function() {
    $('#root').on("click", "#profile_button", handleProfileButton);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    $('#root').on("click", "#store_button", handleStoreButton);
    $('#root').on("click", "#postTweet_button", handlePostButtonPress);
    $('#root').on("click", "#motiv_button", handleMotivButton);
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
              <li id="music_button"><a>Let's listen to some music!</a></li>
            </ul>
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
        <img src="http://2.bp.blogspot.com/-MNZrXyNxSYA/VCeMrnPOSpI/AAAAAAAAJZg/xbXTnioXqwE/s1600/cookbook-clip.gif" alt="recipegif" width="200" height"200" align="right">
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

// create each recipe card here
const renderRecipeCard = function(title, ing, inst) {
  return `<div class="box">
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

// create tweet button press
const handleCreateButtonPress = function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  let titleR = $('#newRecipe_title').val();
  let ingR = $('#newRecipe_ing').val();
  let instR = $('#newRecipe_inst').val();

  let jwt = localStorage.getItem('jwt');

  const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/public/recipes"
  });

  const priRoot = new axios.create({
    baseURL: "http://localhost:3000/private/recipes"
  })

  async function createRecipePublic({title = 'title', ing = 'ing', inst = 'inst'}) {
    return await pubRoot.post(`/${titleR}/`, {
      data: {title, ing, inst}
    })
  }

  async function createRecipePrivate({title = 'title', ing = 'ing', inst = 'inst'}) {
    return await priRoot.post(`/${titleR}/`, {
      data: {title, ing, inst}
    }, {
      headers: { Authorization: `Bearer ${jwt}` }
    })
  }

  (async () => {
    await createRecipePrivate({
      title: titleR,
      ing: ingR,
      inst: instR
    });
  })();

  (async () => {
    await createRecipePublic({
      title: titleR,
      ing: ingR,
      inst: instR
    });
  })();

  location.reload();
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

  const handleMusicButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();  
    location.href=`../music/index.html`;
  };

const loadDom = function() {
    const $root = $('#root');
    $root.append(renderPrivateHomePage());

    let jwt = localStorage.getItem('jwt');

    const priRoot = new axios.create({
      baseURL: "http://localhost:3000/private"
    })

    async function getNumRecipes() {
      return await priRoot.get('/recipes/', {
        headers: { Authorization: `Bearer ${jwt}` }
      });
    }

    async function getRecipes() {
      return await priRoot.get('/recipes', {
        headers: { Authorization: `Bearer ${jwt}` }
      });
    }

    (async () => {
      let info = await getRecipes();
      let x;

      if (Object.keys(info.data.result).length < 10) {
        x = Object.keys(info.data.result).length;
      } else {
        x = 10;
      }

      let recipes = await getRecipes();
      let sortedRecipes = Object.keys(recipes.data.result).sort();

      for (let i = x-1; i >=0; i--) {
        let recipe = recipes.data.result[sortedRecipes[i]];
        //console.log(recipe.title);
        $root.append(renderRecipeCard(recipe.title, recipe.ing, recipe.inst));
      }
    })();
  };
  
  $(function() {
      async function main() {
          loadDom();
      }
      main();
  });