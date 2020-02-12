
var addbt=document.querySelector("#added");
var removebt=document.querySelector("#removed");
var item=document.querySelector("#add");
var remove=document.querySelector("#remove");
var c=1;




var ol = document.getElementById("list");

addbt.addEventListener("click",function(){
	var li = document.createElement("li");
	if(item.value==="")
    {
    		
    	

    }
    else{
    	
  li.appendChild(document.createTextNode(item.value));
  li.setAttribute('id',c);
  c=c+1;
  ol.appendChild(li);
}
 })
removebt.addEventListener("click",function(){
  if(remove.value<=0)
    {

    }
     else{
    	    var candidate = document.getElementById("candidate");
    c=c-1;
    var item = document.getElementById(remove.value);
    ol.removeChild(ol.childNodes[remove.value-1]);   
}

})