chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    chrome.storage.sync.set(
      {
        toggle: false,
        zoominf: 10,
        zoomoutf: 10,
      },
      function () {
        chrome.tabs.query({}, function (tabs) {
          for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.reload(tabs[i].id);
          }
        });
      }
    );
  }
});

function zoom(boolzoom) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.storage.sync.get(null, function (items) {
      var toggle = items.toggle;
      var zoominf = items.zoominf;
      var zoomoutf = items.zoomoutf;
      let tabid = tabs[0].id;
      chrome.tabs.getZoom(tabid, function (zoomFactor) {
        if ((boolzoom && !toggle) || (!boolzoom && toggle)) {
          zoomFactor += zoominf / 100;
        } else {
          zoomFactor -= zoomoutf / 100;
        }
        chrome.tabs.setZoom(tabid, zoomFactor);
      });
    });
  });
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message == "zoom") {
    zoom(request.boolzoom); //true:↓
  }
});
