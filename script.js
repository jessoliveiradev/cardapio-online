function addMoreItems() {
    document.getElementById('cart').style.display = 'block';
    document.getElementById('checkout').style.display = 'none';
}

function checkout() {
    const totalPrice = document.getElementById('total-price').innerText;
    if (parseFloat(totalPrice) === 0) {
        alert("Adicione itens ao carrinho antes de finalizar o pedido.");
        return;
    }

    document.getElementById('checkout').style.display = 'block';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('menu').style.display = 'none';

    const summary = document.getElementById('order-summary');
    const selectedItems = document.getElementById('selected-items').innerHTML;

    summary.innerHTML = `
        <h4>Itens Selecionados:</h4>
        ${selectedItems}
        <h4>Total: R$${totalPrice}</h4>
    `;
}

function addToCart() {
    const selectedItems = document.getElementById('selected-items');
    const totalPriceElem = document.getElementById('total-price');
    let total = parseFloat(totalPriceElem.innerText);

    selectedItems.innerHTML = '';

    const items = [
        { id: 'burger1', label: 'Hambúrguer Clássico', price: 15.00, quantity: document.getElementById('quant_burger1').value },
        { id: 'burger2', label: 'Hambúrguer Especial', price: 20.00, quantity: document.getElementById('quant_burger2').value },
        { id: 'salgado1', label: 'Coxinha', price: 8.00, quantity: document.getElementById('quant_salgado1').value },
        { id: 'bebida1', label: 'Refrigerante', price: 5.00, quantity: document.getElementById('quant_bebida1').value }
    ];

    total = 0;

    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        if (checkbox.checked) {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.innerText = `${item.quantity}x ${item.label} - R$${itemTotal.toFixed(2)}`;
            selectedItems.appendChild(cartItem);
        }
    });

    totalPriceElem.innerText = total.toFixed(2);
}