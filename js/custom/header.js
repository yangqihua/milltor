$(function () {
    var uls = '';
    for(var key in images){
        var product = images[key];
        var lis = '';
        for(var menu in product){
            lis +='<li><a href="products.html">'+menu+'</a></li>';
        }
        uls+='<li class="dropdown">' +
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">'+key+' <b class="caret"></b></a>' +
            '<ul class="dropdown-menu multi-column columns-1">' +
            '<div class="row">' +
            '<div class="col-sm-12">' +
            '<ul class="multi-column-dropdown">' +
            lis+
            '</ul>' +
            '</div>' +
            '</div>' +
            '</ul>' +
            '</li>';
    }
    $('#home-btn').after(uls);
});