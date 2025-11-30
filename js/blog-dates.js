
document.addEventListener("DOMContentLoaded", () => {

    const dateContainers = document.querySelectorAll(".auto-date");

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const baseDate = new Date();

    dateContainers.forEach((badge, index) => {
        const date = new Date();
        date.setDate(baseDate.getDate() - index); 

        const day = date.getDate().toString().padStart(2, "0");
        const month = months[date.getMonth()];

        const dayEl = badge.querySelector(".day");
        const monthEl = badge.querySelector(".month");

        if (dayEl) dayEl.textContent = day;
        if (monthEl) monthEl.textContent = month;
    });

});
