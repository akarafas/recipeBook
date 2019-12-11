const renderSecretPage = function() {
    $('#root').on("click", "#home_button", handleHomeButton);
    $('#root').on("click", "#profile_button", handleProfileButton);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    $('#root').on("click", "#postTweet_button", handlePostButtonPress);
    return `<div id="everything">
          <div>
          <div>
          <section>
            <div class="hero-body">
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
              <div class="container">
                <h1 class="title">
                  Secret Recipes Homepage
                </h1>
                <h2 class="subtitle">
                  Post recipes only YOU want to see...
                </h2>
              </div>
              <div class="section buttons">
              <button id="home_button" class="button is-primary is-light">Home</button>
              <button id="profile_button" class="button is-link is-light">Profile</button>
              <button id="logout_button" class="button is-danger is-light">Logout</button>
             </div>
            </div>
          </section>
        </div>

        <section class="hero is-link" id="postTweet">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                    Post Your Secret Recipe!
                    </h1>
                    <h2 class="subtitle">
                    <br>
                    <button type="button" class="button is-dark level-item" id="postTweet_button">Post!</button>
                    </h2>
                </div>
            </div>
        </section>
        </div>
        </div>
        </div>`
};

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
        <div><textarea id="newRecipe_title" class="textarea" placeholder="Ex. Granda's Top Secret Chocolate Chip Cookies!" rows="1"></textarea></div>
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
  
  const renderRecipeCard = function(title, ing, inst) {
    $('#root').on("click", "#delete_button", handleDeleteButton);
    return `<div id="delete_card" class="box">
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
        <div id="${title}">
        <button type="button" class="button is-danger" id="delete_button">Delete</button>
        </div>
      </article>
    </div>`
  };

const handleDeleteButton = function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    // let titleR = $(`${title}`);
  
    let jwt = localStorage.getItem('jwt');

    const userRoot = new axios.create({
      baseURL: "http://localhost:3000/user"
    });
  
    async function createRecipeUser() {
      return await userRoot.delete(`/recipes/${event.target.parentElement.id}/`, {
        headers: { Authorization: `Bearer ${jwt}` }
      })
    }
  
    (async () => {
      await createRecipeUser();
    })();
  
  
    location.reload();
}

const handlePostButtonPress = function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    $('#postTweet').replaceWith(renderCreate());
  }

  const handleCreateButtonPress = function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  
    let titleR = $('#newRecipe_title').val();
    let ingR = $('#newRecipe_ing').val();
    let instR = $('#newRecipe_inst').val();
  
    let jwt = localStorage.getItem('jwt');

    const userRoot = new axios.create({
      baseURL: "http://localhost:3000/user"
    });
  
    async function createRecipeUser({title = 'title', ing = 'ing', inst = 'inst'}) {
      return await userRoot.post(`/recipes/${titleR}/`, {
        data: {title, ing, inst}
      }, {
        headers: { Authorization: `Bearer ${jwt}` }
      })
    }
  
    (async () => {
      await createRecipeUser({
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
    $('#everything').replaceWith(renderSecretPage());
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

  const handleProfileButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    location.href=`../user_profile/index.html`;
  };
  


  const loadDom = function() {
    const $root = $('#root');
    $root.append(renderSecretPage());

    let jwt = localStorage.getItem('jwt');

    const userRoot = new axios.create({
      baseURL: "http://localhost:3000/user"
    })

    async function getRecipes() {
      return await userRoot.get('/recipes', {
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

      let sortedRecipes = Object.keys(info.data.result).sort();

      for (let i = x-1; i >=0; i--) {
        let recipe = info.data.result[sortedRecipes[i]];
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