/*
 * Coded By Reha Biçer & Gültekin Boyraz & Emre Demir
 * by Game Distribution 2010-2017
 *
 * Hello to all Amiga & C64 world.
 *
 */
(function(window) {

    var UNDEFINED = 'undefined';
    var adsManager;
    var adsEnabled = false;
    var prerollEnabled = true;
    var gameId;
    var affialateId;
    var midrollTimeout = 0;
    var adBlock = true;
    //var gdgaUUID = 'UA-102700627-1'; // test account
    var gdgaUUID = 'UA-102601800-1' // live account
    var gdApi = window['gdApi'];
    var settings = gdApi.q[0][0];
    gdApi.href = getParentUrl(); //window.location.href;

    // AdBlock Checker

    adBlock = false;


    init();

    function init() {
        if (typeof _gd_ga === UNDEFINED) {




            var s = document.createElement("script");
            s.innerHTML = "var DS_OPTIONS={id: 'GAMEDISTRIBUTION',success: function(id) {}}";
            document.head.appendChild(s);


        }
        // JQUERY
        if (typeof $ === UNDEFINED) {
            //loadScript("//code.jquery.com/jquery-1.4.2.min.js", function () {
            loadScript("//code.jquery.com/jquery-2.1.4.min.js", function() {
                init();
            });
            return;
        }
        // JQUERY Md5 Plugin

        // Analytics


        // Google

        // All Done
        if (typeof(settings.gameId) !== UNDEFINED && typeof(settings.userId) !== UNDEFINED) {
            try {
                _gd_['static'].gdApi = gdApi;
                _gd_['static'].useSsl = ('https:' == document.location.protocol);
                _gd_.logger.init(settings.gameId, settings.userId);
                _gd_.banner.init(onBannerConfig);
                gdApi.play = _gd_.logger.play;
                gdApi.customLog = _gd_.logger.customlog;

                if (typeof(settings.onInit) !== UNDEFINED) {
                    var o = ["%c %c %c GameDistribution Html5 Api | v1.3.2 23082017 | %c %c %c http://tunnl.com", "background: #9854d8", "background: #6c2ca7", "color: #ffffff; background: #450f78;", "background: #6c2ca7", "background: #9854d8", "background: #ffffff"];
                    settings.onInit({
                        Code: 100,
                        Msg: "GameDistribution Html5 Api initialized."
                    });
                    console.log.apply(console, o);

                }
            } catch (e) {
                onError(e);
            }
        } else {
            onError("You need to define GameId and PublisherId.");
        }
    }

    function showBannerInternal(data) {
        adsManager.requestAds();


    }

    function onBannerConfig(data) {
        if (data) {
            // Init Ads
            var adsContainer = document.createElement("div");
            adsContainer.setAttribute("id", "ads-container");
            adsContainer.style.position = "absolute;";
            document.body.appendChild(adsContainer);
            var videoContainer = document.createElement("video");
            videoContainer.style.display = "none";
            document.body.appendChild(videoContainer);
            document.body.style.padding = "0px";
            document.body.style.margin = "0px";
            document.documentElement.style.padding = "0px";
            document.documentElement.style.margin = "0px";
            document.documentElement.style.overflow = "hidden";

            //console.log(data);
            // Set defaults, which could be overwritten.
            var defaults = {
                adsEnabled: true,
                prerollEnabled: true,
                midrollTimeout: 2,
                gameId: "",
                affialateId: ""
            };
            // Create options by extending defaults with the passed in arguments.

            if (typeof(data.cfg) !== UNDEFINED && typeof(data.cfg.f) !== UNDEFINED) {
                adsEnabled = false;
            } else {
                adsEnabled = data.row["0"].act;
                prerollEnabled = data.row["0"].pre == "1";
                midrollTimeout = data.row["0"].sat
                gameId = data.row["0"].uid;
                affialateId = data.row["0"].aid;
            }


            (new Image()).src = "https://analytics.tunnl.com/collect?type=html5&evt=game.play&uuid=" + gameId + "&aid=" + affialateId;


            onResumeGame();

        } else {
            gdApi.showBanner = function() {
                onResumeGame();
                _gd_.utils.log("Problem occured fetching xml data!");
            }
        }
    }

    function onPauseGame(data) {
        try {
            if (typeof(settings.resumeGame) !== UNDEFINED && settings.resumeGame !== null) {
                settings.pauseGame();


            }
        } catch (e) {
            console.error(e);
        }
    }

    function onResumeGame(data) {
        try {
            if (typeof(settings.pauseGame) !== UNDEFINED && settings.pauseGame !== null) {
                settings.resumeGame();

            }
        } catch (e) {
            console.error(e);
        }
    }

    function onError(data) {
        try {
            if (typeof(settings.onError) !== UNDEFINED) {
                settings.onError({
                    Code: 404,
                    Data: data
                });

            }
        } catch (e) {
            console.error(e);
        }
    }

    function getParentUrl() {
        // If the referrer is gameplayer.io, else we just return href.
        // The referrer can be set by Spil games.
        if (document.referrer.indexOf('gameplayer.io') !== -1) {
            // now check if ref is not empty, otherwise we return a default.
            var defaultUrl = 'https://gamedistribution.com/';
            if (document.referrer.indexOf('?ref=') !== -1) {
                var returnedResult = document.referrer.substr(document.referrer.indexOf('?ref=') + 5);
                if (returnedResult === '{portal%20name}' || returnedResult === '{portal name}') {
                    returnedResult = defaultUrl;
                } else {
                    if (returnedResult.indexOf('http') !== 0) {
                        returnedResult = 'http://' + returnedResult;
                    } else {
                        returnedResult = defaultUrl;
                    }
                }
                return returnedResult;
            } else {
                return defaultUrl;
            }
        }
        return (window.location != window.parent.location) ? document.referrer : document.location.href;
    }

    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    function loadScript(url, callback, callbackError) {

        var script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function() {
                callback();
            };

            script.onerror = function() {
                if (typeof callbackError !== UNDEFINED)
                    callbackError();
            };
        }

        script.src = url;

        document.getElementsByTagName("head")[0].appendChild(script);
    }
})(window);