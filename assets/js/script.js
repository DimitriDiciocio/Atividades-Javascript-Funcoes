function dobro(n1, n2, n3) {
    const texto = "O dobro de "
    const texto2 = " eh:"
    return texto + n1 + texto2 + n1*2 + "\n" + texto + n2 + texto2 + n2*2 + "\n" + texto + n3 + texto2 + n3*2 + "\n"
}

function elevarNumeros(X, Z) {
    resposta = X + " elevado a " + Z + " = " + X**Z
    return resposta
}

function concatenarPedacoDeNumero(n1, n2) {
    n1 = String(parseInt(n1/10))
    n2 = String(parseInt(n2%10))
    n3 = n1 + n2
    return n3
}

function notaFinal(N1,N2,N3,letra) {
    let media = 0
    letra = letra.toUpperCase()
    if (letra == "A") {
        media = (N1 + N2 + N3)/3
    } else if (letra == "P") {
        media = (N1*5 + N2*3 + N3*2)/10
    }
    return media
}

function calculadora(n1, n2, simbolo) {
    let operacao = 0
    if( simbolo == "+") {
        operacao = n1 + n2
    } else if (simbolo == "-") {
        operacao = n1 - n2
    } else if (simbolo == "*") {
        operacao = n1 * n2
    } else if (simbolo == "/") {
        operacao = n1 / n2
    }
    return operacao
}

function faltaMuitoParaOFimDoAno(dias) {
    const texto1 = "Falta muito para o natal"
    const texto2 = "Oba, quase férias!"
    if (dias < 30) {
        alert(texto2)
    } else if (dias >= 30) {
        alert(texto1)
    }
}

function acabou() {
    alert("Ufa! Este foi o ultimo exercicio! Acabei =D")
}

function trolei() {
    alert("Fui Trolado :(")
}

function quantidadeDeDigitos(num) {
    let casaDecimal = 1
    let qtdDigitos = 0
    while (true) {
        if (num >= casaDecimal) {
            casaDecimal *= 10
            qtdDigitos += 1 
        } else {
            break
        }
    }
    alert(qtdDigitos)
}

function inverterNumero(num) {
    let numero = String(num)
    let invertido = []
    for (let i of numero) {
        invertido.push(i)
    }
    invertido.reverse()
    let texto = ""
    for (i of invertido) {
        texto += i
    }
    alert(texto)
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function jogoDeCraps() {
    let dado = getRndInteger(2,12)
    let dados = []
    dados.push(dado)
    if (dados[0] == 11 || dados[0] == 7) {
        alert("Você é natural e ganhou, seu numero foi " + dados[0])
        return 0
    } else if (dados[0] == 2 || dados[0] == 3 || dados[0] == 12) {
        alert("Craps, Você perdeu! Seu numero foi " + dados[0])
        return 0
    } else {
        alert("Seu PONTO é " + dados[0])
    }
    while (true) {
        let queres = prompt("Deseja Continuar ?")
        if (queres.toUpperCase() == "N" ) {
            alert("Ok, O jogo acabou")
            break
        }
        dado = getRndInteger(2,12)
        alert("Seu numero foi " + dado)
        if (dado == dados[0]) {
            alert("Você ganhou!")
            break
        }
    }
}

function dataComMesPorExtenso(data) {
    data = data+"/"
    let classificacoes = ["dia", "mes", "ano"]
    let n = 0
    let parteDaData = ""
    for (let i of data) {
        if (i == "/") {
            classificacoes[n] = parteDaData
            n += 1
            parteDaData = ""
            continue
        } else {
            parteDaData += i
        }
    }
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
    classificacoes[1] = meses[classificacoes[1] - 1]
    let texto = ""
    for (let i in classificacoes) {
        if (i != 2) {
            texto += classificacoes[i] + " de "
        } else {
            texto += classificacoes[i]
        }
    }
    classificacoes[1] = meses.indexOf(classificacoes[1]) + 1
    if (classificacoes[0] > 31) {
        texto = "Data Invalida"
    } else if (!(classificacoes[1] == 0 || classificacoes[1] == 2 || classificacoes[1] == 4 || classificacoes[1] == 6 || classificacoes[1] == 7 || classificacoes[1] == 9 || classificacoes[1] == 11) && (classificacoes[0] > 30)) {
        texto = "Data Invalida"
    } else if (classificacoes[1] == 1) {
        if (!classificacoes[2] % 4 == 0) {
            if (classificacoes[0] >= 29) {
                texto = "Data Invalida"
            }
        }
    } else if (classificacoes[1] == -1) {
        texto = "Data Invalida"
    }
    alert(texto)
}

function embaralhaPalavras(palavra) {
    palavra = palavra.toLowerCase()
    let letras = []
    let letra = 0
    let palavras = []
    for (i of palavra) {
        palavras.push(i)
    }
    while (true) {
        letra = getRndInteger(0, palavra.length)
        if (!letras.includes(palavras[letra])) {
            letras.push(palavras[letra])
        } else if (palavras.filter(x => x == palavras[letra]) > letras.filter(x => x == palavras[letra])) {
            letras.push(palavras[letra])
        }
        if (letras.length == palavras.length) {
            break
        }
    }
    let resposta = ""
    for (i of letras) {
        resposta += i
    }
    alert(resposta)
}

function bhackara(a, b, c) {
    let x1 = (-b + Math.sqrt(b**2 - 4*a*c))/2*a
    let x2 = (-b - Math.sqrt(b**2 - 4*a*c))/2*a
    return "x1: " + x1 + " x2: " + x2
}

function pitagoras(cateto1, cateto2) {
    let hipotenusa = Math.sqrt(cateto1**2 + cateto2**2)
    return hipotenusa 
}

function alegria() {
    alert("Estou muito contente em acabar esta atividade, pois vou ser contratado, visto que fiz todas elas, tal qual um trabalhador esforçado que sou!")
}