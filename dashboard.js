document.addEventListener("DOMContentLoaded", function () {

    // Attendance Button
    const attendanceButton = document.getElementById("attendanceBtn");

    if (attendanceButton) {
        attendanceButton.addEventListener("click", function () {
            window.location.href = "attendance.html";
        });
    }

    // Students Button
    const studentsButton = document.getElementById("studentsBtn");

    if (studentsButton) {
        studentsButton.addEventListener("click", function () {
            window.location.href = "students.html";
        });
    }

    // Reports Button
    const reportsButton = document.getElementById("reportsBtn");

    if (reportsButton) {
        reportsButton.addEventListener("click", function () {
            window.location.href = "reports.html";
        });
    }

    // Dashboard Home Button
    const dashboardButton = document.getElementById("dashboardBtn");

    if (dashboardButton) {
        dashboardButton.addEventListener("click", function () {
            window.location.href = "dashboard.html";
        });
    }

});