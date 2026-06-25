// Copyright 2013 Google Inc. All Rights Reserved.
// You may study, modify, and use this example for any purpose.
// Note that this example is provided "as is", WITHOUT WARRANTY
// of any kind either expressed or implied.

var adsManager;
var adsLoader;
var adDisplayContainer;
var intervalTimer;
var GameContent;

function init() {
    GameContent = document.getElementById('the-frame');
    if (typeof google !== 'undefined' && typeof google.ima !== 'undefined') {
        setTimeout(setUpIMA(), 250);
    } else {
        setTimeout(removeAd(), 10000);
    }
}

function removeAd() {
    clearInterval(intervalTimer);
    document.getElementById('adContainer').style.display = 'none';
}

function setUpIMA() {

    // Create the ad display container.
    createAdDisplayContainer();
    // Create ads loader.
    adsLoader = new google.ima.AdsLoader(adDisplayContainer);

    //adsLoader.getSettings().setDisableCustomPlaybackForIOS10Plus(true);  //todo semble être retiré

    // Listen and respond to ads loaded and error events.

    adsLoader.addEventListener(
        google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        onAdsManagerLoaded,
        false);
    adsLoader.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        onAdError,
        false);

    // An event listener to tell the SDK that our content video
    // is completed so the SDK can play any post-roll ads.
    var contentEndedListener = function() {
        adsLoader.contentComplete();
    };
    GameContent.onended = contentEndedListener;

    // Request video ads.
    var adsRequest = new google.ima.AdsRequest();

    //TODO changed
    //adsRequest.adTagUrl = 'https://googleads.g.doubleclick.net/pagead/ads?ad_type=video_image_text&client=ca-games-pub-4968145218643279&videoad_start_delay=0&description_url=http%3A%2F%2Fwww.google.com&max_ad_duration=20000';
    adsRequest.forceNonLinearFullSlot = true;
    adsRequest.adTagUrl = './6141218';

    /*
      adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?' +
          'sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&' +
          'impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&' +
          'cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=';*/

    // Specify the linear and nonlinear slot sizes. This helps the SDK to
    // select the correct creative if multiple are returned.
    adsRequest.linearAdSlotWidth = window.innerWidth;
    adsRequest.linearAdSlotHeight = window.innerHeight;

    //adsRequest.nonLinearAdSlotWidth = 450;
    //adsRequest.nonLinearAdSlotHeight = 600;

    adsRequest.nonLinearAdSlotWidth = window.innerWidth;
    adsRequest.nonLinearAdSlotHeight = window.innerHeight;

    adsLoader.requestAds(adsRequest);
}

function createAdDisplayContainer() {
    // We assume the adContainer is the DOM id of the element that will house
    // the ads.
    adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById('adContainer'), GameContent);
}

function playAds() {
    // Initialize the container. Must be done via a user action on mobile devices.
    adDisplayContainer.initialize();
    intervalTimer = setInterval(function() {
        var remainingTime = adsManager.getRemainingTime();
    }, 300); // every 300ms
    try {
        // Initialize the ads manager. Ad rules playlist will start at this time.
        adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.NORMAL);

        // adsManager.init(450, 600, google.ima.ViewMode.NORMAL);
        // Call play to start showing the ad. Single video and overlay ads will
        // start at this time; the call will be ignored for ad rules.
        adsManager.start();
    } catch (adError) {
        console.log("error while playing ads");
        removeAd();
    }
}

function onAdsManagerLoaded(adsManagerLoadedEvent) {
    // Get the ads manager.
    var adsRenderingSettings = new google.ima.AdsRenderingSettings();
    adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
    // GameContent should be set to the content video element.
    adsManager = adsManagerLoadedEvent.getAdsManager(GameContent, adsRenderingSettings);

    // Add listeners to the required events.
    adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
    adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAdEvent);
    adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, onAdEvent);
    adsManager.addEventListener(google.ima.AdEvent.Type.AD_BREAK_READY, onAdEvent);
    adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, onAdEvent);
    adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, onAdEvent);
    adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, onAdEvent);


    playAds();
}

function onAdEvent(adEvent) {
    var ad = adEvent.getAd();

    /*switch (adEvent.type)
    {
      case google.ima.AdEvent.Type.SKIPPED:
      case google.ima.AdEvent.Type.USER_CLOSE:
      case google.ima.AdEvent.Type.COMPLETE:
      case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
        removeAd();
      break
    }*/
    removeAd();
}

function onAdError(adErrorEvent) {
    // Handle the error logging.
    console.log(adErrorEvent.getError());
    removeAd();
    // adsManager.destroy();
}

init();