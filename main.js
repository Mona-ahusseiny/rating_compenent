const rate = document.querySelector(".rate")
const thank_you = document.querySelector(".thank-you")
const submitbutton = document.querySelector(".submit")
const star_number = document.getElementById("star-number")
const your_rate = document.querySelectorAll(".btn")

submitbutton.addEventListener("click", () => {
    thank_you.style.display = "flex"
    rate.style.display = "none"
})

your_rate.forEach((rate) => {
    rate.addEventListener("click", () => {
        star_number.innerHTML = rate.innerHTML
    })
})