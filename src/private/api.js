users = 
    {
        "id": 1,
        "nome": "caynnan",
        "avatar": "https://cdn.discordapp.com/attachments/1147053390451462154/1258207231024037960/216A3DD8-5C41-4C53-AB1F-D3412C4ECE74.gif?ex=668fc60c&is=668e748c&hm=6b7950c7d541e7c136bcfe31af991b951969237dabc90d7a47dda7e142e48ba6&",
        "logado": true,
    }


function setaruser(){
    const avatar = document.getElementById("avatar").src = users.avatar;
    console.log("[+] User");
}

function verificarlogado(){
    if(users.logado === true){
        document.getElementById("logado").style.display = 'flex';
        document.getElementById("deslogado").style.display = 'none';
    }else{
        document.getElementById("logado").style.display = 'none';
        document.getElementById("deslogado").style.display = 'flex';
    }
}

setaruser();
verificarlogado();