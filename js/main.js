$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path");
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  let isClicked = false;
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  floorPath.on("mouseover", function () {
    if (isClicked) {
      return;
    }
    floorPath.removeClass("current-floor");

    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);

  floorPath.on("click", function () {
    floorPath.removeClass("current-floor");
    $(this).toggleClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
    isClicked = true;
  });

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  function toggleModal() {
    modal.toggleClass("is-open");
  }
});
