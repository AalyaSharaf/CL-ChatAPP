//connect to socket
let socket = io(); 

//listens and displays a text (to make sure it si working)
socket.on('connect', () =>{
  console.log('connected to the server via sockets')
})

//accessing the h3 tag and displaying the message on it
socket.on("message", (data) => {
    document.querySelector('h3').innerHTML = data
})

//taking the info from the input box and displaying it on the screen
function sendMessage(){
    let inputMessage = document.getElementById("message");
    let messageContent = inputMessage.value
    socket.emit('message', messageContent)
}
