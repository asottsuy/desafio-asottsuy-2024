import { validarAnimal, validarQuantidade } from "./functions";

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
        ]

    }

    analisaRecintos(animal, quantidade) {
        return validarAnimal(animal, this.listaAnimais);
        return validarQuantidade(animal, quantidade);
    }
}














export { RecintosZoo as RecintosZoo };
