import {item} from '../interfaces/item';

export default class Checkout{
    itemList: Array<item> = [];

    constructor(){
        // this.itemList = itemList;
    }

    scan(x:item):void{
        console.log(`Scanning item with code: ${x.productCode}.`)
        this.itemList.push(x);
    }

    total():void{
        const initialValue = 0;
        let allPrices: Array<number> = this.itemList.map(item => item.price);
        let total = allPrices.reduce((current, previous)=> current+previous)
        console.log(`Your total is ${total}`);
        total = this.morethanthiry(total);
    }



    morethanthiry(price:number): number{
        let discounted: number = 0;
        if(price > 30){
        discounted = (price - (price *0.10));
    } 
        return discounted;
    }

    morethanthreeza(price:number): void{



    }


}