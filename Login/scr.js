document.getElementById("sub").addEventListener("click",function(event){
    event.preventDefault();
    let username=document.getElementById("user").value;
    let password=document.getElementById("pwd");

    if(username===""){
        alert("Enter Username!");
        return;
    }
    if(password.value===""){
        alert("Enter Password!");
        return;
    }
   
    alert("Welcome!");
});
document.getElementById("btn").addEventListener("click", function(){
let pass=document.getElementById("pwd");
 if(pass.type==="password"){
        pass.type="text";
        this.textContent="Hide";
    }else{
        pass.type="password";
        this.textContent="Show"
    }
}
);