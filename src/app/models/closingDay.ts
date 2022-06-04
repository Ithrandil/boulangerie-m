import { Timestamp } from '@firebase/firestore-types';

export interface ClosingDay {
    rangeId: string;
    startingDate: Timestamp;
    endingDate: Timestamp;
}

export interface ClosingDayForHumans {
    rangeId: string;
    startingDate: Date;
    endingDate: Date | null;
}
