let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
let text=document.querySelector(".text");


btn.addEventListener("click", function(){
    
    let item=document.createElement("li");
    let checkbox=document.createElement("input");
    checkbox.type= "checkbox";

    item.appendChild(checkbox);
    item.append( inp.value);

    ul.appendChild(item);
    
    inp.value= "";
});