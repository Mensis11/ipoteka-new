import { calculatorInit } from "./blocks/calculator.js";
import { questionsInit } from "./blocks/questions.js";
import { yearInit } from "./blocks/year.js";

document.addEventListener('DOMContentLoaded', () => {
  calculatorInit();
  questionsInit();
  yearInit();
});