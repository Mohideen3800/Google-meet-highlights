// popup.js

document.getElementById('markHighlightButton').addEventListener('click', function () {
  const label = prompt('Enter a label for the highlight:');
  if (label) {
    chrome.runtime.sendMessage({ action: 'saveHighlight', label }, function (response) {
      if (response.success) {
        // Do something to confirm the highlight has been saved.
      }
    });
  }
});
