
//ADD YOUR FIREBASE LINKS HERE


//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAshS8P5jPVVCySfpGbNkYYMEMPyLMpCtw",
      authDomain: "kwitter-a0f54.firebaseapp.com",
      databaseURL: "https://kwitter-a0f54-default-rtdb.firebaseio.com",
      projectId: "kwitter-a0f54",
      storageBucket: "kwitter-a0f54.appspot.com",
      messagingSenderId: "516780582800",
      appId: "1:516780582800:web:125e57ed219dabf111b515"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome "+user_name




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name -"+ Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
purpose:"adding rooom name"
});
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}














