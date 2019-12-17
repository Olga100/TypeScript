import {ReferenceItem} from './reference-item';
import {positiveInteger} from './decorator';

export default class Encyclopedia3 extends ReferenceItem {
    private _copies: number;

    get copies(): number {
        return this._copies;
    }
    @positiveInteger
    set copies(value: number) {
        this._copies = value;
    }

    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }
    printItem(){
        super.printItem();
        console.log(`Edition: ${this.edition}(${this.year})`)
    }
    printCitation() :void {
        console.log(`${this.title} - ${this.year}`);
    }
}
