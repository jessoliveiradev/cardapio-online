function addMoreItems() {
    console.log('oiii');
    document.getElementById('cart').style.display = 'block';
    document.getElementById('checkout').style.display = 'none';
}

function checkout() {
    document.getElementById('checkout').style.display = 'block';
    document.getElementById('cart').style.display = 'none';

    const summary = document.getElementById('order-summary');
    const selectedItems = document.getElementById('selected-items').innerHTML;
    const totalPrice = document.getElementById('total-price').innerText;

    summary.innerHTML = `
        <h4>Itens Selecionados:</h4>
        ${selectedItems}
        <h4>Total: R$${totalPrice}</h4>
    `;
}