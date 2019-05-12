// 1.自动循环div
        //     1.获取container div，content div
        var timer;
        var timerIndex;
        var index = 0;
        var contents = document.getElementsByClassName('content')[0];
        function moveImg(obj,speed){
            var content = obj.getElementsByTagName('img');
            var number = content.length;
            var widths = obj.offsetWidth;
            timerIndex = setInterval(function(){
                index++;
                if(index >= (number+1)){
                    index = 0;
                }
                moveContent(obj,number*widths,index*widths,speed);
            },1000);
        }
        //     2.给其一个起始值、速度
        function moveContent(obj,max,endPos,speed){
            if(timer){
                clearInterval(timer);
            }
            var startPos = obj.scrollLeft;
            timer = setInterval(function(){
            // 3.判断其滚动距离，如果其滚动距离刚好或超过达到下一张图片的距离，则将其距离设置为下一张的距离
                // if(startPos<endPos){
                    startPos+=speed;
                    if(startPos>=endPos){
                        clearInterval(timer);
                        startPos = endPos;
                    }
                // }else{
                //     startPos -= (number/5)*10;
                //     if(startPos <= endPos){
                //         startPos = endPos;
                //     }
                // // }
                // console.log(endPos);
                // console.log(startPos);
                startPos >= max?startPos = 0 : startPos;
                obj.scrollLeft = startPos;
            },20);
        }