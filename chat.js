// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



