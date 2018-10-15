
function highlight(id){
    var i;
    var listItems= document.getElementsByClassName(listItems);
    for(i=0;i<listItems.length;i++)
    {
       console.log(listItems[i]);
        listItems[i].fontSize = "13px";
        listItems[i].fontWeight = "600";
    }
        let listItem1 = document.getElementById(id);
    listItem1.style.fontSize = "15px";
    listItem1.style.fontWeight="900";

}