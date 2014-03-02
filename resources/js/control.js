$(document).ready(function(){

    $('#carousel-content').carousel();
    /*
    if ("onhashchange" in window) { // event supported?
        window.onhashchange = function () {
            hashChanged(window.location.hash);
        }
    }
    else { // event not supported:
        var storedHash = window.location.hash;
        window.setInterval(function () {
            if (window.location.hash != storedHash) {
                storedHash = window.location.hash;
                hashChanged(storedHash);
            }
        }, 100);
    }

    var hashChanged = function(arg){
        var hash = '';
        hash = arg.split('#')[1];
        if(hash.length != 0){
            $.ajax({
                url: "xhrreq.php"
                ,data: { "element": hash}
                ,method: 'POST'
                ,async: true
                ,dataType: 'JSON'
                ,success: function(msg){
                    $("div#main-frame").html(msg.content);
                }
            });
        }
    };*/
});
