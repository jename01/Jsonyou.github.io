  var url1 = 'https://med-project-plus-plus.blogspot.com/p/top-tier-providence-secretly-cultivate_22.html';
  var by1 = 'ซื่อเย่ [Siye]';
  
var jsondata = '{"001 ": ["url1","1"], "002 ": ["url1","1"], "003 ": ["url1","1"], "004 ": ["url1","1"], "005 ": ["url1","1"], "006 ": ["url1","1"], "007 ": ["url1","1"], "008 ": ["url1","1"], "009 ": ["url1","1"], "010 ": ["url1","1"], "011 ": [], "012 ": [], "013 ": [], "014 ": [], "015 ": [], "016 ": [], "017 ": [], "018 ": [], "019 ": [], "020 ": [], "021 ": [], "022 ": [], "023 ": [], "024 ": [], "025 ": [], "026 ": [], "027 ": [], "028 ": [], "029 ": [], "030 ": [], "031 ": [], "032 ": [], "033 ": [], "034 ": [], "035 ": [], "036 ": [], "037 ": [], "038 ": [], "039 ": [], "040 ": [], "041 ": [], "042 ": [], "043 ": [], "044 ": [], "045 ": [], "046 ": [], "047 ": [], "048 ": [], "049 ": [], "050 ": [], "051 ": ["url1","1"], "052 ": ["url1","1"], "053 ": ["url1","1"], "054 ": ["url1","1"], "055 ": ["url1","1"], "056 ": ["url1","1"], "057 ": ["url1","1"], "058 ": ["url1","1"], "059 ": ["url1","1"], "060 ": ["url1","1"], "061 ": ["url1","1"], "062 ": ["url1","1"], "063 ": ["url1","1"], "064 ": ["url1","1"], "065 ": ["url1","1"], "066 ": ["url1","1"], "067 ": ["url1","1"], "068 ": ["url1","1"], "069 ": ["url1","1"], "070 ": ["url1","1"], "071 ": ["url1","1"], "072 ": ["url1","1"], "072-5 ": ["url1","1"], "073 ": ["url1","1"], "074 ": ["url1","1"], "075 ": ["url1","1"], "076 ": ["url1","1"], "077 ": ["url1","1"], "078 ": ["url1","1"], "079 ": ["url1","1"], "080 ": ["url1","1"], "081 ": ["url1","1"], "082 ": ["url1","1"], "083 ": ["url1","1"], "084 ": ["url1","1"], "085 ": ["url1","1"], "086 ": ["url1","1"], "087 ": ["url1","1"], "088 ": ["url1","1"], "089 ": ["url1","1"], "090 ": ["url1","1"], "091 ": ["url1","1"], "092 ": ["url1","1"], "093 ": ["url1","1"], "094 ": ["url1","1"], "095 ": ["url1","1"], "096 ": [], "097 ": [], "098 ": [], "099 ": [], "100 ": []}';
const obj = JSON.parse(jsondata);


function getdata(data, elem) {
  	let checkep = document.getElementById("EP"+elem.id);
  	var ep, prev, next;
    ep = elem.id; 
  	if (elem.attributes['prevdata'] !== undefined) {prev = elem.attributes['prevdata'].value}; 
  	if (elem.attributes['nextdata'] !== undefined) {next = elem.attributes['nextdata'].value};
    const load = document.getElementById("load-imgs");
  	remep(ep);
  	//load.innerHTML += `<div id="id-info1${ep}" style="display: flex; text-align: center; justify-content: center;"></div>`;
  	removeelem("id-info1"); removeelem("id-info2");
  	createidinfo (ep, prev, next, "id-info1"); createidinfo (ep, prev, next, "id-info2");
  	if (checkep !== null) { checkep.style.display = 'flex'; return;};
    document.getElementById("svg-load").style.display = 'block';
    if (data[ep+' '][0] === "url1") { var url = url1 };
  	if (data[ep+' '][1] == 1) { var by = by1};
  	removeelem("load-imgs");
  	//hideimgs();
  
    fetch(url).then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        // Convert the HTML string into a document object
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        // Get the image file
        const getdiv = doc.querySelector('#EP' + ep);
        const img = getdiv.querySelectorAll('img');
        const divep = document.createElement('div');
      	if (by !== undefined) {createby(divep, by, 'margin-top: auto;')};
      	divep.id = 'EP' + ep;
        divep.style.cssText = "display: flex; flex-direction: column; align-content: center; position: relative; -webkit-user-drag: none; -webkit-user-select: none; -ms-user-select: none; user-select: none;";
      	load.appendChild(divep);
      	document.getElementById("id-info1").scrollIntoView();
        setTimeout(loadimages, 50, 0, img, ep, 1)
		var imagewidth = '720px';
      	var imgloadstyle = `pointer-events: none; -webkit-user-drag: none; user-select: none; margin: auto;text-align: center; width: ${imagewidth}; margin: auto; background-color: black;`;
      	var imgerrorstyle = `pointer-events: none; -webkit-user-drag: none; user-select: none; margin: auto;text-align: center; width: ${imagewidth}; height: auto; margin: auto;text-align: center; background-color: white; background-image: linear-gradient(45deg,#ececec 26%,transparent 0,transparent 75%,#ececec 0,#ececec),linear-gradient(45deg,#ececec 30%,transparent 0,transparent 75%,#ececec 0,#ececec); background-position: 0 0,10px 10px; background-size: 20px 20px; background-repeat: round;`;
      	
        function loadimages(counter, data, ep, i) {
            if (counter == data.length) { document.getElementById("svg-load").style.display = 'none'; if (by !== undefined) {createby(divep, by, 'margin-bottom: auto;')}; return; }
          	document.getElementById("svg-load").style.display = 'block';
            const create = document.createElement('img');
            create.id = 'img' + counter;
            create.style.cssText = imgerrorstyle;
          	divep.appendChild(create);
            if (i == 2) { create.setAttribute("onload", "cssreload(this)"); create.setAttribute("onerror", "csserror(this)"); setTimeout(loadimages, 200, counter + 1, data, ep, 2) };
            if (i != 2) {
            create.onload = function () { create.style.cssText = imgloadstyle; loadimages(counter + 1, data, ep, i+1); };
            create.onerror = function () { create.style.cssText = imgerrorstyle; create.setAttribute("onclick", "reimg(this)"); loadimages(counter + 1, data, ep, 1); }
            };
            //create.setAttribute("onclick","reimg(this)");
            create.src = create.dataset.src = data[counter].dataset.src;
            create.setAttribute("alt", "");
          	
        }
    }).catch(function (err) {
        // There was an error
        console.warn('Have error.', err);
    });
}

  function cssreload(e){
  	e.style.cssText = `pointer-events: none; -webkit-user-drag: none; user-select: none; margin: auto;text-align: center; width: 720px; margin: auto; background-color: black;`;
    e.removeAttribute('onerror');
    e.removeAttribute('onload');
  };
  
  function csserror(e){
  	e.style.cssText = `pointer-events: none; -webkit-user-drag: none; user-select: none; margin: auto;text-align: center; width: 720px; height: 1000px; margin: auto;text-align: center; background-color: white; background-image: linear-gradient(45deg,#ececec 26%,transparent 0,transparent 75%,#ececec 0,#ececec),linear-gradient(45deg,#ececec 30%,transparent 0,transparent 75%,#ececec 0,#ececec); background-position: 0 0,10px 10px; background-size: 20px 20px; background-repeat: round;`;
    e.removeAttribute('onerror');
    e.removeAttribute('onload');
  };
  
function reimg(img_reload) {
  var imagewidth = '720px';
    var newimg = document.createElement('img');
    if (newimg.complete) {
        newimg.style.cssText = `pointer-events: none; -webkit-user-drag: none; user-select: none; margin: auto;text-align: center; width: ${imagewidth};`;
        img_reload.parentNode.insertBefore(newimg, img_reload)
        img_reload.remove();
    }
    newimg.src = img_reload.dataset.src
}
//function reimg(img) {
//	var newerrimg = new Image();
//  newerrimg.src = img.dataset.src
//  if(newerrimg.complete) {
//    	img.onload = '';
//  	img.style.cssText = 'pointer-events: none; -webkit-user-drag: none; user-select: none; margin: auto;text-align: center; width: 720px;';
//  	img.src = newerrimg.src;
//  }}

  function hide_show(id) {
  let x = document.getElementById(id.innerText);
  var t = document.querySelectorAll("table")
  if (x.style.display === "none") {
    x.style.display = "table";
    for (tid of t) {if (tid.id !== x.id) {tid.style.display = "none";}}
  } else {
    //x.style.display = "none";
  }
}

function removeelem(elem) {
   const elems = document.getElementById(elem);
    while (elems.firstChild) {
        elems.firstChild.remove();
    }
}
function hideimgs() {
    const parent = document.getElementById("load-imgs").querySelectorAll("div");
    for (var i = 0; i < parent.length; i++) {
        parent[i].style.display = 'none';
    }
}

function scrollBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

var x = document.querySelectorAll("th>a")

var keystoarr = [];
Object.entries(obj).forEach(entry => {
    const [key, value] = entry;
    keystoarr.push(key);
});

keystoarr.forEach((data, i) => {
    if (obj[data].length !== 0) {
      	x[i].setAttribute("onclick", "getdata(obj, this);");
        x[i].innerText = data.replace(/ /g,""); x[i].href = '#' + data.replace(/ /g,""); x[i].id = data.replace(/ /g,"");
      	x[i].setAttribute("data-id", i);
      	if (i > 0) {x[i-1].setAttribute("nextdata", data.replace(/ /g,""));}
        if (i < keystoarr.length-1) {x[i+1].setAttribute("prevdata", data.replace(/ /g,""));}
    }
})
function removeep() {
    var y = document.querySelectorAll("th");
    for (var i = 0; i < x.length; i++) {
        if (x[i].innerText == '') { y[i].remove(); }
    }
}

var tables = document.querySelectorAll('table');
tables[tables.length - 1].style.display = 'table';
let tablelenth = Object.keys(tables).length;
tables.forEach((t, i) => {
    document.getElementById('button-ep').innerHTML += `<button onclick="hide_show(this)">${t.id}</button>`;
    if (i == Object.keys(tables).length - 1) { document.getElementById('button-ep').innerHTML += `<button onclick="removeelem('load-imgs'); removeelem('id-info1'); removeelem('id-info2');">Remove Images</button>`; };
});
  function editcss (){
  document.querySelector("article.post-outer-container").style.cssText = 'padding-left: 0px; padding-right: 0px;';
  document.querySelector("h3.post-title").style.cssText = 'padding-left: 2%;';
  document.querySelector("div.post-share-buttons.post-share-buttons-top").style.cssText = 'padding-right: 2%;';
  }
  
  editcss();
  
  function createidinfo (ep, prev, next, elem) {
    var style = 'width: -moz-available; width: -webkit-fill-available; width: fill-available; cursor: pointer; /*margin-bottom: auto;*/';
    var stylenone = 'width: -moz-available; width: -webkit-fill-available; width: fill-available; color: #ffffff00; -webkit-user-select: none; -ms-user-select: none; user-select: none; /*margin-bottom: auto;*/';
  	if (prev !== undefined) {document.getElementById(elem).innerHTML += `<h1 onclick="document.getElementById('${prev}').onclick()" style="${style}"><a href="#${prev}">PREV</a></h1>`;} else {document.getElementById(elem).innerHTML += `<h1 style="${stylenone}">PREV</h1>`;};
    document.getElementById(elem).innerHTML += `<h1 style="width: -moz-available; width: -webkit-fill-available; width: fill-available; -webkit-user-select: none; -ms-user-select: none; user-select: none; margin-bottom: auto;">${ep}</h1>`;
    if (next !== undefined) {document.getElementById(elem).innerHTML += `<h1 onclick="document.getElementById('${next}').onclick()" style="${style}"><a href="#${next}">NEXT</a></h1>`;} else {document.getElementById(elem).innerHTML += `<h1 style="${stylenone}">NEXT</h1>`;};
  }
  
  
    function remep(ep) {
  var lastep, name, remdata;
    name = document.getElementsByClassName('post-title entry-title')[0].innerText;
    lastep = localStorage.getItem(name) !== null ? localStorage.getItem(name) : '001';
    if (ep !== undefined) {
      localStorage.setItem(name, ep);
      lastep = localStorage.getItem(name);
    }
    if (lastep !== undefined) { document.getElementById('remem').innerHTML = `<h1><a href="#${lastep}" style="font-weight: bold;" onclick="document.getElementById('${lastep}').onclick()">${lastep}</a></h1>`;}
}
  remep();
  
  
function openFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  document.getElementById('openfullscreen').setAttribute("onclick", "closeFullscreen();")
}
  
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
  document.getElementById('openfullscreen').setAttribute("onclick", "openFullscreen();")
}
  
  function createby(elem, by, margin) {
    if (margin == undefined) {margin = '';};
  	elem.innerHTML += `<div style="display: flex; text-align: center; justify-content: center;"><p style="${margin} font-size: medium;">${by}</p></div>`;
          }
