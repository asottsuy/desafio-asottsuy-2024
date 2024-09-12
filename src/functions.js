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


export function imprimirRecintosViaveis(animal, quantidade, recintos, listaAnimais) {
    if (animal === "LEAO" || animal === "LEOPARDO" || animal === "CROCODILO") {
        let recintosViaveis = animalCarnivoro(animal, recintos);
        let tamanhoTotalDoAnimal = getTamanhoDoAnimal(animal, quantidade, listaAnimais);

        recintosViaveis = recintosViaveis.map((recinto, index) => {
            let tamanhoTotal = recinto.tamanho_total;
            let espaçoLivre = tamanhoTotal - tamanhoTotalDoAnimal;
            return `Recinto ${recintos.indexOf(recinto) + 1} (espaço livre: ${espaçoLivre} total: ${tamanhoTotal})`;
        });
        return {
            erro: false,
            recintosViaveis: recintosViaveis,
            tamanhoRecintosViaveis: recintosViaveis.length
        };



    } else if (animal === "MACACO") {
        let recintosViaveis = regraMacacos(animal, quantidade, recintos); //so podem ser alocado caso haja mais de 1 macaco ou animais nao carnivoros
        let tamanhoTotalDoAnimal = getTamanhoDoAnimal(animal, quantidade, listaAnimais);

        recintosViaveis = recintosViaveis.map((recinto, index) => { //cria um novo array retornando a string no formato pedido
            let tamanhoTotal = recinto.tamanho_total;
            let espacoLivreRecinto = regraMaisDeUmAnimalDiferente(animal, recinto);
            let espacoOcupado = calcularEspacoOcupado(recinto, listaAnimais);
            let espaçoLivre = tamanhoTotal - tamanhoTotalDoAnimal - espacoOcupado - espacoLivreRecinto;
            console.log(`Recinto: ${recinto.nome}, Tamanho Total: ${tamanhoTotal}, Espaço Ocupado: ${espacoOcupado}, Tamanho Total do Animal: ${tamanhoTotalDoAnimal}, Espaço Livre: ${espaçoLivre}`);
            return `Recinto ${recintos.indexOf(recinto) + 1} (espaço livre: ${espaçoLivre} total: ${tamanhoTotal})`;
        });
        return {
            erro: false,
            recintosViaveis: recintosViaveis,
            tamanhoRecintosViaveis: recintosViaveis.length
        };

    } else if (animal === "GAZELA") {
        let recintosViaveis = regraGazela(); //so pode ser alocado em recintos sem animais carnivoros
        recintosViaveis += regraMaisDeUmAnimalDiferente();// caso alocado na savana com os macacos deve considerar 1 espaco ocupado a mais
        return {
            recintosViaveis
        };

    } else if (animal === "HIPOPOTAMO") { //rio ou savana e rio
        let recintosViaveis = regraHipopotamo();
        return {
            recintosViaveis
        };
    }
}

export function getTamanhoDoAnimal(animal, quantidade, listaAnimais) { //retorna o espaco que o animal ocuparia
    //encontrando o tamanho do animal
    let tamanhoDoAnimal = listaAnimais.find(a => a.animal === animal).tamanho;
    //saber o tamanho total dos animais
    let espacoOcupado = tamanhoDoAnimal * quantidade;
    return espacoOcupado;
}

export function calcularEspacoOcupado(recintos, listaAnimais) {
    let espacoOcupado = 0;

    for (let animal in recintos.animais_existentes) {
        let quantidade = recintos.animais_existentes[animal];
        let tamanhoAnimal = listaAnimais.find(a => a.animal === animal).tamanho;
        espacoOcupado += quantidade * tamanhoAnimal;
    }
    return espacoOcupado;
}






//para deixar a saida certinho, posso buscar os valores do dicionarios e atribuir para uma variavel
//depois monto um novo array do formato que o desafio pede atribuindo no lugar dos valores as variaveis

//============================================REGRAS============================================

export function animalCarnivoro(animal, recintos) { //devem habitar somente com a mesma especie
    let recintosViaveis = [];
    if (animal === "LEAO") {
        //pode ser alocado em bioma de savana, logo resta, savana(4).
        recintosViaveis.push(recintos[4]); // vai adicionar na lista o recinto de indice 4

    } else if (animal === "LEOPARDO") {
        return retornarErroRecinto();

    } else if (animal === "CROCODILO") {
        recintosViaveis.push(recintos[3]);
    }
    return recintosViaveis;
}


export function regraMaisDeUmAnimalDiferente(animal, recinto) {
    //preciso criar uma logica onde quando um animal diferente coexista no mesmo recinto que outro, adicione um espaco a menos no espaco livre.
    //1) identificar se vai ter masi de 1 animal
    //2) fazer o ajuste subtraindo 1 do espaco livre
    for (let tipoAnimal in recinto.animais_existentes) {
        if (tipoAnimal !== animal) {
            return 1;
        }
    }
    return 0;
}

export function regraMacacos(animal, quantidade, recintos) {
    //so podem ser alocado caso haja mais de 1 macaco ou animais nao carnivoros
    let recintosViaveis = [];
    if (animal === "MACACO" && quantidade === 1) {
        //so pode ser inserido na savana1
        recintosViaveis.push(recintos[0]);
    } else {
        recintosViaveis.push(recintos[0]);
        recintosViaveis.push(recintos[1]);
        recintosViaveis.push(recintos[2]);
    } return recintosViaveis;
}
