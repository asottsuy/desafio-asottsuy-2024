//============================================FUNCOES DA 1,2 E 3 VALIDACAO.========================================

export function validarAnimal(animal, listaAnimais) { // 1) 1 VALIDACAO ('Deve rejeitar animal inválido',)
    //verificar se o animal inserido esta na lista de animais
    let animalValido = listaAnimais.some(a => a.animal === animal);

    //caso o animal nao esteja na lista vai retornar false
    if (!animalValido) {
        return {
            erro: "Animal inválido",
            recintosViaveis: false
        };
    } return {
        erro: null,
        recintosViaveis: true
    };
}

export function validarQuantidade(quantidade) { // 2) 2 VALIDACAO ('Deve rejeitar quantidade inválida')
    //a quantidade nao pode ser 0 ou menor
    if (quantidade <= 0) {
        return {
            erro: "Quantidade inválida",
            recintosViaveis: false
        };
    } return {
        erro: null,
        recintosViaveis: true
    };
}

export function validarRecinto(animal, quantidade) {// 3) 3 VALIDACAO ('Não deve encontrar recintos para 10 macacos') 
    //limitar a quantidade de animais inseridos
    if (animal === "LEAO" && quantidade > 3) {
        return retornarErroRecinto();
    }
    if (animal === "LEOPARDO" && quantidade >= 1) {
        return retornarErroRecinto();
    }
    if (animal === "CROCODILO" && quantidade > 2) {
        return retornarErroRecinto();
    }
    if (animal === "MACACO" && quantidade > 7) {
        return retornarErroRecinto();
    }
    if (animal === "GAZELA" && quantidade > 3) {
        return retornarErroRecinto();
    }
    if (animal === "HIPOPOTAMO" && quantidade > 1) {
        return retornarErroRecinto();
    }
    return {
        erro: null,
        recintosViaveis: true,
    };
}

// ===================== FUNCAO DE ERRO ==================
export function retornarErroRecinto() {
    return {
        erro: "Não há recinto viável",
        recintosViaveis: false,
    };
}
