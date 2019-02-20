(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
    var clientWidth = docEl.clientWidth;
    var screenWidth = 640;
    if (!clientWidth) return;
    if (clientWidth >= screenWidth) {// 这里做了屏幕最大值的判断，避免因为屏幕宽度过宽导致页面变得十分巨大
        docEl.style.fontSize = '100px';//alert('fllow me');
    }else if(clientWidth < screenWidth){
        docEl.style.fontSize = 100 * (clientWidth / screenWidth) + 'px';
        //alert('hello is me');
    }
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
    // 各页面菜单栏的点击触发
    function caidann(){
        var caidan = document.getElementById("caidan");
        var public_lanmu = document.getElementById("public_lanmu");
        var top = document.getElementsByClassName("nav_top")[0];
        var heigh = document.body.scrollHeight - top.clientHeight;
        if(public_lanmu.style.display == "none"){
            public_lanmu.style.height = heigh + 'px';
            public_lanmu.style.display = "block";
        }else{
            public_lanmu.style.display = "none";
            // if(public_lanmu.title == "zhibo"){
            //     document.getElementsByClassName("ziji_caidan")[0].style.display = "none";
            // }else{
            //     return;
            // }
        }
    }
// 工地直播菜单栏的点击触发
    function a(id,title){
        if(title == ''){
            var aa = document.getElementById(id);
            var bb = document.getElementById("public_lanmu").getElementsByTagName("li");
            var cc = document.getElementsByClassName("ziji_caidan")[0];
            var dd = cc.getElementsByTagName("span");
            for(var i = 0, j = dd.length; i<j ; i++){
                dd[i].onclick = function(){
                    if(this.style.backgroundColor == "rgb(255, 159, 64)"){
                        this.style.backgroundColor = "#E9E9E9";
                    }else{
                        this.style.backgroundColor = "rgb(255, 159, 64)";
                    }
                }
            }
            for(var i = 0, j = bb.length; i < j; i++){
                bb[i].style.color = '#4d4d4d';
                bb[i].style.background = "url(../images/sjx.png) no-repeat 5.5em center";
            }
            aa.style.color = "#ff9f40";
            aa.style.background = "url(../images/yellow_sjx.png) no-repeat 5.5em center";
            if( cc.style.display == "none" ){
                cc.style.display = "block";
            }else{
                return;
            }
        }else{
            var aa = document.getElementById(id);
            var bb = document.getElementsByClassName("nav_top")[0];
            var cc = document.getElementsByClassName("nav_bottom")[0];
            var dd = document.getElementsByClassName("gongdi_xinxi")[0];
            var ee = document.getElementsByClassName("gongdi_lanmu")[0];
            var ff = document.getElementsByClassName("ybgc_content")[0];
            bb.style.backgroundColor = '#2C2C2C';
            cc.style.height = 'auto';
            dd.style.display = 'none';
            ff.style.display = 'block';
            border = ee.getElementsByTagName("a");
            for(var i = 0, j = border.length; i < j; i++)
            {
                border[i].style.border = 'none';
            }
            aa.style.border = '3px solid #'+title;
        }
    }
 //评论框
    function pinglun(){
        var aa = document.getElementsByClassName('foo')[0];
        var bb = document.getElementsByClassName('text')[0];
        if(aa.style.display == 'none'&&bb.style.display == 'block'){
            aa.style.display = 'block';
            bb.style.display = 'none';
        }else if(aa.style.display == 'block'&&bb.style.display == 'none'){
            aa.style.display = 'none';
            bb.style.display = 'block';
        }
    }           