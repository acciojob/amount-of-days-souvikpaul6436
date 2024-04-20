function daysOfAYear(year) {
    // Check if the year is a leap year
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    
    // Return the number of days based on leap year or non-leap year
    return isLeapYear ? 366 : 365;
}

// Test cases
console.log(daysOfAYear(2022)); // 365
console.log(daysOfAYear(2024)); // 366
console.log(daysOfAYear(1900)); // 365
console.log(daysOfAYear(2000)); // 366
