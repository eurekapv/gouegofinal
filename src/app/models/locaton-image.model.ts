import { IDDocument } from './iddocument.model';

export class LocationImage extends IDDocument {
    COVERIMAGE: boolean;
    IMAGEURL: string;

    constructor() {
        super();
    }
}