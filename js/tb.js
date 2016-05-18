//ewm
var ewm = document.getElementById("ewm"), close = document.getElementById("close");
close.onclick = function () {
    ewm.style.display = close.style.display = "none";
    Animate(ewm, {display: "block"}, 5000);
    Animate(close, {display: "block"}, 5000);
};


//all li in left  box
var jsonList = document.getElementById("jsonList"), jsonData = null;
~function () {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "json/jsonList.txt?_=" + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var val = xhr.responseText;
            jsonData = utils.formatJSON(val);
        }
    };
    xhr.send(null);
}();
~function () {
    var str = '';
    if (jsonData) {
        for (var i = 0; i < jsonData.length; i++) {
            var curData = jsonData[i];
            str += ' <li> ' + curData["content"] + ' <img src= " ' + curData["img"] + ' " alt=""/>  <span>' + curData["more"] + '</span></li>';
        }
        jsonList.innerHTML = str;
    }
}();

//============================================================
//
var loadF = document.getElementById("loadF"), loadT = document.getElementById("loadT"), jsonData3 = null;
~function () {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "json/load.txt?_=" + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var val = xhr.responseText;
            jsonData3 = utils.formatJSON(val);
        }
    };
    xhr.send(null);
}();
~function () {
    var str1 = '', str2 = '';
    if (jsonData3) {
        str1 += ' <img src= "' + jsonData3[0]["img"] + '" alt="" trueImg=""/>';
        str2 += ' <img src= " ' + jsonData3[1]["img"] + '" alt="" trueImg=""/>';
    }
    loadF.innerHTML = str1;
    loadT.innerHTML = str2;

}();

loadF.onclick = function () {
    window.location.href = "https://click.tanx.com/cc?spm=a21bo.50862.201860.1.WJE24u&e=KkXlSM%2b6cK%2b5TXqXqXBXe4BGB9pi%2fG98ovRmdo2xpAVG75hpvICads8lbZo63QrJUUisqYb1kPLISA6PrMBmBnEHYoqPCpOEulwAue1jfOw19ixJ08w9V97u00fpW4DNWUGrQ5Vc1J4QIrjlMRNBrTRHYmBVAMlP%2bRwlVtPZsHFqWWz%2bK2M2njGwM7WSJd8I&u=https%3a%2f%2fwww.taobao.com%2fmarkets%2fwuyi%2fnanzhuang&k=193";
};
loadT.onclick = function () {
    window.location.href = "https://click.mz.simba.taobao.com/ecpm?spm=a21bo.50862.201861.1.WJE24u&e=7UzDcEaAaHWk%2B9CSpjUu6IBGB9pi%2FG98PZF%2FanRFOkcvghbXgKvTK5189eHQRaEQdZp0YtojuDwU4L7O%2Fkqhx%2BO%2FnVPcLfq6UK7RDtIZydUyXElRAMLwo%2FBM9Kfha8FCYM2eYTKZNeu4bW3kUqNDykw2bmrVnXERrglYNBo49geaz%2FpcJU%2BMOAS6Kgwm0sSXoMP4jaIxuqFOQW9JAyNmiwmmt32fYpbd&u=https%3A%2F%2Falimarket.tmall.com%2Fmarkets%2Falimama%2Fmingdian&k=225";
};

var banner1 = new AutoBanner("banner", "json/banner.txt", 1000), banner2 = new AutoBanner("banner2", "json/banner2.txt", 1000);
//======================================================================
//=============================all context in  navList==================

var page = document.getElementById("page"), pageI = utils.firstChild(page), navList = document.getElementById("navList"), jsonData1 = null;
~function () {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "json/navList.txt?_=" + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var val = xhr.responseText;
            jsonData1 = utils.formatJSON(val);
        }
    };
    xhr.send(null);
}();
~function () {
    var str = '';
    if (jsonData1) {

        for (var i = 0; i < jsonData1.length; i++) {
            var curData = jsonData1[i];
            str += '<a href="' + curData["href"] + '"><div class="' + curData["class"] + '"><img src="' + curData["img"] + '" trueImg="" alt=""/> <strong>' + curData["strong"] + '</strong>  <span>' + curData["span"] + '</span><em><i></i> ' + curData["em"] + '</em></div></a>';

        }
        navList.innerHTML = str;
    }
}();


//loading public notice
var notice = document.getElementById("notice"), liBox = document.getElementById("liBox"), jsonData2 = null;
~function () {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "json/notice.json?_=" + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var val = xhr.responseText;
            jsonData2 = utils.formatJSON(val);
        }
    };
    xhr.send(null);
}();
~function () {
    var str1 = '', str2 = '';
    if (jsonData2) {
        for (var i = 0; i < jsonData2.length; i++) {
            var curData = jsonData2[i];
            str1 += '<li><a href="' + curData["href"] + '">' + curData["content"] + '</a>';
            str2 += '<div>';
            if (curData.div) {
                for (var k = 0; k < curData.div.length; k++) {
                    str2 += '<a href="' + curData.div[k].href + '"class="' + curData.div[k].class + '">' + curData.div[k].content + '</a>';
                }
            }
            str2 += '</div>';
        }
        liBox.innerHTML += str1;
        notice.innerHTML += liBox;
        notice.innerHTML += str2;
        var box = new changeTab(notice, 0);
    }
}();

//loading  news
var news = document.getElementById("news"), newIn = document.getElementById("newIn"), jsonData4 = null,step=0;
~function () {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "json/news.json?_=" + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var val = xhr.responseText;
            jsonData4 = utils.formatJSON(val);
        }
    };
    xhr.send(null);
}();
~function () {
    var str1 = '';
    if (jsonData4) {
        for (var i = 0; i < jsonData4.length; i++) {
            var curData = jsonData4[i];
            str1 += '<div><h3><a href="https://headline.taobao.com/feed/feedList.htm?spm=a21bo.50862.226762.1.RHT3pi">更多></a></h3><p><a href="' + curData["p"].href + '"><img src="' + curData["p"].src + '"alt=""/><em>' + curData["p"].em + '</em><span>' + curData["p"].span + '</span></a></p></div>';

        }
        str1+='<div><h3><a href="https://headline.taobao.com/feed/feedList.htm?spm=a21bo.50862.226762.1.RHT3pi">更多></a></h3><p><a href="' + jsonData4[0]["p"].href + '"><img src="' + jsonData4[0]["p"].src + '"alt=""/><em>' + jsonData4[0]["p"].em + '</em><span>' + jsonData4[0]["p"].span + '</span></a></p></div>';
        newIn.innerHTML += str1;

    }
}();
~function(){
    var timer=window.setInterval(move,2000);
    function move(){
        if(step>=3){
            step=0;
            newIn.style.top=0;
        }
        step++;
        Animate(newIn, {top: -step *110}, 1000);
    }
    news.onmouseenter=function(){
        window.clearInterval(timer);
    };
    news.onmouseleave=function(){
        timer=window.setInterval(move,2000);
    };

}();



//loading goodThings
var goodThings = document.getElementById("goodThings"), jsonData5 = null;
~function () {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "json/goodThings.json?_=" + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var val = xhr.responseText;
            jsonData5 = utils.formatJSON(val);
        }
    };
    xhr.send(null);
}();
~function () {
    var str1 = '';
    if (jsonData5) {
        for (var i = 0; i < jsonData5.length; i++) {
            var curData = jsonData5[i];
            str1 += ' <a href="' + curData["href"] + '"><span><img src="' + curData["src"] + '"  alt=""/></span><strong>' + curData["strong"] + '</strong><p>' + curData["p"] + '</p> <em>' + curData["em"] + '</em></a>';
        }
        goodThings.innerHTML += str1;

    }
}();

//loading goodShop
var goodShop = document.getElementById("goodShop"), goodShopBottom = document.getElementById("goodShopBottom"), jsonDatagoodShop = null;
~function () {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "json/goodShop.json?_=" + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var val = xhr.responseText;
            jsonDatagoodShop = utils.formatJSON(val);
        }
    };
    xhr.send(null);
}();
~function () {
    var str = '';
    if (jsonDatagoodShop) {
        for (var i = 0; i < jsonDatagoodShop.length; i++) {
            var curData = jsonDatagoodShop[i];
            str += '<div>' +
                '<a href="' + curData.b[0].href + '">' +
                '<strong>' + curData.b[1].strong + '</strong></a>' +
                '<p>' + curData["p"] + '</p>' +
                '<div class="' + curData.img[0].divClass + '">' +
                '<a href="' + curData.img[0].href + '" class="img1"><img src="' + curData.img[0].img + '" alt=""/></a>' +
                '<a href="' + curData.img[1].href + '" class="img2"><img src="' + curData.img[1].img + '" alt=""/></a>' +
                '<a href="' + curData.img[2].href + '" class="img3"><img src="' + curData.img[2].img + '" alt=""/></a>' +
                '</div>';
        }
        goodShop.innerHTML += str;

    }
}();


//loading usuallyA
var usuallyA = document.getElementById("usuallyA"), jsonDatausuallyA = null;
~function () {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "json/usually.json?_=" + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var val = xhr.responseText;
            jsonDatausuallyA = utils.formatJSON(val);
        }
    };
    xhr.send(null);
}();
~function () {
    var str = '';
    if (jsonDatausuallyA) {
        for (var i = 0; i < jsonDatausuallyA.length; i++) {
            var curData = jsonDatausuallyA[i];
            str += '<div class="leftA" id="' + curData["id"] + '">' +
                '<div class="' + curData.in[0].class + '">' +
                '<a href="' + curData.in[0].href + '">' +
            '<img src="' + curData.in[0].src + '" alt=""/></a><div><strong>' + curData.in[1].strong + '</strong>' +
                '<div class="' + curData.in[2].divClass + '" id="' + curData.in[2].divId + '">' +
                '<a href="' + curData.in[2].inhref[0].a + '"><span>' + curData.in[2].inhref[0].span + '' + curData.in[2].inhref[0].i + '</span></a> ' +
                '<a href="' + curData.in[2].inhref[1].a + '"><span>' + curData.in[2].inhref[1].span + '' + curData.in[2].inhref[1].i + '</span></a>' +
                '<a href="' + curData.in[2].inhref[2].a + '"><span>' + curData.in[2].inhref[1].span + ''+curData.in[2].inhref[2].i+'</span></a>' +
                '<a href=" '+curData.in[2].inhref[3].a+'"><span>'+curData.in[2].inhref[3].span+''+curData.in[2].inhref[3].i+'</span></a>' +
                '<a href="'+curData.in[2].inhref[4].a+'"><span>'+curData.in[2].inhref[4].span+''+curData.in[2].inhref[4].i+'</span></a>' +
                '<a href="'+curData.in[2].inhref[5].a+'"><span>'+curData.in[2].inhref[5].span+''+curData.in[2].inhref[5].i+'</span></a>' +
                '<a href="'+curData.in[2].inhref[6].a+'"><span>'+curData.in[2].inhref[6].span+''+curData.in[2].inhref[6].i+'</span></a>' +
                '<a href="'+curData.in[2].inhref[7].a+'"><span>'+curData.in[2].inhref[7].span+''+curData.in[2].inhref[7].i+'</span></a> ' +
                '<a href="'+curData.in[2].inhref[8].a+'"><span>'+curData.in[2].inhref[8].span+''+curData.in[2].inhref[8].i+'</span></a> ' +
                '<a href="'+curData.in[2].inhref[9].a+'"><span>'+curData.in[2].inhref[9].span+''+curData.in[2].inhref[9].i+'</span></a>' +
                ' <a href="'+curData.in[2].inhref[10].a+'"><span>'+curData.in[2].inhref[10].span+'</span></a>' +
                ' </div>' +
                '</div>' +
                '</div>' +
                ' <div class="imgListA"> ' +
                '<div class="topDiv"> ' +
                '<a class="one" href="'+curData.imgList[0].topDiv[0].href+'"><img src="'+curData.imgList[0].topDiv[0].img+'" alt=""/> <span>'+curData.imgList[0].topDiv[0].span+'</span></a> ' +
                '<a class="one b" href="'+curData.imgList[0].topDiv[1].href+'"><img src="'+curData.imgList[0].topDiv[1].img+'" alt=""/> <span>'+curData.imgList[0].topDiv[1].span+'</span></a>' +
                ' <a class="one two"href="'+curData.imgList[0].topDiv[2].href+'"><img src="'+curData.imgList[0].topDiv[2].img+'" alt=""/></a> ' +
                '<a class="one three" href="'+curData.imgList[0].topDiv[3].href+'"><img src="'+curData.imgList[0].topDiv[3].img+'" alt=""/></a> ' +
                '</div>' +
                ' <div  class="bottomDiv"> ' +
                '<a href="'+curData.imgList[1].bottomDiv[0].href+'"class="one"> <img src="'+curData.imgList[1].bottomDiv[0].img+'" alt=""/> <em>'+curData.imgList[1].bottomDiv[0].em+'</em> <span>'+curData.imgList[1].bottomDiv[0].span+'</span> </a> ' +
                '<a href="'+curData.imgList[1].bottomDiv[1].href+'"class="two"> <img src="'+curData.imgList[1].bottomDiv[1].img+'" alt=""/> <strong>'+curData.imgList[1].bottomDiv[1].strong+'</strong> <em>'+curData.imgList[1].bottomDiv[1].em+'</em> </a> ' +
                '<a href="'+curData.imgList[1].bottomDiv[2].href+'"class="two three"> <img src="'+curData.imgList[1].bottomDiv[2].img+'" alt=""/> <strong>'+curData.imgList[1].bottomDiv[2].strong+'</strong> <em>'+curData.imgList[1].bottomDiv[2].em+'</em> </a>  ' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        usuallyA.innerHTML += str;

    }
}();


//loading fashion
var fashionList = document.getElementById("fashionList"),jsonDatafashionList = null;
~function () {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "json/fashionList.json?_=" + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var val = xhr.responseText;
            jsonDatafashionList = utils.formatJSON(val);
        }
    };
    xhr.send(null);
}();
~function () {
    var str = '';
    if (jsonDatafashionList) {
        for (var i = 0; i < jsonDatafashionList.length; i++) {
            var curData = jsonDatafashionList[i];
            str += ' <li class="'+curData["liClass"]+'"><div class="'+curData["divClass"]+'"><h3>' +
                '<a href="'+curData["h3Href"]+'"></a></h3></div><div class="fsbottom"><a href="'+curData.list[0].href+'" class="'+curData.list[0].class+'"><img src="'+curData.list[0].src+'" alt=""/><span>'+curData.list[0].spanA+'<br/>'+curData.list[0].spanB+'</span></a>' +
                '<a href="'+curData.list[1].href+'" class="'+curData.list[1].class+'"> <img src="'+curData.list[1].src+'" alt=""/><span>'+curData.list[1].span+'</span></a>' +
                '<a href="'+curData.list[2].href+'" class="'+curData.list[2].class+'"><img src="'+curData.list[2].src+'" alt=""/><span>'+curData.list[2].span+'</span></a>' +
                '<a href="'+curData.list[3].href+'" class="'+curData.list[3].class+'"><img src="'+curData.list[3].src+'" alt=""/><span>'+curData.list[3].span+'</span></a>' +'</div></li>';

        }
        fashionList.innerHTML += str;

    }
}();



//loading like
var likeList = document.getElementById("likeList"),jsonDataLikeList = null;
~function () {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "json/like.json?_=" + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var val = xhr.responseText;
            jsonDataLikeList = utils.formatJSON(val);
        }
    };
    xhr.send(null);
}();
~function () {
    var str = '';
    if (jsonDataLikeList) {
        for (var i = 0; i < jsonDataLikeList.length; i++) {
            var curData = jsonDataLikeList[i];
            str += '<li><a href="'+curData["href"]+'"><div class="imgP"><img src="'+curData["src"]+'" alt=""/></div><p>'+curData["p"]+'</p><span>'+curData["span"]+' <em>'+curData["em"]+'</em></span></a></li> ';

        }
     likeList.innerHTML += str;

    }
}();

var inp2=document.getElementById("inp2"),inpu2In=document.getElementById("inpu2In");
 inp2.onmouseenter=function(){
     inpu2In.style.display="block";
};
inp2.onmouseleave=function(){
    inpu2In.style.display="none";
};


var center1=document.getElementById("center1"),inputTop=document.getElementById("inputTop");










