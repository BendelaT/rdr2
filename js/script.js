let donation = document.getElementById("donation")
let close = document.getElementById("close")
let secondSection = document.getElementById("second_section")
let footer = document.getElementById("footer")
let header = document.getElementById("header")
let firstSection = document.getElementById("firstSection")

donate.onclick = function() {
    show()
}
close.onclick = function() {
    hide()
}

function show() {
    donation.style.display = "block";
    secondSection.style.display = "none"
    footer.style.display = "none"
    header.style.display = "none"
    firstSection.style.display = "none"

    

}
function hide() {
    donation.style.display = "none";
    secondSection.style.display = "block"
    footer.style.display = "flex"
    header.style.display = "flex"
    firstSection.style.display = "block"

  }
