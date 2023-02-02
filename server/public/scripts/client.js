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
  $(document).on("click", ".transferBtn", updateReadyToTransfer);
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
    ready_to_transfer: $("#readyForTransferIn").val(),
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

function updateReadyToTransfer() {
  let id = $(this).parents("tr").data("id");
  $.ajax({
    method: "PUT",
    url: `/koala/${id}`,
    data: { ready_to_transfer: true },
  })
    .then(() => {
      getKoala();
    })
    .catch((err) => {
      console.log("PUT failed", err);
    });
}

//function that renders the koalas
function renderKoala(koala) {
  console.log("in render Koala");
  $("#viewKoalas").empty();

  for (let i = 0; i < koala.length; i += 1) {
    let myKoala = koala[i];
    console.log(myKoala);

    let koalaIsReady = myKoala.ready_to_transfer ? "Ready!" : "Not Ready";
    $("#viewKoalas").append(`
      <tr class="koalaList" data-id=${myKoala.id} data-ready=${myKoala.ready_to_transfer}>
        <td class="koalaList">
          ${myKoala.name}
        </td>
        <td class="koalaList">
          ${myKoala.age}
        </td>
        <td class="koalaList">
          ${myKoala.gender}
        </td>
        <td class="koalaList">
          ${koalaIsReady}
        </td>
        <td class="koalaList">
          <button class=transferBtn>${koalaIsReady}</button>
        </td>  
        <td class="koalaList">
          ${myKoala.notes}
        </td>
     </tr>

   `);
  }
}
