
        var btn = document.getElementById('btnn');
        var timer = null;
        btn.onclick = function(){
            var valtop = document.documentElement.scrollTop || document.body.scrollTop;
            timer = setInterval(function(){
                valtop = valtop - 50;
                if(valtop <= 0){
                    valtop = 0;
                    clearInterval(timer);
                }
                if(document.documentElement.scrollTop){
                    document.documentElement.scrollTop = valtop;
                }else{
                    document.body.scrollTop = valtop;
                }
            },20)
        }