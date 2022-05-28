export class DateUtils {
    // TODO: essaie de typer la array de jours
    static OrderDays(
        array: { rangeId: string; startingDate: any; endingDate: any }[]
    ): { rangeId: string; startingDate: any; endingDate: any }[] {
        return array
            .sort((el1, el2) => {
                if (el1.startingDate.seconds < el2.startingDate.seconds) {
                    return -1;
                }
                if (el1.startingDate.seconds > el2.startingDate.seconds) {
                    return 1;
                }
                return 0;
            })
    }

    static FilterDaysAfterToday(
        array: { rangeId: string; startingDate: any; endingDate: any }[]
    ): { rangeId: string; startingDate: any; endingDate: any }[] {
        return array.filter((el) => el.startingDate.seconds > Math.floor(Date.now() / 1000))
    }

    static formatDaysToHumanDate(
        array: { rangeId: string; startingDate: any; endingDate: any }[]
    ): { rangeId: string; startingDate: any; endingDate: any }[] {
        return array
            .map((el) => {
                return {
                    rangeId: el.rangeId,
                    startingDate: el.startingDate.toDate(),
                    endingDate:
                        el.startingDate.seconds === el.endingDate.seconds
                            ? null
                            : el.endingDate.toDate(),
                };
            });
    }
}