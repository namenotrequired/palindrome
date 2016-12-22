$(document).ready(function() {
    var $result = $('#js-result');

    $('#js-palindrome').on('input', function (e) {

        $.post('/check-palindrome', { text: e.target.value }, function () {
            $result.text('Yes!')
        }).fail(function () {
            $result.text('No!')
        });
    });
});
