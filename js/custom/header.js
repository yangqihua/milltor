$(function () {

    var path = window.location.pathname;
    var querys = getRequest();
    var active = '';
    if (path.indexOf('index.html') !== -1) {
        active = 'nav-active'
    }
    var uls = '<li class="' + active + '"><a href="index.html">Home</a></li>';
    for (var key in images) {
        var product = images[key];
        var lis = '';
        for (var menu in product) {
            lis += '<li><a href="products.html">' + menu + '</a></li>';
        }
        active = '';
        if (querys.hasOwnProperty('name') && querys['name'].indexOf(key) !== -1) {
            active = 'nav-active';
        }
        uls += '<li class="dropdown ' + active + '">' +
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">' + key + ' <b class="caret"></b></a>' +
            '<ul class="dropdown-menu multi-column columns-1">' +
            '<div class="row">' +
            '<div class="col-sm-12">' +
            '<ul class="multi-column-dropdown">' +
            lis +
            '</ul>' +
            '</div>' +
            '</div>' +
            '</ul>' +
            '</li>';
    }
    active = '';
    if (path.indexOf('contact.html') !== -1) {
        active = 'nav-active'
    }
    uls += '<li class="' + active + '"><a href="contact.html">ABOUT US</a></li>';
    $('#nav-btn').append(uls);
});

function getRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}