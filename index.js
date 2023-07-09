let arr = [
  {
    name: 'LINA',
    suname: 'BDSM',
    age: 36,
    }
]
let test = document.querySelector('.test')
function addEl () {
  arr.forEach((i) => {
    test.innerHTML += (`
<div style="border: 1px solid red;">
        <div> ${i.name} </div>
        <div> ${i.suname} </div>
        <div> ${i.age} </div>
        </div>
    `)
  })
}
let name = document.querySelector('.name')
let suname = document.querySelector('.suname')
let age = document.querySelector('.age')
let btn = document.querySelector('.ok')
function del() {
  test.innerHTML = ''
}
function getCont(a, b, c, array) {
  let data = {
    name: a.value,
    suname: b.value,
    age: c.value
  }
  array.push(data)
}
function removeVal(a, b, c) {
  a.value = ''
  b.value = ''
  c.value = ''
}
btn.addEventListener('click', () => {
  getCont(name, suname, age, arr)
  removeVal(name, suname, age)
  del()
  addEl()
})

