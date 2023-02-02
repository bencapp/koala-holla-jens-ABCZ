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
      renderKoala(response);
    })
    .catch ((error) => {
      console.log('error in GET', error);
    })
  // ajax call to server to get koala
  
} // end getKoala

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  $.ajax({
    type: 'POST',
    url: '/koala',
    data: newKoala
  }).then(function (response) {
    console.log('Response from server in post', response);
    renderKoala();
  }).catch((err) => {
    console.log('error in POST', err);
  })
}


//function that renders the koalas
function renderKoala(koala) {
   console.log('in render Koala')
   $('#viewKoalas').empty();

   for(let i = 0; i < koala.length; i += 1) {
    let myKoala = koala[i];

   $('#viewKoalas').append(`
    <tr data-id= ${mykoala.id} data-read=${mykoala.readyForTransfer}>
    <td>
      ${myKoala.name}
    </td>
    <td>
      ${myKoala.age}
    </td>
    <td>
      ${myKoala.gender}
    </td>
      ${myKoala.readyForTransfer}
    <td>
      ${myKoala.notes}
    </td>
  </tr>
   `);
   }
}