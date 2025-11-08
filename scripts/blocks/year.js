export function yearInit() {
    const aYearFromNow = new Date();
    const spanElement = document.querySelector('.js-year');

    aYearFromNow.setFullYear(aYearFromNow.getFullYear());

    spanElement.innerText = aYearFromNow.getFullYear();
}
