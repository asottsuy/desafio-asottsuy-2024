// 1) FUNCAO PRINCIPAL QUE ME RETORNA A STRING FINAL
export function imprimirRecintosViaveis(animal, quantidade, recintos, listaAnimais) {
    if (animal === "LEAO" || animal === "LEOPARDO" || animal === "CROCODILO") {
        let recintosViaveis = animalCarnivoro(animal, recintos); //aplico a regra dos animais carnivoros e recupero os recintos viaveis do carnivoro inserido
        let tamanhoTotalDoAnimal = getTamanhoDoAnimal(animal, quantidade, listaAnimais); //recupero o tamanho do animal

        recintosViaveis = recintosViaveis.map((recinto) => { //funcao map itera sobre os recintos e me retorna uma string de cada recinto viavel
            let tamanhoTotal = recinto.tamanho_total; //recupero o tamanho total do recinto
            let espaçoLivre = tamanhoTotal - tamanhoTotalDoAnimal;// calculo o espaco restante a partir das variaveis anteirores
            return `Recinto ${recintos.indexOf(recinto) + 1} (espaço livre: ${espaçoLivre} total: ${tamanhoTotal})`; //formato da string
        });
        return { //me retorna false,cada string dos recintos possiveis e a quantidade dos elementos da lista recintosViaveis
            erro: false,
            recintosViaveis: recintosViaveis,
            tamanhoRecintosViaveis: recintosViaveis.length
        }

    } else if (animal === "MACACO") {
        let recintosViaveis = regraMacacos(animal, quantidade, recintos); //aplicando a regra dos macacos...
        let tamanhoTotalDoAnimal = getTamanhoDoAnimal(animal, quantidade, listaAnimais);

        recintosViaveis = recintosViaveis.map((recinto) => {
            let tamanhoTotal = recinto.tamanho_total;
            let espacoLivreRecinto = regraMaisDeUmAnimalDiferente(animal, recinto); //aplico a regra dos animais diferentes caso o recinto alocado tenha um animal diferente de macaco
            let espacoOcupado = calcularEspacoOcupado(recinto, listaAnimais);
            let espaçoLivre = tamanhoTotal - tamanhoTotalDoAnimal - espacoOcupado - espacoLivreRecinto;
            if (espaçoLivre < 0) {
                return `Recinto ${recintos.indexOf(recinto) + 1} não viável...`
            }
            return `Recinto ${recintos.indexOf(recinto) + 1} (espaço livre: ${espaçoLivre} total: ${tamanhoTotal})`;
        });
        return {
            erro: false,
            recintosViaveis: recintosViaveis,
            tamanhoRecintosViaveis: recintosViaveis.length
        };

    } else if (animal === "GAZELA") {
        let recintosViaveis = regraGazela(animal, recintos); //aplicando a regra da gazela...
        let tamanhoTotalDoAnimal = getTamanhoDoAnimal(animal, quantidade, listaAnimais);

        recintosViaveis = recintosViaveis.map((recinto) => {
            let tamanhoTotal = recinto.tamanho_total;
            let espacoLivreRecinto = regraMaisDeUmAnimalDiferente(animal, recinto);//aplico a regra dos animais diferentes caso o recinto alocado tenha um animal diferente de gazela
            let espacoOcupado = calcularEspacoOcupado(recinto, listaAnimais);
            let espaçoLivre = tamanhoTotal - tamanhoTotalDoAnimal - espacoOcupado - espacoLivreRecinto;
            return `Recinto ${recintos.indexOf(recinto) + 1} (espaço livre: ${espaçoLivre} total: ${tamanhoTotal})`;
        });
        return {
            erro: false,
            recintosViaveis: recintosViaveis,
            tamanhoRecintosViaveis: recintosViaveis.length
        };

    } else if (animal === "HIPOPOTAMO") {
        let recintosViaveis = regraHipopotamo(animal, recintos); //aplicando a regra do hipopotamo...
        let tamanhoTotalDoAnimal = getTamanhoDoAnimal(animal, quantidade, listaAnimais);

        recintosViaveis = recintosViaveis.map((recinto) => {
            let tamanhoTotal = recinto.tamanho_total;
            let espacoLivreRecinto = regraMaisDeUmAnimalDiferente(animal, recinto);
            let espacoOcupado = calcularEspacoOcupado(recinto, listaAnimais);
            let espaçoLivre = tamanhoTotal - tamanhoTotalDoAnimal - espacoOcupado - espacoLivreRecinto;
            return `Recinto ${recintos.indexOf(recinto) + 1} (espaço livre: ${espaçoLivre} total: ${tamanhoTotal})`;
        });
        return {
            erro: false,
            recintosViaveis: recintosViaveis,
            tamanhoRecintosViaveis: recintosViaveis.length
        };
    }
}
//================================================FUNCOES SECUNDARIAS=================================

export function getTamanhoDoAnimal(animal, quantidade, listaAnimais) { //retorna o espaco que o animal ocuparia
    let tamanhoDoAnimal = listaAnimais.find(a => a.animal === animal).tamanho; //resgato o tamanho do animal pela listaAnimais
    let espacoOcupado = tamanhoDoAnimal * quantidade;
    return espacoOcupado;
}

export function calcularEspacoOcupado(recintos, listaAnimais) { //calcula o espaco dos animais ja existentes nos recintos
    let espacoOcupadoNoRecinto = 0;

    for (let animal in recintos.animais_existentes) { //looping para iterar sobre os animais dentro dos recintos
        let quantidade = recintos.animais_existentes[animal]; //recupero a quantidade
        let tamanhoAnimal = listaAnimais.find(a => a.animal === animal).tamanho; //recupero o tamanho do animal na listaAnimais
        espacoOcupadoNoRecinto += quantidade * tamanhoAnimal;
    }
    return espacoOcupadoNoRecinto;
}
//============================================REGRAS============================================

//1) REGRA DO ANIMAL CARNIVORO (devem habitar somente com a mesma especie)
export function animalCarnivoro(animal, recintos) {
    let recintosViaveis = [];
    if (animal === "LEAO") { // LEAO ==> savana
        recintosViaveis.push(recintos[4]);

    } else if (animal === "LEOPARDO") { //LEOPARDO ==> savana
        return retornarErroRecinto();

    } else if (animal === "CROCODILO") { //CROCODILO ==> rio
        recintosViaveis.push(recintos[3]);
    }
    return recintosViaveis;
}
//2) animal diferente coexista no mesmo recinto que outro, adicione um espaco a menos no espaco livre.
export function regraMaisDeUmAnimalDiferente(animal, recinto) {
    for (let tipoAnimal in recinto.animais_existentes) {
        if (tipoAnimal !== animal) {
            return 1;
        }
    }
    return 0;
}

//3) REGRA DOS MACACOS (so podem ser alocado caso haja mais de 1 macaco ou animais nao carnivoros, so pode ser alocado na savana ou floresta) 
export function regraMacacos(animal, quantidade, recintos) {
    let recintosViaveis = [];
    if (animal === "MACACO" && quantidade === 1) {
        recintosViaveis.push(recintos[0]);

    } else {
        recintosViaveis.push(recintos[0]);
        recintosViaveis.push(recintos[1]);
        recintosViaveis.push(recintos[2]);

    } return recintosViaveis;
}

//4) REGRA GAZELA (nao tem um limitacao especifica, so podem ser alocadas em savana)
export function regraGazela(animal, recintos) {
    let recintosViaveis = [];
    if (animal == "GAZELA") {
        recintosViaveis.push(recintos[0]);
        recintosViaveis.push(recintos[2]);
    } return recintosViaveis;
}

//5) REGRA HIPOPOTAMO (so pode coexistir com outro animal caso esteja em bioma de rio)
export function regraHipopotamo(animal, recintos) { //HIPOPOTAMO ==> savana ou rio
    let recintosViaveis = [];
    if (animal == "HIPOPOTAMO") {
        recintosViaveis.push(recintos[2]);
    } return recintosViaveis
}