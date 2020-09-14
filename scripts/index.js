 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC0VveoDuSqxus5HGlpxfzY6_upWk5qc6E",
    authDomain: "myawesome-ed6dc.firebaseapp.com",
    databaseURL: "https://myawesome-ed6dc.firebaseio.com",
    projectId: "myawesome-ed6dc",
    storageBucket: "myawesome-ed6dc.appspot.com",
    messagingSenderId: "5242279623",
    appId: "1:5242279623:web:48f56ef2d55c391ecbd0e2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function goToCadastrar(){
     window.location.href="cadastrar.html";
     
  }


  function login(){
   
   var email = document.getElementById("txtEmail").value;
   var senha = document.getElementById("txtSenha").value;
 
   var user = firebase.auth().currentUser;

   firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error) {
     
     
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;

     alert(errorMessage)
   
   });
 

   if (user != null) {

      var uid  = firebase.auth().currentUser.uid;
      console.log(uid);
      var concString = "?"+btoa(uid);
      alert("Logado com sucesso");
      window.location.href="posicionamento.html"+concString;
   }

 

  }
