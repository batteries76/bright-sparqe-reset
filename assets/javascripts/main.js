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

const creditCardInput = document.querySelector("#credit-card")

creditCardInput.addEventListener('keyup', (e) => {
    if (creditCardInput.value.length == 4) {
        console.log(creditCardInput.value)
        creditCardInput.value = creditCardInput.value + " "
    }
    if (creditCardInput.value.length == 9) {
        console.log(creditCardInput.value)
        creditCardInput.value = creditCardInput.value + " "
    }
    if (creditCardInput.value.length == 14) {
        console.log(creditCardInput.value)
        creditCardInput.value = creditCardInput.value + " "
    }
})

const creditCardExp = document.querySelector("#cc-exp")

creditCardExp.addEventListener('keyup', (e) => {
    if (creditCardExp.value.length == 2) {
        console.log(creditCardExp.value)
        creditCardExp.value = creditCardExp.value + " - "
    }
})

const privacyButton = document.querySelector(".privacy-policy-expand-button")
const privacyDetails = document.querySelector(".privacy-policy-details")

const termsButton = document.querySelector(".terms-and-conditions-expand-button")
const termsDetails = document.querySelector(".terms-and-conditions-details")

termsButton.addEventListener('click', () => {
    console.log("termsButton was hit")
    termsDetails.classList.toggle("terms-appear")
    termsButton.classList.toggle("terms-privacy-button-clicked")
    if (termsDetails.classList.contains("terms-appear")) {
        termsButton.innerText = "Compress.."
    } else {
        termsButton.innerText = "Expand.."
    }
})

privacyButton.addEventListener('click', () => {
    console.log("privacyButton was hit")
    privacyDetails.classList.toggle("privacy-appear")
    privacyButton.classList.toggle("terms-privacy-button-clicked")
    if (privacyDetails.classList.contains("privacy-appear")) {
        privacyButton.innerText = "Compress.."
    } else {
        privacyButton.innerText = "Expand.."
    }
})

const privacyCollapseButton = document.querySelector(".privacy-policy-compress-button")

privacyCollapseButton.addEventListener('click', () => {
    console.log("privacyCollapseButton was hit")
    privacyDetails.classList.toggle("privacy-appear")
    if (privacyDetails.classList.contains("privacy-appear")) {
        privacyButton.innerText = "Compress.."
    } else {
        privacyButton.innerText = "Expand.."
    }
})

const termsCollapseButton = document.querySelector(".terms-and-conditions-compress-button")

termsCollapseButton.addEventListener('click', () => {
    console.log("termsCollapseButton was hit")
    termsDetails.classList.toggle("terms-appear")
    termsButton.classList.toggle("terms-privacy-button-clicked")
    termsButton.innerText = "Expand.."
})

scrollDiv = document.querySelector(".scroll-to-top");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 300) {
    scrollDiv.classList.add('scroll-show')
  } else {
    scrollDiv.classList.remove('scroll-show')
  }
};

window.addEventListener("scroll", myScrollFunc);

$('.scroll-to-top').click(function(e){
    const $target = $("html, body");
    console.log($target)
    $target.animate({scrollTop: 0}, 1500);
});