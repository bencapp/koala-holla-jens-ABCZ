console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoala();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoala(){
  console.log( 'in getKoalas' );
    $.ajax({
      type : 'GET',
      url : '/koala'
    })
    .then ((response) => {
      console.log(response);
      //renderKoala(response);
    })
    .catch ((error) => {
      console.log('error in GET', error);
    })
  // ajax call to server to get koala
  
} // end getKoala

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}


//function that renders the koalas

// function renderKoala() {
//   console.log('in render Koala')
//   $('#viewKoalas').empty();
// }