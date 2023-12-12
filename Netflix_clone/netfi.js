var items = document.querySelectorAll('.acc-item');
var openParagraph = null;

items.forEach(function (item) {
    item.addEventListener('click', function () {
        var paragraph = this.nextElementSibling;
        var plusMinus = this.querySelector('.sign');

        if (openParagraph && openParagraph !== paragraph) {
            openParagraph.style.display = 'none';
            openParagraph.previousElementSibling.querySelector('.sign').innerHTML = '<i class="bi bi-plus-lg"></i>';
        }

        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block';
            plusMinus.innerHTML = '<i class="bi bi-x-lg"></i>';
            openParagraph = paragraph;
        } else {
            paragraph.style.display = 'none';
            plusMinus.innerHTML = '<i class="bi bi-plus-lg"></i>';
            openParagraph = null;
        }
    });
});