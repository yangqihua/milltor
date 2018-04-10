$(function () {
    var querys = getRequest();
    var productsUls = '';
    var active;
    for (var key in images) {
        var product = images[key];
        for (var menu in product) {
            active = '';
            if (querys.hasOwnProperty('name') && querys['name'].indexOf(menu) !== -1) {
                active = 'active';
            }
            productsUls += '<li><a class="'+active+'" href="single.html?name='+key+'/'+menu+'">'+menu+'</a></li>';
        }
    }
    $('#product-list-id').append(productsUls);
});