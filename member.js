function checkall(obj){
    checkitem=document.getElementsByName("c[]");
    if(obj.checked==true){
        for(i = 0;i < checkitem.length ;i++){
            document.getElementsByName("c[]")[i].checked=true;
        }
    }
    else{
        for(i = 0;i < checkitem.length;i++){
            document.getElementsByName("c[]")[i].checked=false;
        }
    }
}