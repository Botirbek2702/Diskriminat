const a =document.querySelector('.a')
const b =document.querySelector('.b')
const c =document.querySelector('.c')
const d =document.querySelector('.d')



let A = +prompt("A ni kiriting ","")
let B = +prompt("B ni kiriting ","")
let C = +prompt("C ni kiriting ","")

function sam() {
    a.textContent = A
    b.textContent = B
    c.textContent = C
}
sam()
let j = {
    A:A,
    B:B,
    C:C
}

let i = j.B*j.B-4*j.A*j.C;
i = Math.sqrt(i)
d.textContent = i
