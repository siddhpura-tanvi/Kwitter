
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyBJc2yJn9v8irbqYhMRRFhFc9JcMK3CXBI",
      authDomain: "test-a4657.firebaseapp.com",
      databaseURL: "https://test-a4657-default-rtdb.firebaseio.com/",
      projectId: "test-a4657",
      storageBucket: "test-a4657.appspot.com",
      messagingSenderId: "703058533299",
      appId: "1:703058533299:web:40aed08112ee4ed8bf49c6",
      measurementId: "G-NNPZKT7ZZY"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"     +user_name +"!";
    function addRoom(){
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
      console.log("Room Name-"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
     getData();
     function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html"
     }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="index.html";
}
