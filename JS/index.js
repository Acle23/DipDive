let spinTime;
function myFunction() {
    spinTime = setTimeout(showPage, 1000);
}
function showPage() {
    document.getElementById('loader').style.display = "none";
    document.getElementById('pageContainer').style.display = "block";
}

// function sumOfSquares(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i] * numbers[i];
//     }
//     return sum;
// }