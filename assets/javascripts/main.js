console.log("main.js is running")

const circles = document.querySelectorAll(".donation-circle")

circles.forEach(circle => {
    circle.addEventListener("click", (e) => {
        circles2 = document.querySelectorAll(".donation-circle")
        // console.log(circle.id)
        circles2.forEach(circle => {
            circle.style.background = "#85c1e9"
        })
        if (circle.id == e.target.id) {
            circle.style.background = "#FF4081"
            donationAmount = document.querySelector("#donation-amount")
            if (circle.id == "tenner") {
                donationAmount.value = 10
            }
            else if (circle.id == "lobster") {
                donationAmount.value = 20
            }
            else if (circle.id == "pineapple") {
                donationAmount.value = 50
            }
            else {
                donationAmount.value = 0
                donationAmount.focus()
            }
        }   
    })
})

circles.forEach(circle => {
    circle.addEventListener("mouseover", () => {
        circle.style.background = "#FF4081"
    })
})

circles.forEach(circle => {
    circle.addEventListener("mouseout", () => {
        circle.style.background = "#85c1e9"
    })
})


  // Look for .hamburger
const hamburger = document.querySelector(".hamburger")
const dropDown = document.querySelector(".nav-link-drop-area")

hamburger.classList.toggle("is-active");

// On click
hamburger.addEventListener('click', function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    // dropDown.style.background = "red"
    dropDown.classList.toggle("no-display")
    dropDown.classList.toggle("display")

})

const navLinkDropArray = document.querySelectorAll(".nav-link-drop")

navLinkDropArray.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        hamburger.classList.toggle("is-active");
        dropDown.classList.toggle("no-display")
        dropDown.classList.toggle("display")
    })
})
