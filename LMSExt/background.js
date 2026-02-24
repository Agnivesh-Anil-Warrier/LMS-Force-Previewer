chrome.runtime.onMessage.addListener((msg) => {

    if (msg.openPdf) {
        chrome.tabs.create({
            url: msg.openPdf
        });
    }

});