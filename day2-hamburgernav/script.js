const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", (e) => {
	if (hamburger.classList.contains("open")) {
		hamburger.classList.remove("open");
		hamburger.classList.add("close");
	} else {
		hamburger.classList.add("open");
		hamburger.classList.remove("close");
	}
});
