import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];
const myWishList = [];
console.log('\nBem vindo(o) no carrinho de compras da Shopee!😀\n');

const item1 = await createItem('Hotwheels fusca', 55.5, 1);
const item2 = await createItem('Hotwheels passat', 19.5, 3);

//itens adicionados
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item1);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart, item2);

//itens deletados
//await cartService.deleteItem(myCart, item2.name);

await cartService.calculateTotal(myCart);
