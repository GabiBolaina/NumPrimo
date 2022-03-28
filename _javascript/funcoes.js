//window.alert('Seja bem vind@! Lembre-se que este é um algoritmo muito complexo, números altos demoraram a ser computados e poderão causar travamentos do sistema.')

function verificarNum() {
    
    //Escolha do usuario
    var escolhaUser = document.getElementById("cNumUser").value;
    document.getElementById("escolhaUser").innerHTML = `Você escolheu o número: ${escolhaUser}`;

    //Cálculos
    var resultadoFinal = "computando"
    var count = 0;
    var restoDiv = 1;
    
    if(escolhaUser == ''){
        resultadoFinal = "Não foi feita a escolha!"
    }else if(escolhaUser == 0 || escolhaUser == 1){
        resultadoFinal = "0 e 1 são considerados números neutros"
    }else{
        for(var i = 1; i <= escolhaUser; i++){
            restoDiv = escolhaUser%i
            if(restoDiv == 0){
            count ++}
            //document.write(`i ${i} count ${count} resto div ${restoDiv} <br/>`)
            if(count >= 3){
                break;
            }
        }
        if(count == 2){
            resultadoFinal = `O número ${escolhaUser} é primo!`
        }else{
            resultadoFinal = `O número ${escolhaUser} não é primo!`
        }
    }

    //Resultado
    document.getElementById("cResultado").innerHTML = `${resultadoFinal}`  
    }


    