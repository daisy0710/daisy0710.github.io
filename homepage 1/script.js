var jd1 = document.getElementsByClassName('sousuo')[0]
console.log(jd1.children[0])
jd1.children[1].addEventListener('click', function () {

    jd1.children[1].style.display = 'none'
    jd1.children[2].style.display = 'flex'
    
    jd1.children[2].addEventListener('click', function () {
        window.location.href="../product listing 2/index.html";

    }, false)
}, false)
var jd10 = document.getElementsByClassName('zhongg')[0]
var jd2 = document.getElementsByClassName('caidan')[0]
var jd3 = document.getElementsByClassName('box')[0]
var jd4 = document.getElementsByClassName('ce')[0]
// console.log(jd2.innerHTML)
jd2.addEventListener('click', function () {
    console.log(123456)
    // jd3.style.display = 'none'
    jd10.style.display = ''
    jd4.style.display = ''
    document.documentElement.style.overflow = 'hidden';
  
}, false)

var jd5 = document.getElementsByClassName('swww')[0]
jd4.addEventListener('click', function () {
    console.log(123456)
    // jd3.style.display = 'none'
    jd10.style.display = 'none'
    jd4.style.display = 'none'
    document.documentElement.style.overflow = 'scroll';
}, false)

