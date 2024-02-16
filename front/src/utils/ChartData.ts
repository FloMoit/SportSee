import caloriesIcon from "../assets/calories-icon.png";
import proteinesIcon from "../assets/protein-icon.png";
import glucidesIcon from "../assets/carbs-icon.png";
import lipidesIcon from "../assets/fat-icon.png";

class ChartData {
  static formatBarChartData(data?: {
    sessions: { kilogram: number; calories: number }[];
  }) {
    if (!data) return [];
    const formatedData = data.sessions.map((item, index) => ({
      name: index + 1,
      poids: item.kilogram,
      calories: item.calories,
    }));

    return formatedData;
  }

  static formatLineChartData(data: { sessionLength: number; day: number }[]) {
    function dayOfWeek(dayIndex: number): string | undefined {
      const days = ["L", "M", "M", "J", "V", "S", "D"];
      return days[dayIndex - 1];
    }

    return data.map((item, index) => ({
      name: index + 1,
      sessionLength: item.sessionLength,
      day: dayOfWeek(item.day),
    }));
  }

  static formatRadialData(data: { score?: number; todayScore?: number }) {
    const value = data.score ? data.score : data.todayScore;
    return value ? [{ name: "Score", value: value * 100, fill: "red" }] : [];
  }

  static formatKPIData(data: any) {
    return {
      calories: {
        type: "Calories",
        value: data.keyData.calorieCount,
        unit: "kCal",
        icon: caloriesIcon,
      },
      proteines: {
        type: "Protéines",
        value: data.keyData.proteinCount,
        unit: "g",
        icon: proteinesIcon,
      },
      glucides: {
        type: "Glucides",
        value: data.keyData.carbohydrateCount,
        unit: "g",
        icon: glucidesIcon,
      },
      lipides: {
        type: "Lipides",
        value: data.keyData.lipidCount,
        unit: "g",
        icon: lipidesIcon,
      },
    };
  }

  static formatRadarData(rawData) {
    let formatedData = [];
    let count = 0;
    let subject;
    for (let item of rawData.data) {
      // On ignore le troncage pour les valeurs du haut et du bas
      if (count == 0 || count == 3) {
        subject = rawData.kind[item.kind];
      } else {
        subject = this.#formatText(rawData.kind[item.kind], 6);
      }

      formatedData.push({
        subject: subject,
        value: item.value,
      });
      count++;
    }
    return formatedData;
  }

  static #formatText(string: string, maxLength: number) {
    // Vérifie si la chaîne doit être tronquée
    const needsTruncation = string.length > maxLength;

    // Tronque la chaîne si nécessaire et ajoute un point si tronquée
    const truncatedString = needsTruncation
      ? string.slice(0, maxLength) + "."
      : string;

    // Transforme la première lettre en majuscule
    const result =
      truncatedString.charAt(0).toUpperCase() + truncatedString.slice(1);

    return result;
  }
}
export default ChartData;
