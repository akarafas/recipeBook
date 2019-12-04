const renderHomePage = function() {
    $('#root').on("click", "#login_button", handleLoginButton);
    $('#root').on("click", "#signup_button", handleSignupButton);
    return `<div class="buttons">
    <button class="button is-link is-light">Login</button>
    <button class="button is-link is-light">Sign Up</button>
</div>`

  };

const handleSignupButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();


};

const handleSignupButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  
    async function updateTweet() {
      const result = await axios({
        method: 'put',
        url: `https://comp426fa19.cs.unc.edu/a09/tweets/${event.target.parentElement.id}`,
        withCredentials: true,
        data: {
          body: tweet,
        },
      });
      $(`.${event.target.parentElement.id}`).replaceWith(renderMyTweets(result.data));
    }
    updateTweet();
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
  console.log("hi");