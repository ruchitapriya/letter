
var firebaseConfig = {
      apiKey: "AIzaSyDqp8tpr2L6tq-lWy1ie03E4fYjw_GBejM",
      authDomain: "letter-be590.firebaseapp.com",
      databaseURL: "https://letter-be590-default-rtdb.firebaseio.com",
      projectId: "letter-be590",
      storageBucket: "letter-be590.appspot.com",
      messagingSenderId: "8645122477",
      appId: "1:8645122477:web:1d9c7908c47300ba5fe924"
    };
    
    
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="welcome  "+user_name+"!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
       localStorage.setItem("room_name",room_name);
       window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;

      
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}