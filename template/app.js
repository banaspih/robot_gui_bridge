const ws = document.querySelector('form')
const con = document.querySelector('connect')
const messageOne = document.querySelector('#message-1')


const bridge = ws.addEventListener('submit', (e) => {
    e.preventDefault()

    //const location = search.value

 bridge.then(() => {
     if (error){
         messageOne.textContent =  'error'
     }else{
         messageOne.textContent = 'connect'
     }
 }) 
})