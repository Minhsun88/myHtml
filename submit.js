function jump(){
    window.localStorage.setItem("name",document.getElementById("name").value);
    if(document.getElementById("B").checked == false)
    {
    window.localStorage.setItem("sex",document.getElementById("G").value);
    }
    else{
    window.localStorage.setItem("sex",document.getElementById("B").value);
    }
    window.localStorage.setItem("bd",document.getElementById("bd").value);
    window.localStorage.setItem("add",document.getElementById("add").value);
    window.localStorage.setItem("email",document.getElementById("email").value);
    window.localStorage.setItem("phone",document.getElementById("phone").value);
    window.localStorage.setItem("account",document.getElementById("account").value);
    window.localStorage.setItem("password",document.getElementById("password").value);
    window.location = "sub_tab.html";
  }
  function check(){
    var name=document.getElementById("name").value;
    var bd=document.getElementById("bd").value;
    var add=document.getElementById("add").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var account=document.getElementById("account").value;
    var password=document.getElementById("password").value;
    var passwordc=document.getElementById("passwordc").value;

    var txt = new RegExp(/["'<>%;)(&+]/);
    var rex = /[\u4E00-\u9FA5]{1,2}$/;
    var m=new RegExp(/@/);
    if(name == ""){
      alert("請輸入名字")
    }
    else if(account == ""){
      alert("帳號不能為空")
    }
    else if(phone == ""){
      alert("手機不能為空")
    }
    else if(password == ""){
      alert("密碼不能為空")
    }
    else if(passwordc == ""){
      alert("密碼確認不能為空")
    }
    else if(email == ""){
      alert("email不能為空")
    }
    else if(document.getElementById("G").checked==false && document.getElementById("B").checked==false){
      alert("請選擇性別")
    }
    else if(bd == ""){
      alert("請輸入生日")
    }
    else if(add == ""){
      alert("地址不能為空")
    }
    else if(!rex.test(name)){
      alert("名字請輸入中文")
    }
    else if(rex.test(account)||txt.test(account)){
      alert("帳號包含不許可值")
    }
    else if(!m.test(email)){
      alert("電子郵件不符規定")
    }
    else if(password!=passwordc){
      alert("請在確認一次您輸入之密碼是否一致")
    }
    else{
      jump();
    }
    }
     