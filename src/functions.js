
export function validarAnimal(animal, listaAnimais) {
    animal = animal.toUpperCase();
    //verificar se o animal inserido esta na lista de animais
    let animalValido = listaAnimais.some(a => a.animal === animal);

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

export function validarQuantidade(animal, quantidade) {
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

/*
export function validarRecinto(animal, quantidade, recintos, listaAnimais) {

    //identificar o indice do animal inserido
    let indiceAnimal = listaAnimais.findIndex(a => a.animal === animal);
    //descobriundo o tamanho do animal
    let tamanhoAnimal = listaAnimais[indiceAnimal].tamanho;
    //tamanho do animal * quantidade/ e se ha espaco no recinto
    let espacoOcupado = tamanhoAnimal * quantidade;
    //descobrir se ha espaco no recinto para o animal inserido
}
    */