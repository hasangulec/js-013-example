let newadd = document.querySelector("#btnadd")
newadd.classList.add("newclass");

let removeclass = document.querySelector("#btnremove")
removeclass.classList.remove("textcolorred")

let replaceclass=document.querySelector("#btnreplace")
replaceclass.classList.replace("newclass","replaceclass")

function itemClass(){
let itemclass = document.querySelector("p").classList;
result=itemclass.item(0);
alert("P elementinin içerisinde ki ilk sınıf  : "+result)
}
function containsClass(){
    let containsclass = document.querySelector("p")

    let result = containsclass.classList.contains("ClassList")
    
    alert("P elementinin içerisinde ClassList adında bir sınıf var mı : "+result)

}

