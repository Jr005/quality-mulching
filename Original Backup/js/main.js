




// WHITE MENU MOVE TO MIDDLE

// const nav = document.querySelector(".header-menu_wrap");
// const topOfNav = nav.offsetTop;


// function fixNav() {
//     console.log('topOfNav = ' + topOfNav);
//     console.log('scrollY = ' + window.scrollY);
//     if (window.scrollY >= (topOfNav)) {
//         console.log(-(topOfNav) + 'px');
//         document.getElementsByClassName("fixed-nav")[0].style.position = "fixed";
//         document.body.style.marginTop = -(topOfNav) + 'px';
//         document.getElementById("main-menu").classList.add("menu-center");

//     } else {
//         document.getElementsByClassName("fixed-nav")[0].style.position = "relative";
//         document.body.style.marginTop = 0;
//         document.getElementById("main-menu").classList.remove("menu-center");

//     }

// }

// window.addEventListener('scroll', fixNav);



// MENU HOVER UNDERLINE EFFECT


// (function () {

//     const target = document.querySelector(".target");
//     const links = document.querySelectorAll("a").getElementsByClassName('.item');
//     // const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];
//     const yellow = ["#f7c51e"];


//     function mouseenterFunc() {
//         if (!this.parentNode.classList.contains("active")) {
//             for (let i = 0; i < links.length; i++) {
//                 if (links[i].parentNode.classList.contains("active")) {
//                     links[i].parentNode.classList.remove("active");
//                 }
//                 links[i].style.opacity = "0.25";
//             }

//             this.parentNode.classList.add("active");
//             this.style.opacity = "1";

//             const width = this.getBoundingClientRect().width;
//             const height = this.getBoundingClientRect().height;
//             const left = this.getBoundingClientRect().left + window.pageXOffset;
//             const top = this.getBoundingClientRect().top + window.pageYOffset;
//             // const color = colors[Math.floor(Math.random() * colors.length)];
//             const color = yellow;


//             target.style.width = `${width}px`;
//             target.style.height = `${height}px`;
//             target.style.left = `${left}px`;
//             target.style.top = `${top}px`;
//             target.style.borderColor = color;
//             target.style.transform = "none";
//         }
//     }

//     for (let i = 0; i < links.length; i++) {
//         links[i].addEventListener("click", (e) => e.preventDefault());
//         links[i].addEventListener("mouseenter", mouseenterFunc);
//     }

//     function resizeFunc() {
//         const active = document.querySelector(".menu li.active");

//         if (active) {
//             const left = active.getBoundingClientRect().left + window.pageXOffset;
//             const top = active.getBoundingClientRect().top + window.pageYOffset;

//             target.style.left = `${left}px`;
//             target.style.top = `${top}px`;
//         }
//     }

//     window.addEventListener("resize", resizeFunc);

// })();



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }