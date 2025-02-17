document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert("Thank you for reaching out, " + name + "!");
    } else {
      alert("Please fill in all fields.");
    }
  });
  let currentIndex = 0;

function moveSlide(step) {
  let slides = document.querySelectorAll('.carousel-images img');
  currentIndex += step;
  
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  let newTransform = -currentIndex * 100 + "%";
  document.querySelector('.carousel-images').style.transform = `translateX(${newTransform})`;
}
document.addEventListener("DOMContentLoaded", () => {
    // Example dynamic user data (You can load this from a database later)
    const users = [
      {
        name: "Jane",
        id: "100",
        role: "Manager",
        coinRate: "100 Coins",
        whatsapp: "https://wa.me/86136129026",
        profilePic: "assets/jane.jpg"
      },
      {
        name: "Yolo-a",
        id: "yolo-a",
        role: "Super Admin",
        coinRate: "1000 Coins",
        whatsapp: "https://wa.me/923291484159",
        profilePic: "assets/yolo-a.jpg"
      },
      {
        name: "CS Admin",
        id: "5400",
        role: "CS Admin",
        coinRate: "500 Coins",
        whatsapp: "https://wa.me/923425567145",
        profilePic: "assets/cs-admin.jpg"
      }
    ];
  
    // Dynamically insert user data
    users.forEach((user, index) => {
      const userProfile = document.querySelectorAll('.user-profile')[index];
      userProfile.querySelector('img').src = user.profilePic;
      userProfile.querySelector('h2').textContent = `${user.name} (${user.role})`;
      userProfile.querySelector('p:nth-child(3)').textContent = `ID: ${user.id}`;
      userProfile.querySelector('p:nth-child(4)').textContent = `Role: ${user.role}`;
      userProfile.querySelector('p:nth-child(5)').textContent = `Coin Rate: ${user.coinRate}`;
      userProfile.querySelector('p:nth-child(6) a').href = user.whatsapp;
    });
  });
  // Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
