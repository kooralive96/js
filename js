let networkid = '21741253817';

let gambannerpath = '/7047,' + networkid + '/apl/aplmcm7047/';
let interstitialpath = '/7047,' + networkid + '/apl/inter';
let anchorpath = '/7047,' + networkid + '/apl/anchor/anchortop';
let native = '/7047,' + networkid + '/apl/nativefeedapl';

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function () {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') +
        '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
})();

var gptAdSlots = [];
window.googletag = window.googletag || { cmd: [] };
googletag.cmd.push(function () {
    gptAdSlots[1] = googletag.defineSlot(gambannerpath + 'cube', [[300, 250], [336, 280]], 'div-gpt-ad-1699023657043-1')
        .addService(googletag.pubads());
    // Define other ad slots similarly
    // ...
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
});

// Display ad slots
for (let i = 1; i <= 11; i++) {
    googletag.cmd.push(function () {
        googletag.display(gptAdSlots[i]);
    });
}

setInterval(function () {
    googletag.pubads().refresh([gptAdSlots[0]]);
}, 30000);
