let icon = document.querySelector(".icon");

function expand() {
	let navbar = document.querySelector("#navbar");
	
	if (navbar.className === "normalNav") {
		navbar.className += " responsive";
		for (const child of navbar.children) {
			if (child.className !== "icon") {
				child.className += " dropdown";
				child.setAttribute("onclick", "expand()");
			}
		}
	} else {
		navbar.className = "normalNav";
		for (const child of navbar.children) {
			if (child.className !== "icon") {
				child.className = "";
				child.setAttribute("onclick", "");
			}
		}
		icon.setAttribute("onclick", "expand()");
	}

}