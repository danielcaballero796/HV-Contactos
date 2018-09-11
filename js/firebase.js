

//configuracion de firebase
var config = {
    apiKey: "AIzaSyDvrpfJ5zKAUy8Gt54emxJkZsehkINT9J4",
    authDomain: "my-hv-1b6f7.firebaseapp.com",
    databaseURL: "https://my-hv-1b6f7.firebaseio.com",
    projectId: "my-hv-1b6f7",
    storageBucket: "my-hv-1b6f7.appspot.com",
    messagingSenderId: "1035574146503"
  };
  firebase.initializeApp(config);
	
	//variable que tiene la lista desde la vista
  var olList = document.getElementById('lista');
  
	//referencia a el hijo en el base de datos 
  var db = firebase.database().ref().child('contacto')
  
  //db.on('child_added', snap => console.log(snap.val())); //impresos en consola
  
  db.on('child_added', function(snapshot){
	  var li = document.createElement('li');
	  //li.innerText = JSON.stringify(snap.val(),null,3);
	  li.innerHTML = 'Nombre: '+snapshot.val().nombre+'<br/>'+
					 'Correo: '+snapshot.val().correo+'<br/>'+
					 'Telefono: '+snapshot.val().telefono+'<br/>'+
					 'Fecha: '+snapshot.val().fecha+'<br/>'+
					 'Comentario: '+snapshot.val().comentario+'<br/>';
	  olList.appendChild(li);
  });