
import {Ingredient} from "../shared/ingredient";
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    // the following line pushes an array to an array. The other way of doing this
    // would be to create a for loop and push items one at a time
    Array.prototype.push.apply(this.items, items);
  }

}
