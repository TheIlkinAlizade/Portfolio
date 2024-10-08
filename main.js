// CIRCULATIONS INTRO
document.querySelector('.circulations').addEventListener("click", function(){
    console.log("Clicked");
    let circulationDiv = document.querySelector('.circulations');
    circulationDiv.style.animation = "none";
    circulationDiv.style.display = "none";

    let headername = document.querySelector('.header-name-title');
    headername.style.animation = "titleAnim 2s 0.8s linear forwards";
    let headersubname = document.querySelector('.header-subname-title');
    headersubname.style.animation = "typing 1.2s 0.8s steps(10, end) forwards, blink-caret .75s 1s step-end infinite";
    let navbar = document.querySelector('.navbar');
    navbar.style.animation = "navbarfadein 1.2s 0.2s ease-in-out forwards";
});

// Navbar label and a

var links = document.querySelectorAll("[data-for]");

for(var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(event){
    var cbTarget = this.dataset.for;
    document.getElementById(cbTarget).checked = true;
  });
}

let isMouseHover = false
let home = document.getElementById("home");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");


home.addEventListener("mouseover", function (event) {
  isMouseHover = true
  document.getElementById('option-element 1').checked = isMouseHover;
}, false);
about.addEventListener("mouseover", function (event) {
  isMouseHover = true
  document.getElementById('option-element 2').checked = isMouseHover;
  
}, false);
projects.addEventListener("mouseover", function (event) {
  isMouseHover = true
  document.getElementById('option-element 3').checked = isMouseHover;
}, false);
contact.addEventListener("mouseover", function (event) {
  isMouseHover = true
  document.getElementById('option-element 4').checked = isMouseHover;
}, false);

// Cursor with blend
document.getElementById("home").onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX+window.scrollX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY+window.scrollY
    ) 
    + 'px'
  );
}
document.querySelector(".navbar").onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX+window.scrollX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY+window.scrollY
    ) 
    + 'px'
  );
}

let invertedcursor = document.getElementById("invertedcursor");
home.addEventListener("click", function(){
  if(invertedcursor.style.opacity != 0){
    invertedcursor.style.opacity = "0";
  }else{
    invertedcursor.style.opacity = "1";
  }
});
document.querySelector(".navbar").addEventListener("click", function(){
  if(invertedcursor.style.opacity != 0){
    invertedcursor.style.opacity = "0";
  }else{
    invertedcursor.style.opacity = "1";
  }
});

// Load more and Show less


$(document).ready(function(){
  let projectmaxlength = $(".projectitem").length;
  let maxlength = $(".game_item").length;
  console.log(projectmaxlength);
  console.log(maxlength);


  // Projects
  $(".projectitem").hide();
  $(".projectitem").slice(0, 6).css('display', 'flex');
  $("#project_show_less").hide();
  $("#project_load_more").show();

  $("#project_load_more").on("click", function(e){
    e.preventDefault();
    $(".projectitem:hidden").slice(0, 3).slideDown({
      start: function () {
        $(this).css({
          display: "flex"
        })
      }
    });
    if($(".projectitem:hidden").length == 0) {
      $("#project_load_more").hide();
      $("#project_show_less").show();
    }
  });

  $("#project_show_less").on("click", function(e){
    e.preventDefault();
    $(".projectitem").slice(6, projectmaxlength).slideUp();
    if($(".projectitem").length == projectmaxlength) {
      $("#project_show_less").hide();
      $("#project_load_more").show();
    }
  });


  // Games

  $(".game_item").slice(0, 3).css('display', 'flex');
  $("#showless").hide();
  $("#game_load_more").show();

  $("#game_load_more").on("click", function(e){
    e.preventDefault();
    $(".game_item:hidden").slice(0, 4).slideDown({
      start: function () {
        $(this).css({
          display: "flex"
        })
      }
    });
    if($(".game_item:hidden").length == 0) {
      $("#game_load_more").hide();
      $("#showless").show();
    }
  });

  $("#showless").on("click", function(e){
    e.preventDefault();
    $(".game_item").slice(3, maxlength).slideUp();
    if($(".game_item").length == maxlength) {
      $("#showless").hide();
      $("#game_load_more").show();
    }
  });

  if (projectmaxlength <= 6) {
    $("#project_load_more").hide();
  }

  if (maxlength <= 3) {
    $("#game_load_more").hide();
  }
  
}); 


// Initialize EmailJS
(function() {
  emailjs.init("4H95itqoamkBEL2a6"); // Replace with your EmailJS User ID
})();

document.getElementById("submit-button").addEventListener("click", function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs.send("service_ezx8x7i", "template_z44mb3k", {
      name: name,
      email: email,
      subject: subject,
      message: message
  })
  .then(function(response) {
      console.log("Email sent successfully!", response.status, response.text);
      document.getElementById("response-message").innerText = "Message sent successfully!";
      document.getElementById("contactform").reset(); // Reset the form
  }, function(error) {
      console.error("Failed to send email.", error);
      document.getElementById("response-message").innerText = "Failed to send message. Please try again.";
  });
});