function coletarDados() {
    const alturas = [];
    const generos = [];
    
    for (let i = 0; i < 15; i++) {
        while (true) {
            const alturaStr = prompt(`Digite a altura da pessoa ${i + 1} (em metros):`);
            const altura = parseFloat(alturaStr);
            if (!isNaN(altura)) {
                alturas.push(altura);
                break;
            } else {
                alert("Altura inválida. Digite uma altura válida.");
            }
        }

        let genero = prompt(`Digite o gênero da pessoa ${i + 1} (M/F):`).toUpperCase();
        while (genero !== 'M' && genero !== 'F') {
            genero = prompt("Gênero inválido. Digite M para Masculino ou F para Feminino:").toUpperCase();
        }
        generos.push(genero);
    }
    
    return { alturas, generos };
}

function analisarDados(alturas, generos) {
    const maiorAltura = Math.max(...alturas);
    const menorAltura = Math.min(...alturas);

    let alturaHomens = 0;
    const numHomens = generos.filter(g => g === 'M').length;
    const numMulheres = generos.filter(g => g === 'F').length;

    for (let i = 0; i < alturas.length; i++) {
        if (generos[i] === 'M') {
            alturaHomens += alturas[i];
        }
    }

    const mediaHomens = numHomens > 0 ? alturaHomens / numHomens : 0;

    console.log("A maior altura é:", maiorAltura, "metros.");
    console.log("A menor altura é:", menorAltura, "metros.");
    console.log("A média de altura dos homens é:", mediaHomens, "metros.");
    console.log("O número de mulheres é:", numMulheres);
}

// Coletando os dados
const { alturas, generos } = coletarDados();

// Analisando os dados
analisarDados(alturas, generos);
