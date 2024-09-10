/*export function validarTamanho(animal, quantidade, recintos, listaAnimais) {
    //1)descobrir o tamanho do animal inserido, pois cada animal tem um tamanho especifico
    //2)caso o tamanho ultrapassar o espacototal deve retornar erro

    //encontrando o tamanho do animal
    const tamanhoDoAnimal = listaAnimais.find(a => a.animal === animal).tamanho;

    //saber o tamanho total dos animais
    const espacoOcupado = tamanhoDoAnimal * quantidade;

    //saber os recintos que suportam a quantidade de animais
    const tamanhoRecinto = recintos.find().tamanho_total;
}
