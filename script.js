let checkFast = document.querySelector("#fast");
let checkCheap = document.querySelector("#cheap");
let checkGood = document.querySelector("#good");

function changed(value) {
  let fastChecked = checkFast.checked;
  let cheapChecked = checkCheap.checked;
  let goodChecked = checkGood.checked;
  if (fastChecked && cheapChecked && goodChecked && value === checkGood) {
    checkCheap.checked = false;
  }
  if (fastChecked && goodChecked && cheapChecked && value === checkCheap) {
    checkFast.checked = false;
  }
  if (cheapChecked && goodChecked && fastChecked && value === checkFast) {
    checkGood.checked = false;
  }
}

checkFast.addEventListener("click", function () {
  changed(checkFast);
});

checkCheap.addEventListener("click", function () {
  changed(checkCheap);
});

checkGood.addEventListener("click", function () {
  changed(checkGood);
});
