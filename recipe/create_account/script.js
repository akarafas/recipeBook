const renderHomePage = function() {
    $('#root').on("click", "#back_button", handleBackButton);
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
    <h1 class="title is-2"> Create Account</h1>

    <label class="label">Name</label>
    <div class="control">
      <input class="input" type="text" placeholder="Enter first and last name">
    </div>

    <label class="label">Username</label>
    <div class="control">
      <input class="input" type="text" placeholder="Create username here">
    </div>

    <label class="label">Password</label>
    <div class="control">
      <input class="input" type="text" placeholder="Enter password here">
    </div>

    <label class="label">Email</label>
    <div class="control">
        <input class="input" placeholder="Enter email address here" type="text">
    </div>
  
    <div class="control">
      <label class="checkbox">
        <input type="checkbox">
        I agree to the terms and conditions
      </label>
    </div>
  
    <div class="section is-small">
      <button class="button is-link">Submit</button>
      <button id="back_button" class="button is-link is-light">Cancel</button>
    </div>
    </div>
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