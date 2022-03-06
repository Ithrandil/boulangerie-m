export interface ClosingDay {
    rangeId?: string | undefined;
    startingDate: Date | { seconds: number; nanoseconds: number };
    endingDate: { seconds: number; nanoseconds: number } | Date;
}

// Dans le model orders il y a un import fonctionnel de timestamp
