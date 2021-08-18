document.getElementById("password").passShow = function() {passShow()};
function passShow() {
    var p=document.getElementById("password");
    if(p.type=="password")
    {
        p.type="text";
    }
    else{
        p.type="password";
    }
}