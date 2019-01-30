window.onscroll=function(){
    console.log(getWindowHeight());
    console.log(getDocumentTop());
    if((getWindowHeight()) <= (getDocumentTop()*2)){
        document.getElementById('head-nav').style.background="#fff";
        document.getElementById('head-title').style.background="#fff";
        document.getElementById("img-logo").src= "";
        document.getElementById("img-logo").src= "img/logo_untext.svg";
        document.getElementById('head-nav').style.boxshadow="0 0 10px 0 rgba(0,0,0,.1)";
    }
    else{
        document.getElementById('head-nav').style.background="rgba(255, 255, 255, 0)";
        document.getElementById('head-title').style.background="rgba(255, 255, 255, 0)";
        document.getElementById("img-logo").src= "img/logo_header.svg";
    }
}

function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

function getDocumentTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}
