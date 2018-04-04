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
    
    
    var divs = '';
    var count = 0;
    for(var key in images){
        var product = images[key];
        for(var menu in product){
            if(count >=12){
                break;
            }
            var img = 'images/products/'+key+'/'+menu+'/'+product[menu][0]+'.jpg';
            divs += '<div class="col-md-4 product simpleCart_shelfItem text-center">' +
                '<a href="single.html">' +
                '<img src="'+img+'" alt=""/>' +
                // '<div style="background: red;width: 100%;height: 300px;"/>' +
                '</a>' +
                '<div class="mask">' +
                '<a href="single.html">Quick View</a>' +
                '</div>' +
                '<a class="product_name" href="single.html">'+menu+'</a>' +
                '</div>';
            count++;
        }
    }
    $('#pupular-id').after(divs);

    var fetures = '';
    var products = images['MP-series'];

    for(var menu in products){
        var img = 'images/products/MP-series/'+menu+'/'+product[menu][0]+'.jpg';
        fetures+= '<li><a href="single.html">' +
            '<img src="'+img+'"  style="padding:10px;" class="img-responsive" alt=""/></a>' +
            '<div class="product liked-product simpleCart_shelfItem">' +
            '<a class="like_name" href="single.html">'+menu+'</a>' +
            '</div>' +
            '</li>';
    }
    $('#flexiselDemo3').append(fetures);
});