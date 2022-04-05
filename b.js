function get(x,y){
if(x.slice(0,1).includes("#")){
  //an id
  x = x.replace("#","");
   return document.getElementById(x);
}

if(x.slice(0,1).includes(".")){
  //its a class
  x = x.replace(".","");
  if (y != null){
    return document.getElementsByClassName(x)[y];
  }
  else{
    console.error("index of class is not provided");
  }
 }
}

function call(call_funcion){
setTimeout(call_funcion,1);
}

}
/*
function hide(idOrClass,Index){
if (a.split(0,1).includes(".")){
  if (index != null | undefined){
    return document.getElementsByClassName(idOrClass)[Index].style.display="none"; 
  }
  else{
    console.error("index of clas not provided at hide()");
  }
}
if(a.split(0,1).includes("#")){
  return document.getElementById(idOrClass).style.display="none";
}
}*/
function unhide(hg){
  hb.style.display="block";
}
function del(del){
  del.outerHTML=null;
}
function createElement(element,iClass){
  var ele = document.createElement(element);
  if (iClass.slice(0,1).includes(".")){
    ele.setAttribute("class",iClass.replace(".",""));
    document.body.appendChild(ele);    
  }
  if (iClass.slice(0,1).includes("#")){
    ele.setAttribute("id",iClass.replace("#",""));
    document.body.appendChild(ele);
  }
}
function print(x,y,z) {
  //usage print("what to write" , "<id>|class" ,"index if class");
  if (y.slice(0,1).includes("#")){
    y = y.replace("#","");
    document.getElementById(y).innerHTML=x;
  }
  if (y.slice(0,1).includes(".")){
    y = y.replace(".","");
    document.getElementsByClassName(y)[z].innerHTML=x;}
if(z === undefined){ 
  var ejo = document.getElementsByClassName(y);
  for (var i = 0; i < ejo.length; i++) {
    ejo[i].innerHTML = x;
}
}
}

Object.defineProperty(Element.prototype, "hide", {
  value() {
      this.style.display = "none";
  },
  writable: true,
  configurable: true,
});

Object.defineProperty(Element.prototype, "del", {
  value() {
      this.outerHTML=null;
  },
  writable: true,
  configurable: true,
});

Object.defineProperty(Element.prototype, "unhide", {
  value() {
    this.style.display = "block";
  },
  writable: true,
  configurable: true,
});
function replaceAll(from,what,wf){
  var aaa = from.split(what);
  return aaa.join(wf);
}
function onresize(fun){document.body.addEventListener(onresize,function(){call(fun);});}

Object.defineProperty(Element.prototype, "center", {
  value() {
      this.style.marginLeft="auto";
      this.style.marginRight="auto";
  },
  writable: true,
  configurable: true,
});

//created by BALTEJ SINGH.
