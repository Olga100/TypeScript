import * as Interfaces from '../interfaces';
import {timeout} from "./decorator";

export abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //   console.log(`Creating a new ReferenceItem...`);
    //
    //   this.title = newTitle;
    //   this.year = newYear;
    // }

    get publisher(): string{
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(public title: string, protected year: number){
        console.log("Creating a new Refff...")
    }

    @timeout(2000)
    printItem(): void{
        console.log(`${this.title} was published ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    private _publisher: string;

    static department: string = 'Literature';

    abstract printCitation(); void;
}
