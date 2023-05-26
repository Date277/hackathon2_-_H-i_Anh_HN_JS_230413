function getDayOfMonth(month, year) {
    const firstDay = new Date(year, month - 1, 1);

    const lastDay = new Date(year, month, 0);

    const numberOfDays = lastDay.getDate() - firstDay.getDate() + 1;

    return numberOfDays;
}

const inputMonth = parseInt(prompt("Nhập vào tháng:"));
const inputYear = parseInt(prompt("Nhập vào năm:"));

const numberOfDays = getDayOfMonth(inputMonth, inputYear);

alert(`Số ngày của tháng ${inputMonth}/${inputYear} là: ${numberOfDays}`);
