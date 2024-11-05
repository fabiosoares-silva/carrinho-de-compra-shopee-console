/*quais ações meu carrinho pode fazer?

 - ✅ adicionar item no carrinho
 - deletar item do carrimho
 - remover item 
 - totalizador do carrinho (calcular o total)

*/

async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

//remover um item - diminui um item
async function removeItem(userCart, item) {
    //1. encontrar o índice do item
    const indexFound = userCart.findIndex((produto) => produto.name === item.name);
    //2. caso não encontre o item
    if (indexFound == -1) {
        console.log('Item não encontrado🙁');
        return;
    }
    //3. se item > 1 subtrair um item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }
    //4. se item for = 1, deletar o item
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log('Total do carrinho de compras Shopee');
    console.log(`\n🛒Total: R$ ${result}`);
}

async function displayCart(userCart) {
    console.log('Lista do Carrinho de compras da Shopee:');
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | Quantidade - ${item.quantity} | Subtotal ${item.subtotal()}`);
    });
}

export {addItem, deleteItem, removeItem, calculateTotal, displayCart};
