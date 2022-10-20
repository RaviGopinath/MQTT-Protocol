function submit(){

let speed = document.getElementById("speed-id").value;
let distance = document.getElementById("distance-id").value;
let latitude = document.getElementById("latitude-id").value;
let longitude = document.getElementById("longitude-id").value;
// let button = document.querySelector("button");



var payload = {
     "speed":speed,
     "distance":distance,
     "latitude":latitude,
     "longitude":longitude
}


var topic = '/MIPPCMEXKG/device/4545/msgs/lenovo/7/7777'

var clientId = "DEV_4545";

var message = new Paho.MQTT.Message(JSON.stringify(payload));
message.destinationName = topic;
message.qos = 2;
console.log(message);

client = new Paho.MQTT.Client("192.168.0.121", Number(8083), "/mqtt", clientId);

// Called when the connection is made
function onConnect() {
    console.log("Connected!");
    client.send(message);
}

client.connect({
    onSuccess: onConnect,
    userName: "DEV_MIPPCMEXKG",
    password: "dcXxnjeNZwX9"
});

}

