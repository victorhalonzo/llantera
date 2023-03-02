window.addEventListener("scroll", function () {
  document.querySelector(".nav").classList.toggle("active", window.scrollY > 0);
});
//debugger;
/*
var enlaces = document.getElementsByClassName("opciones_bar");
console.log(enlaces);
for (var i = 0; i < enlaces.length; i++) {
    //debugger;
    console.log(1);
  enlaces[i].addEventListener("click", function () {
    //debugger;
    //document.querySelector(".menu").style.left = "-100%";
    console.log('click');
    document.getElementById("check").checked=false;
  });
}
*/