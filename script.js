document.addEventListener("DOMContentLoaded", function () {

    const attendanceButton = Array.from(
        document.querySelectorAll("button, a")
    ).find(element =>
        element.textContent.trim().toLowerCase() === "attendance"
    );

    if (attendanceButton) {
        attendanceButton.addEventListener("click", function () {
            window.location.href = "attendance.html";
        });
    }

});