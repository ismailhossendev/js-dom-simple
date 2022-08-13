//html elements added using js

const body = document.getElementById('body')
const h1 = document.createElement('h1')
h1.innerText ='This is added And Style By JavaScript'
body.appendChild(h1)

const ul = document.createElement('ul')
body.appendChild(ul)


const li1 = document.createElement('li')
li1.innerText = 'This is frist li (list item)'
ul.appendChild(li1)
const li2 = document.createElement('li')
li2.innerText = 'This is Secend li (list item)'
ul.appendChild(li2)
const li3 = document.createElement('li')
li3.innerText = 'This is third li (list item)'
ul.appendChild(li3)

//style using js
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.height = '100vh'


