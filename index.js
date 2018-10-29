browser.browserAction.onClicked.addListener(function() {
  var creating = browser.tabs.create({
    url:"http://r0.ru"
  });
  creating.then(onCreated, onError);
});