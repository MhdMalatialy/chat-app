const socket = io()

socket.on('message', (message) => {
    console.log (message)
     })
document.querySelector('#sendMessage').addEventListener('submit', (e) => {
         e.preventDefault()
    const theMessage = e.target.elements.message.value // get the input which have name =message
     socket.emit('send',theMessage)}) 
     socket.on('brodcast', (send) => {
         console.log(send)

})
document.querySelector('#send-location').addEventListener('click',() => {
    if (!navigator.geolocation){
        return alert('Sorry!, your Browser dose\'t support Geolocation ')
    }
    navigator.geolocation.getCurrentPosition((position) => {
   let location = {
       lat : position.coords.latitude,
       long : position.coords.longitude
   }
   socket.emit('send-location',location)
 
    })
})
