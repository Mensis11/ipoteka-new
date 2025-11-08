import { calculatorInit } from "./blocks/calculator.js";
import { questionsInit } from "./blocks/questions.js";
import { yearInit } from "./blocks/year.js";
import { burgerMenuInit } from "./blocks/burgermenu.js";

document.addEventListener('DOMContentLoaded', () => {
  calculatorInit();
  questionsInit();
  yearInit();
  burgerMenuInit();
});