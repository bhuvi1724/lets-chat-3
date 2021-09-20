//YOUR FIREBASE LINKS
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
    room_name= localStorage.getItem("room_name")
    user_name=localStorage.getItem("user_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>" + name+"<img class='user_tick.png'></h4>"
message_with_tag="<h4 class='message_h4'>"+ message+"</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updatelike(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span><button><hr>"
row=name_with_tag+message_with_tag+like_button+span_with_tag
document.getElementById("output").innerHTML+=row;





//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}
function send()
{
      msg=document.getElementById("msq").value
      firebase.database().ref(room_name).push(
            {
            name:user_name,
            message:msg,
           like:0
            }
      )
      document.getElementById("msq").value="" 
}
function updatelike(message_id){
      console.log("clicked on like button-"+message_id);
      button_id=message_id 
      likes=document.getElementById(button_id).value
      update_like=number(likes)+1;
      console.log(update_likes)
      firebase.database().ref(room_name).child(message_id).update({
         like:update_likes   
      });
}








