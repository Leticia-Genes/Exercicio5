var Palavra = /** @class */ (function () {
    function Palavra() {
    }
    //conta o número de vogais da palavra recebida
    Palavra.contarVogais = function (palavra) {
        var vogais = palavra.match(/[aeiou]/gi);
        return vogais == null ? 0 : vogais.length;
    };
    //pega a palavra recebida via input e mostra o resultado do número de vogais no HTML
    Palavra.mostrarResultado = function () {
        var palavra = document.getElementById('palavra').value;
        document.body.innerHTML = "<p>Quantidade de vogais da palavra <strong>" + palavra + "</strong>: " + Palavra.contarVogais(palavra) + "</p>";
    };
    return Palavra;
}());
//# sourceMappingURL=ex5.js.map