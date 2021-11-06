let tela = document.getElementById("tela")

let del = () => {
    tela.value = tela.value.slice(0, -1);
}

let numero = (n) => {
    tela.value += n;   
}

let limpar = () => {
    tela.value = " ";
}

let porcentagem = () => {
    tela.value /= 100; 
}

let raiz = () => {
    tela.value = Math.sqrt(tela.value);
}
let resultado = () => {
    try {
        tela.value = eval(tela.value);
    }
    catch(err)
    {
        alert("Não foi possível realizar a operação!")
    }
}
