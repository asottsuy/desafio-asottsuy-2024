import { imprimirRecintos } from "./functions.js";
import { validarAnimal, validarQuantidade, validarRecinto } from "./functions-validacao.js";

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
    //metodo analisar recintos
    analisaRecintos(animal, quantidade) {
        const recintoEscolhido = imprimirRecintos(this.recintos);

        //1 validacao
        const resultadoAnimal = validarAnimal(animal, this.listaAnimais);
        if (resultadoAnimal.erro) { return resultadoAnimal; }

        //2 validacao
        const resultadoQuantidade = validarQuantidade(quantidade);
        if (resultadoQuantidade.erro) { return resultadoQuantidade; }

        //3 validacao
        const resultadoRecinto = validarRecinto(animal, quantidade);
        if (resultadoRecinto.erro) { return resultadoRecinto; }

        return { erro: null, recintosViaveis: true };
    };
}

const zoo = new RecintosZoo();
const animal1 = zoo.analisaRecintos("MACACO", 3);
console.log(animal1);


export { RecintosZoo as RecintosZoo };


//1) comecar pela logica dos testes
//2) depois de concluir os testes preciso criar as regras para o programa indicar os recintos possiveis
//3) organizar o programa.
//4) testar tudo denovo para ver se nao ha erros
//5) criar repositorio no github e fazer o push

//no momento que o animal e a quantidade forem inseridos, deve aparecer no console todos os recintos possiveis para o animal escolhido.
//a lista deve indicar o espaco livre que restaria apos a inclusao do animal
//entao, o programa deve apenas simular a cada animal inserido, qual recinto deve ser alocado. 
//Indicando qual recinto e possivel coloca-lo