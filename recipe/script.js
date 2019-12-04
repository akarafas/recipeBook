const renderHomePage = function() {
    $('#root').on("click", "#login_button", handleLoginButton);
    $('#root').on("click", "#signup_button", handleSignupButton);
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
                <button id="login_button" class="button is-link is-light">Login</button>
                <button id="singup_button" class="button is-link is-light">Sign Up</button>
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
  };
  
  $(function() {
      async function main() {
          loadDom();
      }
      main();
  });