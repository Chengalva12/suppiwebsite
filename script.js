const firebaseConfig = {
    apiKey: "AIzaSyDKW5Y7bnbxfiIWBHb3w5wiJBEmSrnEn44",
    authDomain: "restuarantweb-4d2df.firebaseapp.com",
    databaseURL: "https://restuarantweb-4d2df-default-rtdb.firebaseio.com",
    projectId: "restuarantweb-4d2df",
    storageBucket: "restuarantweb-4d2df.appspot.com",
    messagingSenderId: "320145231023",
    appId: "1:320145231023:web:d2bfe7c8b7862e7f28585a",
    measurementId: "G-BT9WRH867Z"
  };
  firebase.initializeApp(firebaseConfig);

  function call(){
    var messagesRef = firebase.database().ref('/calling');
    const user_name=document.getElementById("exampleInputName1").value;
    const number=document.getElementById("exampleInputphoneNumber1").value;
    console.log(user_name);
    console.log(number);
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        username : user_name,
        phonenumber : number
    });
  }

  function save(){
    var messagesRef = firebase.database().ref('/table');
    const user_name=document.getElementById("name").value;
    const date=document.getElementById("date").value;
    const time=document.getElementById("time").value;
    const partysize=document.getElementById("party-size").value;
    const foodorder=document.getElementById("food-order").value;
    const payment=document.getElementById("payment").value;
    console.log(user_name);
    console.log(date);
    console.log(time);
    console.log(partysize);
    console.log(foodorder);
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        username : user_name,
        date : date,
        time : time,
        partysize : partysize,
        foodorder : foodorder,
        payment : payment
    });
  }