        //alert("tudo bem Daniel?");

        var hora = new Date().getHours();
        var saudacao
        if( hora < 12){
            saudacao = "Bom dia";
        }else if(hora < 18){
            saudacao = "Boa Tarde";
        }else{
            saudacao = "Boa Noite";
        }

        document.getElementById("mensagem").innerHTML = saudacao;