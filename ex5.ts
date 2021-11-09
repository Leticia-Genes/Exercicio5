class Palavra {
    /**
     * Retorna a contagem do número de vogais da palavra recebida
     * @param palavra - A string que será usada na contagem
     */
    static contarVogais(palavra: string) : number {
        const vogais = palavra.match(/[aeiouàáéíóúâêôãõ]/gi);

        return vogais === null ? 0 : vogais.length;
    }

    //pega a palavra recebida via input e mostra o resultado do número de vogais no HTML
    /**
     * Mostra o número de vogais da palavra recebida via input em novo parágrafo da página HTML
     */
    static mostrarResultado() : void {
        let palavra: string = (<HTMLSelectElement>document.getElementById('palavra')).value;

        document.body.innerHTML = `<p>Quantidade de vogais da palavra <strong>${palavra}</strong>: ${Palavra.contarVogais(palavra)}</p>`;
    }
}