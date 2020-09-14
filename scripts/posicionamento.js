//import{acesso} from './acesso.js';

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
   
var queryString = decodeURIComponent(window.location.search);

var queries = queryString.split("?");
var meuUid = queries[1];

if(meuUid == null){

    window.location.href="index.html";
}
 

function LatLog(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);


    }

}

function showPosition(position){
    
    document.getElementById("txtLat").value = position.coords.latitude;
    document.getElementById("txtLong").value = position.coords.longitude;
}


 