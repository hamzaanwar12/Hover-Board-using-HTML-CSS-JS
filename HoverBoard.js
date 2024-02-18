let colors = ["green","blue","pink","orange","red","aquamarine","cadetblue","burlywood","crimson",
"brown",      "darkturquoise","fuchsia","darkseagreen","darksalmon","goldenrod","blue","chartreuse","coral","chocolate","dodgerblue","deepskyblue","cornflowerblue"]

let tableCells = document.querySelectorAll("td");
tableCells.forEach(element => {
    element.addEventListener("mouseenter",()=>
    {
        element.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]   
    })

    element.addEventListener("mouseleave",()=>
    {
        setTimeout(() => {
            if(element.style.backgroundColor != "#636262de")
                element.style.backgroundColor = "#636262de";
        }, 1250);    
    })

});