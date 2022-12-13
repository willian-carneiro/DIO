const tratarNumero = (numero: number) => {
    const arrNumero = numero.toString().split("").reverse()
    const arrNumeroFinal = []
    for (let i = 0; i < arrNumero.length; i++) {
        if (i % 3 === 0) {
            arrNumeroFinal.push(".")
            arrNumeroFinal.push(arrNumero[i])
        } else {
            arrNumeroFinal.push(arrNumero[i])
        }
    }
    const numeroFinal = arrNumeroFinal.reverse().join("").slice(0, -1)
    return numeroFinal;
}

export default tratarNumero;