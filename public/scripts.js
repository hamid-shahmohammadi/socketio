const socket=io('http://192.168.153.142:9000');
const socket2=io('http://192.168.153.142:9000/admin');
socket.on('messageFromServer',(dataFromServer)=>{
    console.log(dataFromServer);
    socket.emit('dataToServer',{data:"Data from the Client!"})
})

document.querySelector('#message-form').addEventListener('submit',(event)=>{
    event.preventDefault();
    const newMessage=document.querySelector('#user-message').value;
    socket.emit('newMessageToServer',{text:newMessage})
})
socket.on('messageToClients',(msg)=>{
    console.log(msg)
    document.querySelector('#messages').innerHTML+=`<li>${msg.text}</li>`;
})