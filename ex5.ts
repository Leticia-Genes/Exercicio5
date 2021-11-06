class Palavra {
    //conta o número de vogais da palavra recebida
    static contarVogais(palavra: string) : number {
        let vogais = palavra.match(/[aeiou]/gi);

        return vogais == null ? 0 : vogais.length;
    }

    //pega a palavra recebida via input e mostra o resultado do número de vogais no HTML
    static mostrarResultado() : void {
        let palavra: string = (<HTMLSelectElement>document.getElementById('palavra')).value;

        document.body.innerHTML = `<p>Quantidade de vogais da palavra <strong>${palavra}</strong>: ${Palavra.contarVogais(palavra)}</p>`;
    }
}