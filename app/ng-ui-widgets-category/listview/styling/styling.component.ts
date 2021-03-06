// >> update-child-component-code
import { Component, OnInit } from "@angular/core";
import { ItemService, Item } from "../usage/usage.service";

@Component({
    moduleId: module.id,
    templateUrl: "./styling.component.html",
    styleUrls: ["./styling.component.css"]
})
export class ListViewStylingComponent implements OnInit {
    public items: Array<Item> = [];

    constructor(private _itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
// << update-child-component-code
