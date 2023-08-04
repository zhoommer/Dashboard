
var b_arrow = document.getElementById("arrow_back");
var f_arrow = document.getElementById("arrow_forward");
var h3 = document.querySelectorAll('h3');


const hideMenu = () => {
	document.querySelector("aside").style.width = "9em";
	b_arrow.style.display = "none";
	f_arrow.style.display = "block";

}

const displayMenu = () => {
	document.querySelector("aside").style.width = "20em";
	b_arrow.style.display = "block";
	f_arrow.style.display = "none";
}

b_arrow.addEventListener("click", hideMenu);
f_arrow.addEventListener("click", displayMenu);
