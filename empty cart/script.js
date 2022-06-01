var jd1 = document.getElementsByClassName('di')[0]
var jd2 = document.getElementsByClassName('sa')[0]
var jd3 = document.getElementsByClassName('di2')
console.log(jd3[1].innerHTML)

var jd4 = document.getElementsByClassName('sa')[2]

var jd5 = document.getElementsByClassName('di2')

d1.children[0].addEventListener('click', function () {
    console.log(12345)
        jd1.children[0].style.display = 'none'
        jd1.children[1].style.display =""
    
        jd3[0].addEventListener('click', function () {
            console.log(12345)
                jd2.children[1].style.display = 'none'
                jd2.children[2].style.display =""
                jd4.children[1].style.display = 'none'
                jd4.children[2].style.display =""
                jd5[0].style.display = 'none'
                jd5[1].style.display =""
    
               
             
            }, false)

            jd3[1].addEventListener('click', function () {
                console.log(4444444)
                    jd2.children[2].style.display = 'none'
                    jd2.children[1].style.display =""
                    jd4.children[2].style.display = 'none'
                    jd4.children[1].style.display =""
                    jd5[1].style.display = 'none'
                    jd5[0].style.display =""
                }, false)
    }, false)

var jd00 = document.getElementsByClassName('an')[1]
console.log(jd00.innerHTML)
jd00.addEventListener('click', function () {
    console.log(123456)
    window.location.href="../5/index.html"
    }, false)