//const Vue = require("vue") 


const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 3000
const express = require('express')

//const exphbs = require('express-handlebars')
const app = express()
const socketio = require('socket.io')

const http = require('http')

const server = http.createServer(app)
const io = socketio(server)
//const vueApp = require('./robot-connect/connect')

const publicDirectoryPath = path.join(__dirname, '../gui/template')
app.use(express.static(publicDirectoryPath))

const index = path.join(__dirname, '../gui/robot-connect/index')
const header = path.join(__dirname, '../gui/robot-connect/header')
//app.engine('handlebars', exphbs())
//app.set('view engine', 'handlebars')
app.set('view engine', 'hbs')
app.set('views', index)
hbs.registerPartials(header)

app.get('', (req, res) => {
  res.render('index', {
      title: 'rosbridge',
      name: 'test'
  })
})


module.exports = {
  runtimeCompiler: true
}





io.on('connection', ()=> {
  console.log('New Websocket connection')
})


server.listen(port, () => {
  console.log('Serving is up on' +port )
})



// let vueApp = new Vue({
//     el: "#vueApp",
//     data: {
//         // ros connection
//         ros: null,
//         rosbridge_address: 'ws://0.0.0.0:9090',
//         connected: false,
//         // page content
//         menu_title: 'Connection',
//         main_title: 'Main title, from Vue!!',
//     },
//     methods: {
//         connect: function() {
//             // define ROSBridge connection object
//             this.ros = new ROSLIB.Ros({
//                 url: this.rosbridge_address
//             })

//             // define callbacks
//             this.ros.on('connection', () => {
//                 this.connected = true
//                 console.log('Connection to ROSBridge established!')
//             })
//             this.ros.on('error', (error) => {
//                 console.log('Something went wrong when trying to connect')
//                 console.log(error)
//             })
//             this.ros.on('close', () => {
//                 this.connected = false
//                 console.log('Connection to ROSBridge was closed!')
//             })
//         },
//         disconnect: function() {
//             this.ros.close()
//         },
//         sendCommand: function() {
//             let topic = new ROSLIB.Topic({
//                 ros: this.ros,
//                 name: '/cmd_vel',
//                 messageType: 'geometry_msgs/Twist'
//             })
//             let message = new ROSLIB.Message({
//                 linear: { x: 1, y: 0, z: 0, },
//                 angular: { x: 0, y: 0, z: 0.5, },
//             })
//             topic.publish(message)
//         },
//         turnRight: function() {
//             let topic = new ROSLIB.Topic({
//                 ros: this.ros,
//                 name: '/cmd_vel',
//                 messageType: 'geometry_msgs/Twist'
//             })
//             let message = new ROSLIB.Message({
//                 linear: { x: 1, y: 0, z: 0, },
//                 angular: { x: 0, y: 0, z: -0.5, },
//             })
//             topic.publish(message)
//         },
//         stop: function() {
//             let topic = new ROSLIB.Topic({
//                 ros: this.ros,
//                 name: '/cmd_vel',
//                 messageType: 'geometry_msgs/Twist'
//             })
//             let message = new ROSLIB.Message({
//                 linear: { x: 0, y: 0, z: 0, },
//                 angular: { x: 0, y: 0, z: 0, },
//             })
//             topic.publish(message)
//         },
//     },
//     mounted() {
//         // page is ready
//         console.log('page is ready!')
//     },
// })

