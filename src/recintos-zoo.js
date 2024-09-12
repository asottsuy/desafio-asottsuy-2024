import { imprimirRecintosViaveis } from "./functions.js";
import { validarAnimal, validarQuantidade, validarRecinto, retornarErroRecinto } from "./functions-validacao.js";

class RecintosZoo {
    constructor() {
        this.recintos = [
            { nome: 'savana', tamanho_total: 10, animais_existentes: { MACACO: 3 } },
            { nome: 'floresta', tamanho_total: 5, animais_existentes: {} },
            { nome: 'savana e rio', tamanho_total: 7, animais_existentes: { GAZELA: 1 } },
            { nome: 'rio', tamanho_total: 8, animais_existentes: {} },
            { nome: 'savana', tamanho_total: 9, animais_existentes: { LEAO: 1 } },
        ];

        this.listaAnimais = [
            { animal: "LEAO", tamanho: 3 },
            { animal: "LEOPARDO", tamanho: 2 },
            { animal: "CROCODILO", tamanho: 3 },
            { animal: "MACACO", tamanho: 1 },
            { animal: "GAZELA", tamanho: 2 },
            { animal: "HIPOPOTAMO", tamanho: 4 },
        ];
    }

    analisaRecintos(animal, quantidade) {
        //1 validacao
        const resultadoAnimal = validarAnimal(animal, this.listaAnimais);
        if (resultadoAnimal.erro) {
            console.log(resultadoAnimal.erro);
            return resultadoAnimal;
        }

        //2 validacao
        const resultadoQuantidade = validarQuantidade(quantidade);
        if (resultadoQuantidade.erro) {
            console.log(resultadoQuantidade.erro);
            return resultadoQuantidade;
        }

        //3 validacao
        const resultadoRecinto = validarRecinto(animal, quantidade);
        if (resultadoRecinto.erro) {
            console.log(resultadoRecinto.erro);
            return resultadoRecinto;
        }

        //4 e 5 validacao
        let recintosViaveis = imprimirRecintosViaveis(animal, quantidade, this.recintos, this.listaAnimais);
        return { erro: false, recintosViaveis: recintosViaveis.recintosViaveis };
    };
}

const zoo = new RecintosZoo(); //instanciando RecintosZoo() em zoo
const animal1 = zoo.analisaRecintos("GAZELA", 1); //chamando o metodo analisarecintos() passando os parametros
console.log(animal1.recintosViaveis); //printo no console a saida do metodo anterior


export { RecintosZoo as RecintosZoo };