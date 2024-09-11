
export function validarAnimal(animal, listaAnimais) {
    animal = animal.toUpperCase();
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

export function validarQuantidade(quantidade) {
    //a quantidade nao pode ser 0
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



export function retornarErroRecinto() { //funcao para retornar erro dos recintos nao viaveis
    return {
        erro: "Não há recinto viável",
        recintosViaveis: false,
    };
}

export function validarRecinto(animal, quantidade) {
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
    if (animal === "MACACO" && quantidade > 9) {
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


