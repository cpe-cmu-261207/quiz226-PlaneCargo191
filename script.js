const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

const search = document.querySelector("#search")
const text = document.querySelector("#text")
let tg = 0

btn_toggle.onclick = () => {
  if(tg === 0) {
    const cal = 620610790 - length.value
    author.innerText = cal
    btn_toggle.innerText = "Show Author"
    tg = 1
  } else {
    author.innerText = "620610790 Thanakorn"
    btn_toggle.innerText = "Show Calculation"
    tg = 0
  }
}

