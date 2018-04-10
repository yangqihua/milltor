$(function () {
    var querys = getRequest();
    var productsUls = '';
    var active;
    var imgs = '';
    var src = '';
    var productName = '';
    var otherUls = '';
    for (var key in images) {
        var product = images[key];
        for (var menu in product) {
            active = '';
            if (querys.hasOwnProperty('name') && querys['name'].indexOf(menu) !== -1) {
                active = 'active';
                productName = menu;
                var activeProduct = product[menu];
                for(var i=0;i<activeProduct.length;i++){
                    src = 'images/products/'+key+'/'+menu+'/'+activeProduct[i]+'.jpg';
                    imgs+='<li data-thumb="'+src+'">' +
                        '<div class="thumb-image"><img src="'+src+'" data-imagezoom="true"' +
                        '                              class="img-responsive" alt=""/></div>' +
                        '</li>'
                }
                var otherImg = '';
                for (var otherKey in product) {
                    if(otherKey === productName){
                        continue
                    }
                    otherImg = 'images/products/'+key+'/'+otherKey+'/'+product[otherKey][0]+'.jpg';
                    otherUls+='<div class="col-md-4 product simpleCart_shelfItem text-center">' +
                        '<a href="single.html?name='+key+'/'+otherKey+'"><img src="'+otherImg+'" alt=""/></a>' +
                        '<div class="mask">' +
                        '<a href="single.html?name='+key+'/'+otherKey+'">Quick View</a>' +
                        '</div>' +
                        '<a class="product_name" href="single.html?name='+key+'/'+otherKey+'">'+otherKey+'</a>' +
                        '</div>';
                }
            }
            productsUls += '<li><a class="'+active+'" href="single.html?name='+key+'/'+menu+'">'+menu+'</a></li>';
        }
    }
    $('#product-list-id').append(productsUls);
    $('#slide-id').append(imgs);
    $('#related-id').after(otherUls);

    $('#product-name-id').text(productName);
    $('.dress-name span').text('$ 0.40-1.20');
});