import * as Interfaces from '../interfaces';
import {sealed, logger, writable, logMethod, logParameter, format} from "./decorator";

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;
    custName: string;

    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${this.custName}`)
    }

    @writable(true)
    assistFaculty() {
        console.log("Assisting faculty");
    }

    @writable(false)
    teachCommunity() {
        console.log("Teaching community");
    }
}
