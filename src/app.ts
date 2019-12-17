// import {Profiler} from "inspector";
// import FunctionCoverage = module

import {RefBook, Shelf, UniversityLibrarian} from './class';
import {BookRequiredFields, PersonBook, UpdatedBook} from './types';
import {Category} from "./enums";
import {Author, Book, Librarian, Logger, Magazine} from './interfaces';
import {
  checkoutBooks,
  createCustomer,
  createCustomerId,
  getAllBooks,
  getBookAuthorByIndex,
  getBookByID,
  getBookProp,
  getBookTitleByCategory,
  getBookTitleByCategory1,
  logBookTitles,
  logFirstAvailable,
  logFirstAvailable2,
  logSearchResults,
  printBook,
  showHello,
  getBookTitlesByCategory,
  LogCategorySearch,
  getBooksByCategoryPromise
} from './functions';
import Encyclopedia3 from "./class/encyclopedia";


showHello('greeting', 'TypeScript');


//task 01/02
logFirstAvailable(getAllBooks());

const titles = getBookTitleByCategory(Category.JavaScript);
logBookTitles(titles);


//01/08
const result =getBookAuthorByIndex(1);
console.log(result);

//01/09
/*function calcTotalPages(): bigint {                                                            //esnext в tsconfig
  let data = <const>[
      { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
      { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
      { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];


    let result = data.reduce((acc: bigint, obj: any)=> {
      return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);

    return result;
}

console.log(calcTotalPages());*/


//2Lecture//////////////
//03/01

const titles1 =  getBookTitleByCategory(Category.JavaScript);
console.log("titles1 " + titles1);
titles1.forEach(title => console.log(title));

const book = getBookByID(2);
console.log(book);

//03/02

let myId: string = createCustomerId('Ann', 10);
console.log(myId);

//03/03

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id}${name}`;

idGenerator = createCustomerId;
myId = idGenerator('Ann', 10);
console.log(myId);

//03/03/03


createCustomer('Ann');
createCustomer('Ann', 12);
createCustomer('Ann', 20, 'Dnipro');



const titles2 = getBookTitleByCategory1();
console.log(titles2);


logFirstAvailable2(titles);
logFirstAvailable2();

///03/04


// 03//03/05

const myBooks: string[] = checkoutBooks('Anna', 1, 2, 4);
console.log(myBooks);

//03/04



//task03/04

// const checkedOutBooks = getTitles(true);
// console.log(checkedOutBooks);
//
// function assertStringValue(value: any ): asserts  value is string {                                           //new functionality don`t reproduce
//     if(typeof value !== 'string') {
//       throw new Error('value should have been a string');
//     }
// }
// //03/05
//  function bookTitleTransform(title: any) {
//    assertStringValue(title);
//
//    return [...title].reverse().join();
//  }
//
//  const title11 = bookTitleTransform(getAllBooks()[0].title);
//  console.log(title11);
//
//  const title12 = bookTitleTransform(10);

//Interfaces:





//04.01

const myBook: Book = {
  id: 5,
  title: 'Colors, Backgrounds',
  author: 'Eric A',
  available: true,
  category: Category.Css,
  //year: 2015,
  //copies: 3
  pages: 200,
  markDamaged: (reason:string) => console.log(`Damaged: ${reason}`)
};

printBook(myBook);

myBook.markDamaged('missing back cover');

//task 04.02



let logDamage: Logger;                    //DamageLogger;

 logDamage = (reason: string) => console.log(`Damage logger: ${reason} `);
 logDamage('some stains');

 //04/03



const favoriteAuthor: Author = {
  email: "Anna@gmail.com",
  name: "Anna",
  numBooksPublished: 10
};

const favoriteLibrarian: Librarian = {
  name: "boris",
  email: "boris@gmail.com",
  department: "Fantasy",
  assistCustomer: (name: string) => console.log(`${name}`)
};

//04/04

let offer: any = {
  book: {
    title: 'Essential TypeScript'
  }
};

console.log(offer?.magazine);

//keyof





console.log(getBookProp(getAllBooks()[0], 'title'));
console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
//console.log(getBookProp(getAllBooks()[0], 'isbn'));

//class 05.01



//05/02
// let ref: ReferenceItem = new ReferenceItem('Super TypeScript', 2012);              //become abstract class
// ref.printItem();
//
//   ref.publisher = 'Popular Book Publisher';
//   console.log(ref.publisher);



  let refBook: RefBook = new RefBook('Large Book', 2019, 5);
  console.log(refBook);
  refBook.printItem();


  refBook.printCitation();

  //class interface 05.04


 const favoriteLibrarian1: Librarian = new UniversityLibrarian();
favoriteLibrarian1.name = "Anna";
favoriteLibrarian1.assistCustomer("boris");

//05/05


const personBook: PersonBook = {
  name: 'Anna',
  email: 'Anna@gmail.com',
  id: 1,
  title: 'Intro',
  author: 'boris',
  available: true,
  category: Category.TypeScript
};

console.log(personBook);





//////////////
//06 modules and Namespace 06.05

import ('./class')
    .then(module => {                //dynamic import
  const reader = new module.Reader();
  console.log(reader);
  reader.name = "anna";
  reader.take(getAllBooks()[0]);
})
    .catch(err => console.log(err));


///generic functions 07.01
const inventory = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const result4 = purge<Book>(inventory);
// console.log(result4);
//
// const result34 = purge([1,2,3,4]);
// console.log(result34);

////07.02
const bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
const firstBook = bookShelf.getFirst();
console.log(JSON.stringify(firstBook));

const magazines: Array<Magazine> = [
  { title: 'Programming Language Monthly', publisher: 'Code Mags' },
  { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
  { title: 'Five Points', publisher: 'GSU' }

];

const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
//const firstMagazine = magazineShelf.getFirst();
//console.log(firstMagazine.title);

//genericConstarints 07.03

bookShelf.printTitles();

const mag = magazineShelf.find('Five Points');
console.log(mag);

//07.04 Utility
const book1: BookRequiredFields = {
  id:1,
  title: 'Refactoring TypeScript',
  author: 'Unknown',
  available: false,
  category: Category.TypeScript,
  pages: 500,
  markDamaged:null
};

const book2: UpdatedBook = {
  id: 2,
  pages: 400
};

// const params: Parameters<createCustomerFunctionType> = ["Anna", 25, "Lviv"];
// createCustomer(...params);


//decorator 08/01


const universityLibrarian1 = new UniversityLibrarian();
//
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = "Anna";
// (fLibrarian as any).printLibrarian();
// fLibrarian['printLibrarian']();

//method decorator
const fLibrarian = new UniversityLibrarian();

fLibrarian.assistFaculty = null;
//fLibrarian.teachCommunity = null;                //not writable

//08.04

const enc = new Encyclopedia3('Title', 2019, 30);
enc.printItem();

//08/05
const fLibrarian3 = new UniversityLibrarian();
fLibrarian3.name = 'Anna';
fLibrarian3.assistCustomer('Boris');

//08/06
const fLibrarian4 = new UniversityLibrarian();
fLibrarian4.name = "Anna";
console.log(fLibrarian4.name);

//08/07
const enc3 = new Encyclopedia3("title", 2019,30);
enc3.copies = 10;
//enc3.copies = -10;           //invalid value


//09/01 asynchronous pattern  callback
console.log('Beginning search...');
getBookTitlesByCategory(Category.JavaScript, LogCategorySearch);
getBookTitlesByCategory(Category.Software, LogCategorySearch);
console.log("end!");

//09/02
console.log('Beginning search...');
getBooksByCategoryPromise(Category.JavaScript)
    .then(data => {
      console.log(data);
      return data.length;
    })
    .then(numOfBooks => console.log(numOfBooks))
    .catch(reason => console.log(reason));
getBooksByCategoryPromise(Category.Software)
    .then(data => console.log(data))
    .catch(reason => console.log(reason));
console.log("end!");


//09/03       promise
console.log('Beginning search...');
logSearchResults(Category.Software)
    .catch(reason => console.log(reason));
console.log("end!");
