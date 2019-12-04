const renderHomePage = function() {
  $('#root').on("click", "#back_button", handleBackButton);
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
              <button id="back_button" class="button is-link is-light">Back</button>
            </div>
          </div>
        </section>
        
      </div>
      <div class="container is-fluid">
        <div class="notification">
          place login stuff?
        </div>
      </div>`
};

const handleBackButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  location.href=`../index.html`;

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