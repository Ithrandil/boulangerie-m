import { ClosingDay, ClosingDayForHumans } from '@models/closingDay';
import { getHours, startOfYesterday } from 'date-fns';

// TODO: refacto toutes avec date fns tant qu'à faire vu que j'utilise la lib pour le formattage en français

export class DateUtils {
  static OrderDays(array: ClosingDay[]): ClosingDay[] {
    return array.sort((el1, el2) => {
      if (el1.startingDate.seconds < el2.startingDate.seconds) {
        return -1;
      }
      if (el1.startingDate.seconds > el2.startingDate.seconds) {
        return 1;
      }
      return 0;
    });
  }

  static FilterDaysAfterToday(array: ClosingDay[]): ClosingDay[] {
    const todayMidnight = new Date();
    todayMidnight.setHours(0, 0, 0, 0);
    return array.filter(
      (el) =>
        el.startingDate.seconds >= Math.floor(todayMidnight.getTime() / 1000)
    );
  }

  static formatDaysToHumanDate(array: ClosingDay[]): ClosingDayForHumans[] {
    return array.map((el) => {
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

  static IsItOpenToday = (
    d: Date | null,
    closingDays: ClosingDay[]
  ): boolean => {
    d?.setHours(0, 0, 0, 0);
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

  static SetMinimalDay(minimalDay: Date, closingDays: ClosingDay[]): Date {
    // Set à minuit
    minimalDay.setHours(0, 0, 0, 0);
    // Set à dans deux jours, délai minimum de livraison
    minimalDay.setDate(new Date().getDate() + 2);
    // Si on est samedi entre octobre et mai inclus, on tombe le lundi mais le dimanche n'est pas ouvré donc on rajoute un jour
    if (
      minimalDay.getDay() === 1 &&
      (minimalDay.getMonth() > 8 || minimalDay.getMonth() < 5)
    ) {
      minimalDay.setDate(minimalDay.getDate() + 1);
    }
    // Si le jour minimum de livraison est un dimanche entre octobre et mai inclus, c'est fermé, on rajoute un jour
    if (
      minimalDay.getDay() === 0 &&
      (minimalDay.getMonth() > 8 || minimalDay.getMonth() < 5)
    ) {
      minimalDay.setDate(minimalDay.getDate() + 1);
    }
    // Si un des jours de fermeture est prévu avant le jour minimum de livraison on rajoute un jour
    closingDays.forEach((closedDay) => {
      if (closedDay.startingDate.seconds * 1000 <= minimalDay.getTime()) {
        minimalDay.setDate(minimalDay.getDate() + 1);
      }
    });
    // Si 18h passé, ajoute un jour
    if (getHours(new Date()) >= 18) {
      minimalDay.setDate(minimalDay.getDate() + 1);
    }
    return minimalDay;
  }

  static Yesterday() {
    return startOfYesterday();
  }
}
