import {Book, Person, Author} from './interfaces';



export type BookOrUndefined = Book | undefined;
export type BookProperties = keyof Book;                     //key from book interface
export type PersonBook = Person & Book;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;

export type createCustomerFunctionType = (name: string, age?: number, city?: string) => void;
