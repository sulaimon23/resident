
let modal = document.getElementById('modal')
let add = document.getElementById('add').addEventListener('click', e = () => {
 modal.style.display = "flex"
})

let close = document.getElementById('close').addEventListener('click', e=()=>{
 modal.style.display = "none"
})

let cancel = document.getElementById('cancel').addEventListener('click', e=()=>{
 modal.style.display = "none"
})