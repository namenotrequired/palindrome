module.exports = function (text) {
    // Ignore capitals, punctuation, word dividers
    text = text.toLowerCase();
    text = text.replace(/[ \.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');

    var halfLength = Math.floor(text.length / 2); // floor because the middle one doesn't matter

    for (var i = 0; i < halfLength; i++) {
        var charFromStart = text.slice(i, i + 1);
        var charFromEnd = text.slice(text.length - 1 - i, text.length - i);
        if (charFromEnd !== charFromStart) {
            return false;
        }
    }

    return true;
}