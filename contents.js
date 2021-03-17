var rightflag = false;
var zoomedflag = false;

function wheelFunc(e) {
  if (rightflag) {
    e.preventDefault();
    zoomedflag = true;
    if (e.wheelDelta < 0) {
      chrome.runtime.sendMessage(
        { message: "zoom", boolzoom: true },
        function (res) {
          if (chrome.runtime.lastError) {
          }
        }
      );
    } else {
      chrome.runtime.sendMessage(
        { message: "zoom", boolzoom: false },
        function (res) {
          if (chrome.runtime.lastError) {
          }
        }
      );
    }
  }
}

document.addEventListener("mouseup", (e) => {
  if (e.which == 3) {
    rightflag = false;
  }
});
document.addEventListener("mousedown", (e) => {
  if (e.which == 3) {
    rightflag = true;
  }
});
document.addEventListener("wheel", wheelFunc, { passive: false });
document.addEventListener("contextmenu", function (e) {
  if (zoomedflag) {
    e.preventDefault();
    zoomedflag = false;
  }
});
