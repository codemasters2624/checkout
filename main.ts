import Checkout from './checkout';
import {items} from './mockItems';


let checkout = new Checkout();

for(let x=0; x<items.length; x++)
checkout.scan(items[x])

checkout.total();
