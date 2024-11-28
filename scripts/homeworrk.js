const conversionForm = document.getElementById('conversion-form');
const resultElement = document.getElementById('result');

conversionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const number = Number(document.getElementById('number').value);
    const baseFrom = Number(document.getElementById('base-from').value);
    const baseTo = Number(document.getElementById('base-to').value);

    const result = convertBase(number, baseFrom, baseTo);

    resultElement.textContent = `The result is: ${result}`;
});

function convertBase(number, baseFrom, baseTo) {
    // Convert to decimal (base 10)
    let decimal = 0;
    let power = 0;
    while (number > 0) {
        decimal += (number % 10) * Math.pow(baseFrom, power);
        number = Math.floor(number / 10);
        power++;
    }

    // Convert from decimal to target base
    let result = '';
    while (decimal > 0) {
        const remainder = decimal % baseTo;
        result = remainder.toString() + result;
        decimal = Math.floor(decimal / baseTo);
    }

    return (result);
}
