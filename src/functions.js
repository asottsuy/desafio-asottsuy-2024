/*
logica para imprimir recintos viaveis para os animais inseridos:

1) resgatar o animal que foi inserido
2) resgatar a quantidade
3) descobrir o tamanho que os aniamais ocupariam
4) aplicar as regras estabelecidas no readme
        1) Animais carnívoros devem habitar somente com a própria espécie
        2) Hipopótamo(s) só tolera(m) outras espécies estando num recinto com savana e rio
        3) Um macaco não se sente confortável sem outro animal no recinto, seja da mesma ou outra espécie
        4) Quando há mais de uma espécie no mesmo recinto, é preciso considerar 1 espaço extra ocupado
5) retornar o recinto que e possivel alocar, espaco livre e o total de espaco ocupado
6) 
*/


export function imprimirRecintosViaveis(animal, quantidade, recintos) {
    let recintosViaveis = [];
    recintosViaveis = regraAnimalCarnivoro(animal);
    return recintosViaveis;
    //tamanhoDoAnimal(animal, quantidade, recintos);
}


export function tamanhoDoAnimal(animal, quantidade, recintos) { //retorna o espaco que o animal ocuparia
    //encontrando o tamanho do animal
    let tamanhoDoAnimal = listaAnimais.find(a => a.animal === animal).tamanho;
    //saber o tamanho total dos animais
    let espacoOcupado = tamanhoDoAnimal * quantidade;
    return espacoOcupado;
}

export function ajeitarIndiceRecintos(recintos) {
    const indice = 1;
    let recintoIndice = recintos[indice - 1];
    return recintoIndice;
}




//para deixar a saida certinho, posso buscar os valores do dicionarios e atribuir para uma variavel
//depois monto um novo array do formato que o desafio pede atribuindo no lugar dos valores as variaveis








//============================================REGRAS============================================

export function regraAnimalCarnivoro(animal, recintos) { //devem habitar somente com a mesma especie
    ajeitarIndiceRecintos(recintos);

    if (animal === "LEAO") {
        //pode ser alocado em bioma de savana, logo resta, savana(4).
        recintosViaveis.push(recintos[5]); // vai adicionar na lista o recinto de indice 4
    }
    if (animal === "LEOPARDO") {
        return retornarErroRecinto();
    }
    if (animal === "CROCODILO") {
        recintosViaveis.push(recintos[4])
    }
    return {
        erro: false,
        recintosViaveis: recintosViaveis,
        recintosViaveis: recintosViaveis.length,
    }

}

export function regraHipopotamo(animal) {
    if (animal === "HIPOPOTAMO") {
        //pode ser alocado somente na floresta ou rio (caso sozinho) ou
        //na savana e savana e rio
    }
    //
}

export function regraMacacos(animal) { //macacos se sentem confortaveis em recintos com outros animais
    if (animal === "MACACO") {
        //deve se alocado em 2 ou mais obrigatoriamente
        //pode ser alocado na savana, floresta, savana e rio, e rio.
    }
    //
}

export function regraAnimaisMesmoRecinto() {//quando ha mais de uma especie dentro do mesmo recinto e preciso considerar 1 espaco extra

}




