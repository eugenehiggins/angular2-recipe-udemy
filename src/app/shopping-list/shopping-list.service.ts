import {Ingredient} from "../shared/ingredient";
export class ShoppingListService {
    private items: Ingredient[] = [];

    constructor() {
    }

    getItems() {
        return this.items;
    }

    addItems(items: Ingredient[]) {
        // the following line pushes an array to an array. The other way of doing this
        // would be to create a for loop and push items one at a time
        Array.prototype.push.apply(this.items, items);
    }

    addItem(item: Ingredient) {
        this.items.push(item);
    }

    editItem(oldItem: Ingredient, newItem: Ingredient) {
        this.items[this.items.indexOf(oldItem)] = newItem;
    }

    deleteItem(item: Ingredient) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}
