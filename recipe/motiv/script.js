const renderPrivateHomePage = function() {
    $('#root').on("click", "#profile_button", handleProfileButton);
    $('#root').on("click", "#logout_button", handleLogoutButton);
    $('#root').on("click", "#recipes_button", handleRecipesButton);
    $('#root').on("click", "#store_button", handleStoreButton);
    $('#root').on("click", "#recipes_button", handleRecipesButton);
    $('#root').on("click", "#gen_button", handleGenButton);
    $('#root').on("click", "#music_button", handleMusicButton);
    return `<div>
          <section class="hero is-bold is-dark">
            <div class="hero-body">
              <div class="container">
              <img src="https://thumbs.gfycat.com/ExcellentFarBuffalo-small.gif" alt="motive" width="360" height"360" align="right">
                <h1 class="title">
                  Recipe Book
                </h1>
                <h2 class="subtitle">
                  COMP426
                </h2>
              </div>
              <div class="section buttons">
                <button id="profile_button" class="button is-link is-light">View Profile</button>
                <button id="logout_button" class="button is-danger is-light">Log Out</button>
              </div>
            </div>
          </section>
          <div class="tabs is-medium">
            <ul>
              <li id="recipes_button"><a>Recipes</a></li>
              <li id="store_button"><a>Find store</a></li>
              <li id="motiv_button" class="is-active"><a>Need motivation?</a></li>
              <li id="music_button"><a>Let's listen to some music!</a></li>
            </ul>
          </div>
          <div class="container is-fluid">
          <div class="notification">
            <h1 class="title is-4">Press the button to get motivation!</h1>
            <div id="place_pic"></div>
            <div id="place_motive"></div>
            <button id="gen_button" class="button is-primary">Generate</button>
          </div>
        </div>
        </div>`
  };


const handleProfileButton = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    location.href=`../../user_profile/index.html`;

};

const handleLogoutButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();  
  location.href=`../../index.html`;
 };

const handleRecipesButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();  
  location.href=`../../private_homepage/index.html`;
};

const handleStoreButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();  
  location.href=`../../mapquest_api/index.html`;
};

const handleMusicButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  location.href=`../music/index.html`;
}

const createPic = function () {
  let arr = [`<img class="place_pic" src="https://cdn.shopify.com/s/files/1/0393/0833/products/4599_2F1461180668_2Fimg_5934_720x.jpeg?v=1461180882" alt="Remmy">`,
  `<img class="place_pic" src="https://usercontent1.hubstatic.com/13161162_f520.jpg" alt="Food Wars">`,
  `<img class="place_pic" src="  https://media1.tenor.com/images/7bda6950bdfe5dc54e02771b44043540/tenor.gif?itemid=10773063
  " alt="Food Wars">`]
  
  //  "You got it chef!",
  //  "Keep it up in the kitchen!"];
  let num = Math.floor(arr.length*Math.random());
  let str = arr[num];
  return str;
};

const createMotiv = function () { 
  let arr = ["Keep cooking!", "Go Chef!", "Don't cry, it's just an onion!", "Just keep cooking!", "Cook on!", "You got it chef!", "Keep it up in the kitchen!", "Just add butter!"];
  let picarr = [`<img class="place_pic" src="https://cdn.shopify.com/s/files/1/0393/0833/products/4599_2F1461180668_2Fimg_5934_720x.jpeg?v=1461180882" alt="Remmy">`,
  `<img class="place_pic is-square" src="https://usercontent1.hubstatic.com/13161162_f520.jpg" alt="Food Wars">`,
  `<img class="place_pic is-square" src="https://media1.tenor.com/images/7bda6950bdfe5dc54e02771b44043540/tenor.gif?itemid=10773063" alt="Spirited Away">`,
  `<img class="place_pic is-square" src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/4/1425486699559/Mama-Cook-007.jpg?width=300&quality=85&auto=format&fit=max&s=342348b81538cca5230913ff67aac525" alt="Cooking Mama">`,
  `<img class="place_pic image" src="https://cdn.vox-cdn.com/thumbor/b708MoUXEgWxcKVNUpl5fibuuQc=/0x0:4096x2304/1200x800/filters:focal(1721x825:2375x1479)/cdn.vox-cdn.com/uploads/chorus_image/image/59497417/BAO_RGB_s110_19c.pub16.172.0.jpg" alt="Bao" width="480" height="480">`,
  `<img class="place_pic is-square" src="https://thumbs.gfycat.com/AcclaimedDependableAssassinbug-max-1mb.gif" alt="SpongeBob">`,
  `<img class="place_pic is-square" src="https://media.giphy.com/media/RJ1hYRDhaD3yHUXG4u/giphy.gif" alt="Wendys">`,
  `<img class="place_pic is-square" src="https://media2.giphy.com/media/l0Ex5cj3jF05FTVXq/giphy.gif" alt="Pretzel">`];
  let num = Math.floor(arr.length*Math.random());
  let str = arr[num];
  let picstr = picarr[num];
  return `<div id="place_motive" class="title is-4 has-text-primary">` + `<div class="section">` + str + `</div>` + picstr + '</div>'
};

const handleGenButton = function (event) {
  event.preventDefault();
  event.stopImmediatePropagation(); 
  // $('#place_pic').replaceWith(createPic());
  $('#place_motive').replaceWith(createMotiv());
  $('#gen_button').on("click", handleGenButton);
  // $('#place_pic').on("click", handleGenButton);

};


const loadDom = function() {
  const $root = $('#root');
  $root.append(renderPrivateHomePage());
};
  
$(function() {
  async function main() {
    loadDom();
  }
    main();
});