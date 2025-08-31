import { ClosingDay, ClosingDayForHumans } from '@models/closingDay';
import { getHours, startOfYesterday, isBefore, isAfter } from 'date-fns';

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
    console.log(day);
    let res = true;
    // FIXME remove dirty temporary code
    const fifthOfJanuary = new Date(
      'Mon Sep 15 2025 00:00:00 GMT+0100 (Central European Standard Time'
    );
    if (isBefore(d as Date, fifthOfJanuary)) {
      res = true;
    }
    // Monday open
    else if (day === 1) {
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
    //FIXME: ajout de condition à la con pour palier au changement de règle de gestion
    const fifthOfJanuary = new Date(
      'Mon Sep 15 2025 00:00:00 GMT+0100 (Central European Standard Time'
    );
    if (isAfter(minimalDay as Date, fifthOfJanuary)) {
      // Si on est dimanche, on tombe le mardi, mais le lundi n'est pas ouvré donc on rajoute un jour
      if (minimalDay.getDay() === 2) {
        minimalDay.setDate(minimalDay.getDate() + 1);
      }
      // Si le jour minimum de livraison est un lundi, c'est fermé, on rajoute un jour
      if (minimalDay.getDay() === 1) {
        minimalDay.setDate(minimalDay.getDate() + 1);
      }
    }

    // Si un des jours de fermeture est prévu avant le jour minimum de livraison, on rajoute un jour
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
