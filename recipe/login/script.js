const renderHomePage = function() {
  $('#root').on("click", "#cancel_button", handleCancelButton);
  $('#root').on("click", "#submit_button", handleSubmitButton);
  return `<div>
        <section class="hero">
            <div class="container">
            </div>
            <div class="section buttons">
            </div>
        </section>
        
      </div>
      <div class="container is-fluid">
        <div class="notification is-warning"><div>
          <div class="field">
          <h1 class="title is-2">Login</h1>
          <label class="title is-6">Username</label>
          <div class="control">
            <input id="username" class="input" type="text" placeholder="Enter Username here">
            <label class="title is-6">Password</label>
            <div class="control">
              <input id="password" class="input" type="password" placeholder="Enter password here">
          <div class="section is-small">
            <button id="cancel_button" class="button is-danger is-light">Cancel</button>
            <button id="submit_button" class="button is-primary" type="submit" value="Submit">Login</button>
          </div>
        </div>
      </div>
    </div>  
  </div>
  </div>
</div>

<div>
        <section class="hero">
            <div class="container">
            </div>
            <div class="section buttons">
            </div>
        </section>
        
      </div>
      <div>
        <section class="hero">
            <div class="container">
            </div>
            <div class="section buttons">
            </div>
        </section>
        
      </div>`
};

const handleCancelButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  location.href=`../index.html`;

};

const handleSubmitButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  let username = $('#username').val();
  let password = $('#password').val();

  async function loginToAccount() {
    try {
      const result = await axios({
        method: 'POST',
        url:'http://localhost:3000/account/login',
        data: {
          "name": username,
          "pass": password
        }
      });
  
      localStorage.setItem('jwt', result.data.jwt);
      location.href=`../private_homepage/index.html`;
    }
    catch(error) {
      return alert("Incorrect username or password, try again.")
    }
  }

  loginToAccount();
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
