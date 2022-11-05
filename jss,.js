let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let umnoje = document.querySelector('#umno')
let dele = document.querySelector('#dele')
let ravno = document.querySelector('#ravno')
let next = document.querySelector('#next')
let foto = document.querySelector('#pich4er')
let pich4 = ['red','blue','yellow','black','purple','green','pink','orange','aqua']
plus.addEventListener('click',function(){
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector('#num2')
    num1 = num1.value
    num2 = num2.value
    let num3 = Number(num1) + Number(num2)
    ravno.innerHTML = num3
})
minus.addEventListener('click',function(){
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector('#num2')
    num1 = num1.value
    num2 = num2.value
    let num3 = Number(num1) - Number(num2)
    ravno.innerHTML = num3
})
umnoje.addEventListener('click',function(){
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector('#num2')
    num1 = num1.value
    num2 = num2.value
    let num3 = Number(num1) * Number(num2)
    ravno.innerHTML = num3
})
dele.addEventListener('click',function(){
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector('#num2')
    num1 = num1.value
    num2 = num2.value
    let num3 = Number(num1) / Number(num2)
    ravno.innerHTML = num3
})
let index 
next.addEventListener('click',function(){
    index = Math.floor(Math.random() * 10)
    foto.style.backgroundColor = pich4[index]
})

