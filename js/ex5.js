var Palavra = /** @class */ (function () {
    function Palavra() {
    }
    /**
     * Retorna a contagem do número de vogais da palavra recebida
     * @param palavra - A string que será usada na contagem
     */
    Palavra.contarVogais = function (palavra) {
        var vogais = palavra.match(/[aeiouàáéíóúâêôãõ]/gi);
        return vogais === null ? 0 : vogais.length;
    };
    //pega a palavra recebida via input e mostra o resultado do número de vogais no HTML
    /**
     * Mostra o número de vogais da palavra recebida via input em novo parágrafo da página HTML
     */
    Palavra.mostrarResultado = function () {
        var palavra = document.getElementById('palavra').value;
        document.body.innerHTML = "<p>Quantidade de vogais da palavra <strong>" + palavra + "</strong>: " + Palavra.contarVogais(palavra) + "</p>";
    };
    return Palavra;
}());
//# sourceMappingURL=ex5.js.map