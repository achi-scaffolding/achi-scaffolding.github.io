document.addEventListener("DOMContentLoaded", function () {
    var headers = document.querySelectorAll(".accordion-header");
    headers.forEach(function (header) {
        header.addEventListener("click", function () {
            var item = header.parentElement;
            var isActive = item.classList.contains("active");
            var group = item.parentElement.querySelectorAll(".accordion-item");
            group.forEach(function (sibling) {
                sibling.classList.remove("active");
            });
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});
