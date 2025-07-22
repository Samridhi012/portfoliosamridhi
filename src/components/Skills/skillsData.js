export const frontendInfo ={
    "languages" : [
        {
            "name" : "HTML",
            "icon" : "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
            "color" : "orange"
        },
        {
            "name" : "CSS",
            "icon" : "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
            "color" : "orange"
        },
        {
            "name" : "Bootstrap",
            "icon" : "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
            "color" : "orange"
        },
        {
            "name" : "JavaScript",
            "icon" : "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
            "color" : "orange"
        },
        {
            "name" : "React.js",
            "icon" : "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
            "color" : "orange"
        }
    ]
};

export const backendInfo = {
    "languages" : [
        {
            "name" : "Node.js", 
            "icon" : "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
            "color" : "orange"
        },
        {
            "name" : "Express.js",
            "icon" : "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
            "color" : "orange"
        }
    ]
};

export const databaseInfo = {
    "languages" : [
        {
            "name" : "MySQL", 
            "icon" : "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000",
            "color" : "orange"
        },
        {
            "name" : "PostgreSQL", 
            "icon" : "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
            "color" : "orange"
        }
    ]
};

export const othersInfo = {
    "languages" : [
        {
            "name" : "Python",
            "icon" : "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
            "color" : "orange"
        },
        {
            "name" : "Java",
            "icon" : "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
            "color" : "orange"
        },
        {
            "name" : "Git",
            "icon" : "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
            "color" : "orange"
        },
        {
            "name" : "Postman",
            "icon" : "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
            "color" : "orange"
        },
        {
            "name" : "Canva",
            "icon" : "https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000",
            "color" : "orange"
        }
    ]
};

// const cards = document.querySelectorAll(".block");
// // const dots = document.querySelectorAll(".dot");
// // // const memberName = document.querySelector(".member-name");
// // // // const memberRole = document.querySelector(".member-role");
// // const leftArrow = document.querySelector(".nav-arrow.left");
// // const rightArrow = document.querySelector(".nav-arrow.right");
// let currentIndex = 0;
// let isAnimating = false;

// function updateCarousel(newIndex) {
// 	if (isAnimating) return;
// 	isAnimating = true;

// 	currentIndex = (newIndex + cards.length) % cards.length;

// 	// cards.forEach((card, i) => {
// 	// 	const offset = (i - currentIndex + cards.length) % cards.length;

// 	// 	card.classList.remove(
// 	// 		"center",
// 	// 		"left-1",
// 	// 		"left-2",
// 	// 		"right-1",
// 	// 		"right-2",
// 	// 		"hidden"
// 	// 	);

// 	// 	if (offset === 0) {
// 	// 		card.classList.add("center");
// 	// 	} else if (offset === 1) {
// 	// 		card.classList.add("right-1");
// 	// 	} else if (offset === 2) {
// 	// 		card.classList.add("right-2");
// 	// 	} else if (offset === cards.length - 1) {
// 	// 		card.classList.add("left-1");
// 	// 	} else if (offset === cards.length - 2) {
// 	// 		card.classList.add("left-2");
// 	// 	} else {
// 	// 		card.classList.add("hidden");
// 	// 	}
// 	// });

// 	// dots.forEach((dot, i) => {
// 	// 	dot.classList.toggle("active", i === currentIndex);
// 	// });

// 	// memberName.style.opacity = "0";
// 	// memberRole.style.opacity = "0";

// 	// setTimeout(() => {
// 	// 	memberName.textContent = teamMembers[currentIndex].name;
// 	// 	memberRole.textContent = teamMembers[currentIndex].role;
// 	// 	memberName.style.opacity = "1";
// 	// 	memberRole.style.opacity = "1";
// 	// }, 300);

// 	setTimeout(() => {
// 		isAnimating = false;
// 	}, 800);
// }

// // leftArrow.addEventListener("click", () => {
// // 	updateCarousel(currentIndex - 1);
// // });

// // rightArrow.addEventListener("click", () => {
// // 	updateCarousel(currentIndex + 1);
// // });

// // dots.forEach((dot, i) => {
// // 	dot.addEventListener("click", () => {
// // 		updateCarousel(i);
// // 	});
// // });

// cards.forEach((card, i) => {
// 	card.addEventListener("click", () => {
// 		updateCarousel(i);
// 	});
// });

// document.addEventListener("keydown", (e) => {
// 	if (e.key === "ArrowLeft") {
// 		updateCarousel(currentIndex - 1);
// 	} else if (e.key === "ArrowRight") {
// 		updateCarousel(currentIndex + 1);
// 	}
// });

// // let touchStartX = 0;
// // let touchEndX = 0;

// // document.addEventListener("touchstart", (e) => {
// // 	touchStartX = e.changedTouches[0].screenX;
// // });

// // document.addEventListener("touchend", (e) => {
// // 	touchEndX = e.changedTouches[0].screenX;
// // 	handleSwipe();
// // });

// // function handleSwipe() {
// // 	const swipeThreshold = 50;
// // 	const diff = touchStartX - touchEndX;

// // 	if (Math.abs(diff) > swipeThreshold) {
// // 		if (diff > 0) {
// // 			updateCarousel(currentIndex + 1);
// // 		} else {
// // 			updateCarousel(currentIndex - 1);
// // 		}
// // 	}
// // }

// updateCarousel(0);
