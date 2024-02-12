import caloriesIcon from "../assets/calories-icon.png";
import proteinesIcon from "../assets/protein-icon.png";
import glucidesIcon from "../assets/carbs-icon.png";
import lipidesIcon from "../assets/fat-icon.png";

class ChartData {
  static formatBarChartData(data: any) {
    let formatedData = [];
    let count = 1;

    for (let item of data.sessions) {
      formatedData.push({
        name: count,
        poids: item.kilogram,
        calories: item.calories,
      });
      count++;
    }

    return formatedData;
  }

  static formatLineChartData(data: any) {
    function dayOfWeek(dayIndex: number) {
      if (dayIndex) return ["L", "M", "M", "J", "V", "S", "D"][dayIndex - 1];
    }

    let formatedData = [];
    let count = 1;

    for (let item of data) {
      formatedData.push({
        name: count,
        sessionLength: item.sessionLength,
        day: dayOfWeek(item.day),
      });
      count++;
    }

    return formatedData;
  }
  static formatRadialData(data: any) {
    if (data.score)
      return [{ name: "Score", value: data.score * 100, fill: "red" }];
    if (data.todayScore)
      return [{ name: "Score", value: data.todayScore * 100, fill: "red" }];
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
      if (count == 0 || count == 3) subject = rawData.kind[item.kind];
      else subject = this.#formatText(rawData.kind[item.kind], 6);

      formatedData.push({
        subject: subject,
        value: item.value,
      });
      count++;
    }
    return formatedData;
  }

  static #formatText(string, maxLength) {
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
