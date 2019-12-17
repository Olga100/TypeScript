import {Book, LibMgrCallback} from './interfaces';                          //перенести все функции из апп.тс
import {Category} from "./enums";
import { BookOrUndefined, BookProperties} from './types';



export function getAllBooks() {
    const books = <const>[
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript, id:1},
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript, id:2 },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.Css, id:3 },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript, id:4 }
    ];

    return books;
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books  = getAllBooks();
    const {title, author} = books[index];

    return [title, author];
}
export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

export function getBookByID(id: number): any {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);
    if(age) {
        console.log(`Customer age: ${age}`);
    }
    if(city) {
        console.log(`Customer age: ${city}`);
    }
}

export function getBookTitleByCategory1(Category = "JavaScript"): Array<string>{
    const books = getAllBooks();
    console.log(`Getting books in category ${Category[Category]}`);
    const titles: string[] = [];

    for(const book of books) {
        const bookAsAny = book as any;

        if(bookAsAny.category === Category ) {
            titles.push(bookAsAny.title)
        }
    }
    return titles;

}

export function createCustomerId(name: string, id: number): string {
    return `${name}${id}`;
}

export function logFirstAvailable(books: any): void {
    const numberOfBooks: number = books.length;
    let title: string;

    for(const book of books) {
        if((book).available) {
            title = book.title;
            break;
        }
    }
    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available Book: ${title}`);
}

export function getBookTitleByCategory(category: Category): Array<string>{
    const books = getAllBooks();
    console.log(`Getting books in category ${Category[category]}`);
    const titles: string[] = [];

    for(const book of books) {
        const bookAsAny = book as any;

        if(bookAsAny.category === category ) {
            titles.push(bookAsAny.title)
        }
    }
    return titles;

}

export function logBookTitles(titles: string[]): void {
    for (const title of titles) {
        console.log(title);
    }
}

export function getBookByID2(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function logFirstAvailable2(books: readonly any[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;
let title: string;

for(const book of books) {
    if((book).available) {
        title = book.title;
        break;
    }
}
console.log(`Total Books: ${numberOfBooks}`);
console.log(`First Available Book: ${title}`);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Checking out books for ${customer}`);

    const titles: string[] = [];

    for(const id of bookIDs) {
        const book = getBookByID(id);
        if(book && book.available) {
            titles.push(book.title);
        }
    }
    return titles;
}
export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];

export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if(args.length === 0) {
        return [];
    }
    else if(args.length === 1) {
        const arg = args[0];

        if(typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        }
        else if(typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    }
    else if (args.length === 2) {
        const id = args[0];
        const available = args[1];

        if(typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getBookProp(book: Book, prop: BookProperties): any {
    if(typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }
    return book[prop];
}

export function getAllBooks22(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id:1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id:2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript  },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.Css },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript}
    ];

    return books;
}

export function getBookByID22(id: number): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBookTitlesByCategory(category: Category, callback: LibMgrCallback) {
setTimeout(() => {
    try {
        const titles = getBookTitleByCategory(category);
        if(titles.length > 0) {
            callback(null, titles);
        }
        else {
            throw new Error("No books Found");
        }
    }
    catch (error) {
        callback(error, null);
    }
}, 2000)
}

export function LogCategorySearch(err: Error, titles: string[]): void {
    if(err) {
        console.log(`Error message: ${err.message}`);
    }
    else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(()=>{
            const titles = getBookTitleByCategory(category);
            if(titles.length > 0) {
                resolve(titles);
            } else  {
                reject("no books found")
            }
        }, 2000)
    });
    return p;
}

export async function logSearchResults(category: Category): Promise<any> {
    const titles = await getBooksByCategoryPromise(category);
    console.log(titles);
}
