var container = document.createElement('div');
container.className = 'container';
var box = document.createElement('div');
box.className = 'box';
var row = document.createElement('div');
row.className = 'row';
container.append(box,row);
document.body.append(container);

function button(attrvalue,name){
    var res = document.createElement('button');
    res.addEventListener("click",but);
    res.className="topics"
    res.innerHTML=name;
    res.setAttribute("id",attrvalue);
    return res;
}
function linebreak(){
    var res = document.createElement('br');
    return res;
}

var all=button("all","all");
var b1=linebreak();
var business=button("business","business");
var b2=linebreak();
var sports=button("sports","sports");
var b3=linebreak();
var world=button("world","world");
var b4=linebreak();
var politics=button("politics","politics");
var b5=linebreak();
var technology=button("technology","technology");
var b6=linebreak();
var startup=button("startup","startup");
var b7=linebreak();
var entertainment=button("entertainment","entertainment");
var b8=linebreak();
var miscelllaneous=button("miscelllaneous","miscelllaneous");
var b9=linebreak();
var hatke=button("hatke","hatke");
var b10=linebreak();
var science=button("science","science");
var b11=linebreak();
var automobile=button("automobile","automobile");
var b12=linebreak();

box.append(all,b1,business,b2,sports,b3,world,b4,politics,b5,technology,b6,startup,b7,entertainment,b8,miscelllaneous,b9,hatke,b10,science,b11,automobile);
var i=0;

function but(){
    var title=this.id;
    i=-1;
    news(title)
}

async function news(title){
    i+=1;
    try{
    var api=await fetch(`https://inshorts.deta.dev/news?category=${title}`);
    var res=await api.json();
    row.innerHTML=`<div><h1>${title.toUpperCase()}</h1><br><img src="${res.data[i].imageUrl}"><br>
                    <b>${res.data[i].title} :</b><br>
                    <p> &emsp; ${res.data[i].content}</p>
                    <a target="_blank" href="${res.data[i].readMoreUrl}">Read More.... </a><br>
                    <button onclick="news(title)" id="next">Next>> </button>
                    </div>`;
}catch{
}
}
news("all");