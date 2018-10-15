
function highlight(item){
    var i;
    var listItems= document.getElementsByClassName("listItems");
    for(i=0;i<listItems.length;i++)
    {
        listItems[i].style.fontSize = "13px";
        listItems[i].style.fontWeight = "600";
    }


    item.style.fontSize="15px";
    item.style.fontWeight="900";
}

function showProfile() {
    document.getElementById("disProfile").classList.toggle("show");
}

function showContact() {
    document.getElementById("disContact").classList.toggle("show");
}

function showFont() {
    document.getElementById("disFont").classList.toggle("show");
}
function showFilter() {
    document.getElementById("filters").classList.toggle("show");

    document.getElementById("widget-items").classList.toggle("rearrange");
    var x = window.matchMedia("(max-width: 650px)")

    if(x.matches)
    {

        if(document.getElementById("widget-items").classList.contains("rearrange"))
        {
            document.getElementById("widget-items").classList.remove("rearrange");
    }
}
}

window.onclick=function(event){
    if(!(event.target.classList.contains('showProfile'))){

            let dp = document.getElementById("disProfile");       
            dp.classList.remove("show");
        
                
        }
       
        if(!(event.target.classList.contains('showContact'))){

            let dp = document.getElementById("disContact");       
            dp.classList.remove("show");
                
        }

        if(!(event.target.classList.contains('showFont'))){

            let dp = document.getElementById("disFont");       
            dp.classList.remove("show");

                
        }


}



function selectBox(box){

  
   var theBox =  document.getElementsByClassName("widget-box");
   var i;
   for(i=0;i<theBox.length;i++){

    theBox[i].style.borderWidth = '0';
    box.style.borderColor= 'black';
    box.style.borderStyle = '';
    theBox[i].lastElementChild.style.display="none";
   }
   //console.log(theBox);
    box.style.borderWidth = '2px'
    box.style.borderColor= 'black';
    box.style.borderStyle = 'solid';
    box.style.zIndex='0';
    box.lastElementChild.style.display="block";
    console.log(box);
}


function stopProp(e) {

    e.stopPropagation();
}