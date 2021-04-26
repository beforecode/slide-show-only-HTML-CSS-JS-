const nextBtn = document.querySelector(".next_button");
const pervBtn = document.querySelector(".perv_button");
const slider = document.querySelector(".slider");
const card = document.querySelectorAll(".card");
const content = document.querySelectorAll(".card_thumb");
const width = card[0].clientWidth;
let counter = 0;

// initial style
slider.style.transform = "translateX(" +( -width * counter ) + "px)";
pervBtn.style.display = "none";


// next button
nextBtn.addEventListener("click", function(){
	if (counter == 2) {return} 
	slider.style.transition = "transform .5s ease-in";
	counter++;
	slider.style.transform = "translateX(" +( -width * counter ) + "px)";
	})

// perv button
pervBtn.addEventListener("click", function(){
	if (counter == 0) {return}
	slider.style.transition = "transform .5s ease-in";
	counter--;
	slider.style.transform = "translateX(" + ( -width * counter ) + "px)";
	})

// transition end 
slider.addEventListener("transitionend", function(){
	if (card[counter].id == "c3") {
		nextBtn.style.display = "none";
		} else {
			nextBtn.style.display = "block";
			}
	if (card[counter].id == "c1") {
	pervBtn.style.display = "none";
		}else {
			pervBtn.style.display = "block";
			}
})
// intersection observer
const observer = new IntersectionObserver(function(observables){
	observables.forEach(function(observable){
		if (observable.intersectionRatio > 0.5) {
			observable.target.children[0].style.opacity = "1"
			observable.target.children[0].style.margin = "0px auto";
			} else {
			observable.target.children[0].style.opacity = "0.2";
			observable.target.children[0].style.margin = "200px auto";
			} 
	})
},
{
	root : document.querySelector(".cards"),
	threshold : [0.5]
});

const items = document.querySelectorAll(".card");
items.forEach(function(item){
	observer.observe(item);
	item.children[0].style.opacity = "0.2";
	item.children[0].style.margin = "200px auto";
})
