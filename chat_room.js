var firebaseConfig = {
    apiKey: "AIzaSyC4rmfL3UA-RYKxk3ZxBkWIup6zlgYl1ks",
    authDomain: "lets-chat-web-app-7dcf5.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-7dcf5-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-7dcf5",
    storageBucket: "lets-chat-web-app-7dcf5.appspot.com",
    messagingSenderId: "712925310357",
    appId: "1:712925310357:web:30af6dce07b881bc7c9a9c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!"

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}