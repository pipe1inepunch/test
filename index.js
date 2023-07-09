$(document).ready(() => {
  let arr = [
    {
      name: 'LINA',
      suname: 'BDSM',
      age: 36,
      }
  ]
  let inputs = $(document).find('.inp')
  let test = $(document).find('.test')
  let btn = $(document).find('.ok')
  function addEl (placeMod, placeArr) {
    $(placeArr).each((i, item) => {
      $(placeMod).html(` ${$(placeMod).html()}
        <div>${item.name}</div>
        <div>${item.suname}</div>
        <div>${item.age}</div>
        `)
    })
  }
  function addNewEl (inputsArr) {
    let data = {
      name: '',
      suname: '',
      age: ''
      }
    $(inputsArr).each((i, item) => {
      switch (i) {
        case i = 0: data.name = item.value;
        break;
        case i = 1: data.suname = item.value;
        break;
        case i = 2: data.age = item.value;
        break;
      }
    })
    return data;
  }
  function cleanField (inputsArr) {
    $(inputsArr).each((i, item) => {
      item.value = ''
    })
  }
  function removeAll (placeMod) {
    $(placeMod).html('')
  }
  function switchField (field) {
    $(field).each((i, item) => {
      $($(field)[i]).on('keyup', (evt) => {
        if (evt.keyCode === 39 && i == field.length - 1) {
          focusBtn(field)
        } else if (evt.keyCode === 37 && i !== 0) {
          $(field)[i-1].focus()
        } else if (evt.keyCode === 39) {
          $(field)[i+1].focus()
        }
      })
    })
  }
  function focusBtn (lastField) {
    $(btn).focus()
    $(btn).on('keyup', (evt) => {
      if (evt.keyCode === 37) {
        $(lastField)[lastField.length-1].focus()
      }
    })

  }
  $(btn).on('click', () => {
    removeAll(test)
    arr.push(addNewEl(inputs))
    addEl(test, arr)
    cleanField(inputs)
  })
  switchField(inputs)
  // function addEl () {
  //   arr.forEach((i) => {
  //     test.innerHTML += (`
  // <div style="border: 1px solid red;">
  //         <div> ${i.name} </div>
  //         <div> ${i.suname} </div>
  //         <div> ${i.age} </div>
  //         </div>
  //     `)
  //   })
  // }
  // let name = document.querySelector('.name')
  // let suname = document.querySelector('.suname')
  // let age = document.querySelector('.age')
  // let btn = document.querySelector('.ok')
  // function del() {
  //   test.innerHTML = ''
  // }
  // function getCont(a, b, c, array) {
  //   let data = {
  //     name: a.value,
  //     suname: b.value,
  //     age: c.value
  //   }
  //   array.push(data)
  // }
  // function removeVal(a, b, c) {
  //   a.value = ''
  //   b.value = ''
  //   c.value = ''
  // }
  // /*btn.addEventListener('click', () => {
  //   getCont(name, suname, age, arr)
  //   removeVal(name, suname, age)
  //   del()
  //   addEl()
  // })*/
  // disableBtn()
  // name.addEventListener('input', () => {
  //   isValid(name, suname)
  // })
  // suname.addEventListener('input', () => {
  //   isValid(suname, age)
  // })
  // function isValid(field, nextField) {
  //   if (field.value.length > 0 && field.value.length < 10) {
  //     enableBtn()
  //   } else if (field.value.length === 10) {
  //     enableBtn()
  //     nextField.focus();
  //   } else if (field.value.length > 10) {
  //     field.value = field.value.slice(0, 10)
  //   } else {
  //     disableBtn()
  //   }
  // }
  // function disableBtn() {
  // btn.disabled = true
  // }
  // function enableBtn() {
  //   btn.disabled = false
  // }
})

