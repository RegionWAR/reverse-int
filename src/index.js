module.exports = function reverse(n) {
    let text = (n + '').split("").reverse().join("");
    return (parseInt(text, 10));
}