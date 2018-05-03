import { Book } from './book';
import { User } from './user';

export class Rental {

    id: number;
    user: User;
    book: Book;
    startDate: Date;
    endDate: Date;
}
