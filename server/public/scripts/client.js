console.log("js");

$(document).ready(function () {
  console.log("JQ");
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoala();
}); // end doc ready

function setupClickListeners() {
  $("#addButton").on("click", saveKoala);
}

function getKoala() {
  console.log("in getKoalas");
  $.ajax({
    type: "GET",
    url: "/koala",
  })
    .then((response) => {
      console.log(response);
      renderKoala(response);
    })
    .catch((error) => {
      console.log("error in GET", error);
    });
  // ajax call to server to get koala
} // end getKoala

function saveKoala() {
  // create new koala from input fields
  const koalaToSend = {
    name: $("#nameIn").val(),
    age: $("#ageIn").val(),
    gender: $("#genderIn").val(),
    readyForTransfer: $("#readyForTransferIn").val(),
    notes: $("#notesIn").val(),
  };
  console.log("in saveKoala, POSTING", koalaToSend);

  // ajax call to server to get koalas
  $.ajax({
    type: "POST",
    url: "/koala",
    data: koalaToSend,
  })
    .then(function (response) {
      console.log("Response from server in post", response);
      getKoala();
    })
    .catch((err) => {
      console.log("error in POST", err);
    });
}

//function that renders the koalas
function renderKoala(koala) {
  console.log("in render Koala");
  $("#viewKoalas").empty();

  for (let i = 0; i < koala.length; i += 1) {
    let myKoala = koala[i];

    $("#viewKoalas").append(`
    <tr data-id= ${myKoala.id} data-read=${myKoala.readyForTransfer}>
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
