const renderUserProfile = function() {
    $('#root').on("click", "#edit_button", handleEditButtonPress);
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
                <button id="edit_button" class="button is-link is-light">Edit Profile</button>
              </div>
            </div>
          </section>
        </div>
        <div class="container is-fluid">
          <div class="notification">
            
          </div>
        </div>`
  };

const handleEditButtonPress = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    location.href=`../user_profile/index.html`;

};

const loadDom = function() {
    const $root = $('#root');
    $root.append(renderUserProfile());
  };
  
  $(function() {
      async function main() {
          loadDom();
      }
      main();
  });