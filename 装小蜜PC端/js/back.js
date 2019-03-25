window.onload = function(){

    var ss = document.getElementById('btnn');
    var timer = null; // 添加事件 
    ss.onclick = function () { 
    // 获取页面已经滚动的距离 
        var valtop = document.documentElement.scrollTop || document.body.scrollTop; 
        timer = setInterval(function () { // 在计时器修改滚动距离，并且赋值给页面滚动高度(这里利用计时器，是为了让滚动不生硬) 
        valtop = valtop - 50; // 注意零界值的判断 
        if (valtop <= 0) {
             valtop = 0; 
             clearInterval(timer); 
            }
             if (document.documentElement.scrollTop) { 
                 //有值就是火狐、ie 
                 document.documentElement.scrollTop = valtop; 
                } else { //没值就是google
                     document.body.scrollTop = valtop; } }, 20) }
}