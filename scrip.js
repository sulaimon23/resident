
// let modal = document.getElementById('modal')
let inside = document.querySelector('.inside');


let view = document.querySelectorAll('.view')

view.forEach(e => {
 e.addEventListener('click', e = () => {
  inside.style.display = "block";
 })
});

del = () => {
 modal.style.display = "flex"
}


// let add = document.getElementById('add').addEventListener('click', e = () => {
//  modal.style.display = "flex"
// })

// let close = document.getElementById('close').addEventListener('click', e=()=>{
//  modal.style.display = "none"
// })

// let cancel = document.getElementById('cancel').addEventListener('click', e=()=>{
//  modal.style.display = "none"
// })

// let edit = document.getElementById('edit').addEventListener('click', e = () => {
//  inside.style.display = "block";
// })

// mod = () => {
//  modal.style.display = "flex"
// }