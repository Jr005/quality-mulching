


// ============= MENU HOVER UNDERLINE EFFECT - START =================

//  Menu Underline Function - START

(function() {

  const target = document.querySelector(".target");
  const links = document.querySelectorAll(".mynav a");
  const colors = ["#f7c51e"];
  // const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];

  function mouseenterFunc() {
    if (!this.parentNode.classList.contains("active")) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("active")) {
          links[i].parentNode.classList.remove("active");
        }
        // links[i].style.opacity = "0.25";
      }

      this.parentNode.classList.add("active");
      this.style.opacity = "1";

      const width = this.getBoundingClientRect().width;
      const height = this.getBoundingClientRect().height;
      const left = this.getBoundingClientRect().left + window.pageXOffset;
      const top = this.getBoundingClientRect().top + window.pageYOffset;
      const color = colors[Math.floor(Math.random() * colors.length)];

      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
      target.style.borderColor = color;
      target.style.transform = "none";
    }
  }

  for (let i = 0; i < links.length; i++) {
    // links[i].addEventListener("click", (e) => e.preventDefault());
    links[i].addEventListener("mouseenter", mouseenterFunc);
  }

  function resizeFunc() {
    const active = document.querySelector(" .mynav li.active");

    if (active) {
      const left = active.getBoundingClientRect().left + window.pageXOffset;
      const top = active.getBoundingClientRect().top + window.pageYOffset;

      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
    }
  }

  window.addEventListener("resize", resizeFunc);


// Event Listener To Remove Line From Floating in Air When Leaving Dropdown Box - START

document.querySelector(".mynav").addEventListener("mouseleave", function() {
  target.removeAttribute("style");
})
  
// Event Listener To Remove Line From Floating in Air When Leaving Dropdown Box - END

})();

// ============= MENU HOVER UNDERLINE EFFECT - END =================


// ============= Add "Responsive" Class  When Click On "Menu Click Here" Hamburger - Menu Dropdown =================


function myFunction() {
  var x = document.getElementById("mybottomnav");
  if(x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}


// // This code has an error - It removes the sticky in mobile view
// function myFunction() {
//     var x = document.getElementById("mybottomnav");
//     if (x.className === "bottomnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "bottomnav";
//     }
//   }




// ============= WHITE NAVBAR STICKY =================


// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunction()};

// Get the navbar
var navbar = document.getElementById("mybottomnav");

// Get the offset position of the navbar
var sticky = mybottomnav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    mybottomnav.classList.add("sticky")
  } else {
    mybottomnav.classList.remove("sticky");
  }
}


// Fixed White Navbar Sticky Dropdown To Work on Mobile.


// function fixed_top_menu() {
//   var windows = $(window);
//   windows.on("scroll", function () {
//       var header_height = $(".bottomnav").height();
//       var scrollTop = windows.scrollTop();
//       if (scrollTop > header_height) {
//           $(".bottomnav").addClass("sticky");
//       } else {
//           $(".bottomnav").removeClass("sticky");
//       }
//   });
// }
// fixed_top_menu();




// ================================== ANIMATED COUNTER =======================





// 472 px  -  Starts Yellow Counter Section

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
