//script.js
$(document).ready(function() {
    // Filtering
    $('#categoryFilter').change(function() {
        var selectedCategory = $(this).val();
        $('.book-card').each(function() {
            var bookCategory = $(this).data('category');
            if (selectedCategory === "" || selectedCategory === bookCategory) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Sorting
    $('#sortOptions').change(function() {
        var selectedOption = $(this).val();
        var books = $('.book-card').toArray();

        books.sort(function(a, b) {
            var aPrice = parseFloat($(a).data('price'));
            var bPrice = parseFloat($(b).data('price'));
            var aDate = new Date($(a).data('date'));
            var bDate = new Date($(b).data('date'));

            if (selectedOption === 'priceLowToHigh') {
                return aPrice - bPrice;
            } else if (selectedOption === 'priceHighToLow') {
                return bPrice - aPrice;
            } else if (selectedOption === 'newest') {
                return bDate - aDate;
            } else {
                return 0;
            }
        });

        $('#bookList').html(books);
    });
});
