const ul = document.querySelector(".shopping-list")

const list = ["paper towels", "shampoo", "tooth paste", "apples", "cereal", "orange juice"]

let html = ""

list.forEach((item, index) => {
    html += `<li>${index + 1}. ${item}</li>`
})

ul.innerHTML = html

