document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
})
document.querySelector('.custom1-select-wrapper').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
})
document.querySelector('.custom2-select-wrapper').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
})
for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}
var picList = ["giza-25999.jpg", "bordeaux-8375.jpg", 
                "courchevel-34083.jpg", "galapagos-islands-110961.jpg", 
                "machu-picchu-45618.jpg", "sonoma-36284.jpg", "tuscany-79382.jpg", 
                "whistler-40386.jpg", "zermatt-40374.jpg"];

$('pics').change(function () {
var val = parseInt($('pics').val());
$('img').attr("src",picList[val]);
});


window.addEventListener('click', function(e) {
    const select = document.querySelector('.custom-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});