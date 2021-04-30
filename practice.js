var firebaseConfig = {
    apiKey: "AIzaSyDU8T9lWZEuk9Axdw5pChPOZpfBqilVCXE",
    authDomain: "classtest-7c7fe.firebaseapp.com",
    databaseURL: "https://classtest-7c7fe-default-rtdb.firebaseio.com",
    projectId: "classtest-7c7fe",
    storageBucket: "classtest-7c7fe.appspot.com",
    messagingSenderId: "369166333757",
    appId: "1:369166333757:web:0b6aec348012ff165af754",
    measurementId: "G-7JDEPX6QPC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}