const renderUserProfile = function(username, name, email) {
    $('#root').on("click", "#home_button", handleHomeButton);
    $('#root').on("click", "#secret_button", handelSecretButton);
    $('#root').on("click", "#edit_button", handleEditButtonPress);
    $('#root').on("click", "#logout_button", handleLogoutButton);

    // let g = grabData(); 
    // console.log(g);
  
    return `<div id="userProf">
          <div>
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
                <button id="home_button" class="button is-primary is-light">Home</button>
                <button id="secret_button" class="button is-warning is-light">Secret Recipes</button>
                <button id="edit_button" class="button is-link is-light">Edit Profile</button>
                <button id="logout_button" class="button is-danger is-light">Logout</button>
              </div>
            </div>
          </section>
        </div>
        <section class="hero is-primary is-small">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-4">Name</h1>
                <div class="container is-fluid">
                  <div class="notification has-text-dark">    
                    ${name}
                  </div>
                </div>
              <h1 class="title is-4">Username</h1>
                <div class="container is-fluid">
                  <div class="notification has-text-dark">
                  ${username}
                  </div>
                </div>
              <h1 class="title is-4">Email</h1>
                <div class="container is-fluid">
                  <div class="notification has-text-dark">
                  ${email}
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section class="hero is-link is-small">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-4">Bio</h1>
              <div class="container is-fluid">
                <div class="notification has-text-dark">    
                </div>
              </div>
            <h1 class="title is-4">Birthday</h1>
              <div class="container is-fluid">
                <div class="notification has-text-dark">
                </div>
              </div>
            <h1 class="title is-4">Favorite Recipe</h1>
              <div class="container is-fluid">
                <div class="notification has-text-dark">
                </div>
              </div>
            <h1 class="title is-4">Favorite Cooking Song</h1>
              <div class="container is-fluid">
                <div class="notification has-text-dark">
                </div>
              </div>
          </div>
          </div>
      </section>
        </div>`
  };

  const renderEditProfile = function() {
    $('#root').on("click", "#cancel", handleCancelButton);
    $('#root').on("click", "#save", handleSaveButton);
    return `<div id="editProf">
          <div>
          <div>
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
                <button id="cancel" class="button is-link is-light">Cancel</button>
                <button id="save" class="button is-danger is-light">Save</button>
              </div>
            </div>
          </section>
        </div>
        <section class="hero is-link is-small">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-4">Bio</h1>
              <div class="control">
                <input class="input is-focused" type="text" placeholder="Focused input">
              </div>
            <h1 class="title is-4">Birthday</h1>
              <div class="control">
                <input class="input is-focused" type="text" placeholder="Focused input">
              </div>
            <h1 class="title is-4">Favorite Recipe</h1>
              <div class="control">
                <input class="input is-focused" type="text" placeholder="Focused input">
              </div>
            <h1 class="title is-4">Favorite Cooking Song</h1>
              <div class="control">
                <input class="input is-focused" type="text" placeholder="Focused input">
              </div>
          </div>
          </div>
      </section>
        </div>
        </div>
        </div>`
  };

const handleEditButtonPress = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    $(event.target.closest('#userProf')).replaceWith(renderEditProfile());
};

// const grabData = function () {
//   async function createAccount() {
//     let jwt = localStorage.getItem('jwt');

//     const result = await axios({
//       method: 'GET',
//       url:'http://localhost:3000/account/status',
//       headers: { Authorization: `Bearer ${jwt}` }

//     });
//     return result;
//   }
//   createAccount();
// }

const handelSecretButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  location.href=`../secret_recipes/index.html`;
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

const handleCancelButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  $('#editProf').replaceWith(renderUserProfile());

};

const handleSaveButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
};
const handleUpdateButtonPress = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    //
  //   let tweet = $('#editForm').val();
  
  //   async function updateTweet() {
  //     const result = await axios({
  //       method: 'put',
  //       url: `https://comp426fa19.cs.unc.edu/a09/tweets/${event.target.parentElement.id}`,
  //       withCredentials: true,
  //       data: {
  //         body: tweet,
  //       },
  //     });
  //     $(`.${event.target.parentElement.id}`).replaceWith(renderMyTweets(result.data));
  //     // listeners
  //     $('#myEdit_button').on("click", handleEditButtonPress);
  //     $('#myDelete_button').on("click", handleDestroyButtonPress);
  //     $('#myRetweet_button').on("click", handleRetweetButton);
  //     $('#myReply_button').on("click", handleReplyButton);
  //   }
  //   updateTweet();
  // };
};

const loadDom = function(users) {
    const $root = $('#root');
    let username = users.data.user.name;
    let name = users.data.user.data.fullName;
    let email = users.data.user.data.email;

    $root.append(renderUserProfile(username, name, email));
  };
  
  
  $(function() {
      async function createAccount() {
        let jwt = localStorage.getItem('jwt');
    
        const result = await axios({
          method: 'GET',
          url:'http://localhost:3000/account/status',
          headers: { Authorization: `Bearer ${jwt}` }
    
        });
        return result;
      }
      async function main() {
          let userInfo = await createAccount();
          loadDom(userInfo);
      }
      main();
  });