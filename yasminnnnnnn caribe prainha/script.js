function logar()
{

    var login = document.getElementById("login").value; 
    var senha = document.getElementById("senha").value;
    
    if(login == "caribe" && senha == "admin22"){
        alert("Login realizado com sucesso!");
        location.href="index.html";
    }else{
        alert("Usuário ou senha incorretos!");
    }
}