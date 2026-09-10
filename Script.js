document.addEventListener("DOMContentLoaded", function () {

    const attendanceButton = document.getElementById("attendanceBtn");

    if (attendanceButton) {
        attendanceButton.addEventListener("click", function () {
            window.location.href = "attendance.html";
        });
    }

});
