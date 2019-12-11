const renderHomePage = function() {
    $('#root').on("click", "#login_button", handleLoginButton);
    $('#root').on("click", "#signup_button", handleSignupButton);
    return `<section>
            <div class="hero-body">
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <img src="http://cocobayresort.com/wp-content/uploads/2018/11/cooking-clipart-cook-dinner-6.png" alt="clipart" width="200" height"200" align="right">
              <div class="container">
                <h1 class="elegant">
                  DiscoverCook
                </h1>
                <br>
                <br>
                <h2 class="subtitle_stuff">
                  Discover new recipes to cook...
                </h2>
              </div>
              <div class="section buttons">
                <button id="login_button" class="button is-primary is-light">Login</button>
                <button id="signup_button" class="button is-primary is-light">Sign Up</button>
              </div>
            </div>
          </section>
          <section class="hero is-dark">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Recipes
                </h1>
              </div>
            </div>
          </section>`
};

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

const handleLoginButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    location.href=`../login/index.html`;

};

const handleSignupButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();  
    location.href=`../create_account/index.html`;
  };

const loadDom = function() {
    const $root = $('#root');
    $root.append(renderHomePage());

    const pubRoot = new axios.create({
      baseURL: "http://localhost:3000/public"
    })

    async function getRecipes() {
      return await pubRoot.get('/recipes');
    }

    (async () => {
      let info = await getRecipes();
      let x;

      if (Object.keys(info.data.result).length < 50) {
        x = Object.keys(info.data.result).length;
      } else {
        x = 50;
      }

      let sortedRecipes = Object.keys(info.data.result).sort();

      for (let i=0; i < x; i++) {
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
