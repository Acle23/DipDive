let spinTime;
function myFunction() {
    spinTime = setTimeout(showPage, 1000);
}
function showPage() {
    document.getElementById('loader').style.display = "none";
    document.getElementById('pageContainer').style.display = "block";
}