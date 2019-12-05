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
            <div class="section is-small">
              <button id="cancel_button" class="button is-danger is-light">Cancel</button>
              <button id="submit_button" class="button is-primary" type="submit" value="Submit">Login</button>
            </div>  
        </div>`
  };
  
  const handleCancelButton = function (event) {
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