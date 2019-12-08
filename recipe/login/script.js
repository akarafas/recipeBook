const renderHomePage = function() {
  $('#root').on("click", "#cancel_button", handleCancelButton);
  $('#root').on("click", "#submit_button", handleSubmitButton);
  return `<div>
        <section class="hero is-white">
            <div class="container">
            </div>
            <div class="section buttons">
            </div>
        </section>
        
      </div>
      <div class="container is-fluid">
        <div class="notification"><div>
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



// $(function() {
//     const $form = $('#login-form');
//     const $message = $('#message');
  
//     $form.submit(function(e) {
//       e.preventDefault();
  
//       $message.html('');
  
//       const data = $form.serializeArray().reduce((o, x) => {
//         o[x.name] = x.value;
//         return o;
//       }, {});
      
//       $.ajax({
//         url: 'https://comp426fa19.cs.unc.edu/sessions/login',
//         type: 'POST',
//         data,
//         xhrFields: {
//             withCredentials: true,
//         },
//       }).then(() => {
//         $message.html('<span class="has-text-success">Success! You are now logged in.</span>');
//         // redirect
//         location.href=`../index.html`;
//       }).catch(() => {
//         $message.html('<span class="has-text-danger">Something went wrong and you were not logged in. Check your email and password and your internet connection.</span>');
//       });
//     });
//   });