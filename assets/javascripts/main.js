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