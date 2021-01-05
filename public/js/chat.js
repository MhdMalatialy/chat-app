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

