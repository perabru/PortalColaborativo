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
 
var refCadastro = firebase.database().ref("cadastro");



refCadastro.child(atob(meuUid)).on("child_added", snap=>{


   document.getElementById("lblNome").innerHTML = snap.child("nome").val();

   //alert(snap.child("nome").val());
});


function LatLog(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);


    }

}

function showPosition(position){
    
    document.getElementById("txtLat").value = position.coords.latitude;
    document.getElementById("txtLong").value = position.coords.longitude;
    


   latlon=new google.maps.LatLng(document.getElementById("txtLat").value, document.getElementById("txtLong").value)
  mapholder=document.getElementById('mapholder')
  mapholder.style.height='500px';
  mapholder.style.width='750px';
 
  var myOptions={
  center:latlon,zoom:14,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  mapTypeControl:false,
  navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };
  var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
  var marker=new google.maps.Marker({position:latlon,map:map,title:"Você está Aqui!"});



    var insert = refCadastro.child(atob(meuUid)).child("historico").push({

        mLatitude:  document.getElementById("txtLat").value,
        mLongitude:  document.getElementById("txtLong").value,
        TIMESTAMP: document.getElementById("txtData").value
    });

}


 

