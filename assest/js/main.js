

let _timer = document.getElementsByClassName('timer')[0]
var today = new Date();
var _time = today.getHours() + ":" + today.getMinutes();
_timer.innerText = _time




let _icon = document.getElementsByClassName('icoon')[0]
let _rightt = document.getElementsByClassName('rightt')[0]


_icon.addEventListener('click', function () {
    // console.log(_icon);
    let _input = document.getElementsByTagName('input')[0].value
    document.getElementsByTagName('input')[0].value = null
    // console.log(_input);
    let _div = document.createElement('div')
    _rightt.appendChild(_div)
    _div.classList.add('newdiv')


    for (let i = 0; i < 3; i++) {
        let _star = document.createElement('i')
        _rightt.appendChild(_star)
        _star.innerHTML = '<i class="bi bi-star-fill"></i>'
        _star.classList.add('star')
        console.log(_star);
        _star.addEventListener('click', function () {
            _star.classList.toggle("starback")
            if (i == 0) {
                // console.log('val0');
                _low.appendChild(_h5)

            }
            if (i == 1) {
                // console.log('val1');
                _med.appendChild(_h5)
            }
            if (i == 2) {
                // console.log('val2');
                _high.appendChild(_h5)
            }
        })
    }



    let _high = document.getElementById('high')
    let _med = document.getElementById('med')
    let _low = document.getElementById('low')

    let _divv = document.getElementsByClassName('newdiv')[0]
    console.log(_divv);

    let _starr = document.getElementsByClassName('star')[0]
    let _starr1 = document.getElementsByClassName('star')[1]
    let _starr2 = document.getElementsByClassName('star')[2]


    console.log(_starr);
   console.log(_starr1);
   console.log(_starr2);






    let _h5 = document.createElement('h5')
    _div.appendChild(_h5)
    _h5.innerHTML = _input





    let _div1 = document.createElement('div')
    _div.appendChild(_div1)
    _div1.innerHTML = '<i class="bi bi-check-circle"></i>'

    let _div2 = document.createElement('div')
    _div.appendChild(_div2)
    _div2.innerHTML = '<i class="bi bi-pencil"></i>'

    let _div3 = document.createElement('div')
    _div.appendChild(_div3)
    _div3.innerHTML = '<i class="bi bi-trash"></i>'


    let _alldiv = document.querySelectorAll('.newdiv')
    // console.log(_alldiv);

    _alldiv.forEach(function (val, i) {
        // console.log(val);
        let _child = val.children
        // console.log(_child);

        _child[1].addEventListener('click', function () {
            _child[0].classList.toggle('dec')
        })

        _child[3].addEventListener('click', function () {
            val.remove()
           
            _divv.remove()
         _starr.remove()
         _starr1.remove()
         _starr2.remove()


           
            console.log(_allstar);
        })

        _child[2].addEventListener('click', function (e) {
            _child[2].style.color = 'red'
            let _inputedit = document.createElement('input')
            _div.appendChild(_inputedit)
            // console.log(_inputedit);
            let temp = _inputedit.value

            //   console.log(_h5);
            _inputedit.addEventListener('input', function () {
                _h5.innerText = _inputedit.value;
            })

            _inputedit.addEventListener('keyup', function (e) {
                if (e.key == 'Enter') {
                    _inputedit.remove()
                    _child[2].style.color = 'green'
                }



            })






        })

    })








})



