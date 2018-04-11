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
            lis += '<li><a href="single.html?name='+key+'/'+menu+'">' + menu + '</a></li>';
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


    $('.contact-btn').on('click',function (e) {
        layer.confirm('you can email to <span style="color:#D39D5D;">milltor-service@outlook.com</span>', {
            title: 'Tips',
            shadeClose: true, //开启遮罩关闭
            skin: 'layui-layer-molv', //样式类名
            btn: [] //按钮
        });
    })

    $('.join input[type="submit"]').on('click',function (e) {
        var email = $('.join input[type="text"]').val();
        if(matchEmail(email)){
            var url = 'http://www.qu-gou.com/shishicai/public/index.php/api/milltor/milltor/send_mail';
            var data = {name:'订阅name',email:email,message:'订阅message',subject:'订阅subject'}
            $.post(url,data,function (result) {
                layer.confirm(result.msg.message, {
                    title: 'Tips',
                    skin: 'layui-layer-molv', //样式类名
                    btn: ['confirm'] //按钮
                });
            })
        }else{
            layer.confirm('please input correct email', {
                title: 'Tips',
                shadeClose: true, //开启遮罩关闭
                skin: 'layui-layer-molv', //样式类名
                btn: ['confirm'] //按钮
            });
        }
    })

});

function matchEmail(email) {
    return email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/);
}

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