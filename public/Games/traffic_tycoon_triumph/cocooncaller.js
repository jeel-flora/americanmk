//v5.1 (Kindle friendly)
var _gameConfig = "nothingToLoad";
var _pub_loaded = false;
var _MG_loaded = false;
var _gamename = "unnamedgame"; //Code name of the game
var _clientID = -1;
var _platform = "";



function getConfigDatas() {
    return _gameConfig;
}

function loadConfig() {
    var client = new XMLHttpRequest();
    client.onreadystatechange = function(data) {

        if (client.readyState == 4 &&
            client.status == 200) {
            //alert(client.responseText);
            _gameConfig = client.responseText;
            //alert(responseText);
        }
    }

}



if (navigator.userAgent.toLowerCase().indexOf("android") != -1) {
    _platform = "Android";
} else if (navigator.userAgent.toLowerCase().indexOf("ipad") != -1) {
    _platform = "iPad";
} else if (navigator.userAgent.toLowerCase().indexOf("iphone") != -1) {
    _platform = "iPhone";
} else if (navigator.userAgent.toLowerCase().indexOf("ipod") != -1) {
    _platform = "iOS";
} else if (navigator.userAgent.toLowerCase().indexOf("silk") != -1 || navigator.userAgent.toLowerCase().indexOf("kindle") != -1 || navigator.userAgent.toLowerCase().indexOf("kfjw") != -1 || navigator.userAgent.toLowerCase().indexOf("kftt") != -1 || navigator.userAgent.toLowerCase().indexOf("kfot") != -1) {
    _platform = "Kindle";
} else {
    _platform = "unknow";
}

function setGameName(gname, clientID, forcePlatform) {
    forcePlatform = forcePlatform || false;
    if (forcePlatform && forcePlatform != "") {
        _platform = forcePlatform;
    }
    _gamename = gname;
    _clientID = clientID;
    loadConfig();
    //alert(_platform);
}

function showWV() {

    if (!_pub_loaded) {
        loadWV();
    }
    if (typeof(CocoonJS) !== 'undefined') {
        CocoonJS.App.showTheWebView(0, 0, window.innerWidth, window.innerHeight);
    }

}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function showMG() {
    var fromPartner = getCookie('fromPartner') || "";
    var d = new Date();
    switch (fromPartner.toLowerCase()) {
        case "chromewa":
        case "firefoxwa":
            //alert("222");
            break;
        case "":
        default:
            //alert("1111");
            // try{parent.moregame();}catch(e){}
            break;
    }

}

function hideMG() {
    // alert("ddd")
}

function loadWV() {
    //alert("eee")
}


function windowOpen(url) {
    // alert("cccc");
    // try{parent.moregame();}catch(e){}
}

//uncomment to load webview
function startOnline() {
    loadWV();
    //alert(_platform);
}

function startOffline() {
    //alert("offline");
    if (_platform != "Android" && _platform != "Kindle") {
        //alert("forced IOS");
        startOnline();
    }
    CocoonJS.App.hideTheWebView();
}

function sendAnalytics(gamename, clientID, type, todo, value) {

    var ajaxAnalytics = new XMLHttpRequest();

    ajaxAnalytics.onreadystatechange = function(data) {
        if (data.readyState == 4 &&
            data.status == 200) {

        }
    }

}