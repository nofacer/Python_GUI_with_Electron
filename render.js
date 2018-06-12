// renderer.js

var zerorpc = require("zerorpc");
var client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");

let name = document.querySelector('#name')
let result = document.querySelector('#result')
name.addEventListener('input', () => {
  client.invoke("hello", name.value, (error, res) => {
    if(error) {
      console.error(error)
    } else {
      result.textContent = res
    }
  })
})
name.dispatchEvent(new Event('input'))

