function save_options() {
  chrome.storage.sync.set(
    {
      toggle: document.querySelector("#togglein").checked,
      zoominf: document.querySelector("#zoominf").value,
      zoomoutf: document.querySelector("#zoomoutf").value,
    },
    function () {}
  );

  window.close();
}

function restore_options() {
  chrome.storage.sync.get(
    {
      toggle: false,
      zoominf: 10,
      zoomoutf: 10,
    },
    function (items) {
      document.querySelector("#togglein").checked = items.toggle;
      document.querySelector("#zoominf").value = items.zoominf;
      document.querySelector("#zoomoutf").value = items.zoomoutf;
      if (items.toggle) {
        document.querySelector(".txtin").innerText = "↑ Zoom in factor : ";
        document.querySelector(".txtout").innerText = "↓ Zoom out factor : ";
      } else {
        document.querySelector(".txtin").innerText = "↓ Zoom in factor : ";
        document.querySelector(".txtout").innerText = "↑ Zoom out factor : ";
      }
    }
  );
}

function change_txt(e) {
  if (e.target.checked) {
    document.querySelector(".txtin").innerText = "↑ Zoom in factor : ";
    document.querySelector(".txtout").innerText = "↓ Zoom out factor : ";
  } else {
    document.querySelector(".txtin").innerText = "↓ Zoom in factor : ";
    document.querySelector(".txtout").innerText = "↑ Zoom out factor : ";
  }
}

document.querySelector("#togglein").addEventListener("change", change_txt);
document.querySelector("#savebtn").addEventListener("click", save_options);
document.addEventListener("DOMContentLoaded", restore_options);
