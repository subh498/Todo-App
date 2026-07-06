let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
let text=document.querySelector(".text");


btn.addEventListener("click", function(){
    
    let item=document.createElement("li");
    let checkbox=document.createElement("input");
    checkbox.type= "checkbox";
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");

    item.appendChild(checkbox);
    item.append( inp.value);
    item.appendChild(delbtn);
    ul.appendChild(item);

    delbtn.addEventListener("click", function () {
        item.remove();
    });
    
    
    inp.value= "";
});