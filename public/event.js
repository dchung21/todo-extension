// background (event) page
var parent = chrome.contextMenus.create({
  "title": "Add event",
  "id": "0",
  "contexts": ["all"],
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
    console.log("Clicked", info.selectionText)
    let data = {data: info.selectionText};
    fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(data)
    }).then(res => {
        console.log("req complete, response:", res);
    })
});

