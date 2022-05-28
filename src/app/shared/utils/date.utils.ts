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
}