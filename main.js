function calcularDesconto() {
    let compra = parseFloat(document.getElementById('valorCompra').value) || 0;
    let desconto = 0;

    if (compra > 500) {
        desconto = compra * 0.1;
    } else if (compra > 100) {
        desconto = compra * 0.05;
    }

    let compraComDesconto = compra - desconto;

    document.getElementById('resCompra').innerText = 'R$ ' + compra.toFixed(2);
    document.getElementById('resDesconto').innerText = 'R$ ' + desconto.toFixed(2);
    document.getElementById('resFinal').innerText = 'R$ ' + compraComDesconto.toFixed(2);
}