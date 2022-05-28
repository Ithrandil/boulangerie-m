import { ClosingDay, ClosingDayForHumans } from '@models/closingDay';

export class DateUtils {
    static OrderDays(
        array: ClosingDay[]
    ): ClosingDay[] {
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
        array: ClosingDay[]
    ): ClosingDay[] {
        return array.filter((el) => el.startingDate.seconds > Math.floor(Date.now() / 1000))
    }

    static formatDaysToHumanDate(
        array: ClosingDay[]
    ): ClosingDayForHumans[] {
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

    static IsItOpenToday = (d: Date | null, closingDays: ClosingDay[]): boolean => {
        const day = (d || new Date()).getDay();
        const month = (d || new Date()).getMonth();
        let res = true;
        // Sunday open only between june and september included
        if (day === 0 && (month > 8 || month < 5)) {
            res = false;
        }
        // get and inject specific closed day from closing days form
        if (
            d &&
            closingDays.find(
                (el) =>
                    el.startingDate.seconds * 1000 <= d?.getTime() &&
                    el.endingDate.seconds * 1000 >= d?.getTime()
            )
        ) {
            res = false;
        }
        return res;
    };
}