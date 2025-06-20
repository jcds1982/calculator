let currentOperator = "none";
const INPUT_ID = "calc";
const INPUT_TYPE = new Map()
    .set("0", "ZERO")
    .set("1", "NUMBER")
    .set("2", "NUMBER")
    .set("3", "NUMBER")
    .set("4", "NUMBER")
    .set("5", "NUMBER")
    .set("6", "NUMBER")
    .set("7", "NUMBER")
    .set("8", "NUMBER")
    .set("9", "NUMBER")
    .set(".", "PERIOD")
    .set("c", "CLEAR")
    .set("backspace", "DELETE")
    .set("+", "ADD")
    .set("-", "SUBTRACT")
    .set("*", "MULTIPLY")
    .set("/", "DIVIDE")
    .set("%", "PERCENTAGE")
    .set("enter", "EQUALS")
    .set("=", "EQUALS");
// Adding on keypress event
document.addEventListener("keyup", function (event) {
    console.log(`Key up : ${event.key?.toLowerCase()} `);
    inputValue(event.key?.toLowerCase());
    event.target.blur();
});

/**
 * Enters the value on the input text for calculation
 * @param value Current value from button.
 */
let inputValue = (value) => {
    let currentValue = document.getElementById(INPUT_ID);
    const CASE_OPTION = INPUT_TYPE.get(value.toLowerCase());
    switch (CASE_OPTION) {

        case "PERIOD":
            if (value.includes(".") && !currentValue.value.includes(".")) {
                // currentValue.value = Number(currentValue.value) === 0 ? "0" + value : currentValue.value + value;
                currentValue.value = currentValue.value + value;
            }
            break;

        case "NUMBER":

            if (currentValue.value.includes(".") && currentValue.dataset.type !== "result"){
                currentValue.value = currentValue.value + value;
                break;
            }
            if (currentValue.dataset.type !== "result" && Number(currentValue.value.toString()) !== 0 && currentValue.value !== 0) {
                currentValue.value = currentValue.value + value;
                break;
            } else {
                currentValue.value = value;
                currentValue.setAttribute("data-type", "input");
            }

            currentValue.value = value;
            break;

        case "ZERO":
            currentValue.value = Number(currentValue.value) === 0 && !currentValue.value.includes(".") ? value : currentValue.value + value;
            break;

        case "CLEAR":
            currentValue.value = "0";
            currentOperator = "none";
            currentValue.setAttribute("data-previous-value", "0");
            break;

        case "DELETE":
            if (currentValue.value.length !== 1) {
                currentValue.value = currentValue.value.substring(0, currentValue.value.length - 1);
                break;
            }

            currentValue.value = 0;
            break;

        case "ADD":
            currentOperator = CASE_OPTION;
            doCalculation("add");
            break;

        case "SUBTRACT":
            currentOperator = CASE_OPTION;
            doCalculation("subtract");
            break;

        case "MULTIPLY":
            currentOperator = CASE_OPTION;
            doCalculation("multiply");
            break;

        case "DIVIDE":
            currentOperator = CASE_OPTION;
            doCalculation("divide");
            break;

        case "EQUALS":
            doCalculation(currentOperator.toLowerCase());
            break;

        case "PERCENTAGE":
            currentOperator = CASE_OPTION;
            doCalculation("percentage");
            break;

        default:
            console.log("Value not found");
            break;
    }
};

/**
 * Switch number to Positive or Negative
 */
let switchPositiveOrNegative = () => {
    let currentValue = document.getElementById(INPUT_ID);
    currentValue.value = Number(currentValue.value) * -1;
};


/**
 * Clear all values for new calculations.
 */
let clearValues = () => {
    document.getElementById(INPUT_ID).value = 0;
    document.getElementById(INPUT_ID).dataset.previousValue = "0";
};

/**
 * Perform the selected operation
 * @param operation Operation Name
 */
let doCalculation = (operation) => {
    let currentValue = document.getElementById(INPUT_ID);
    let previousValue = currentValue?.getAttribute("data-previous-value");

    if (currentValue.dataset.type !== "result") {
        if (previousValue === "0") {
            currentValue.dataset.previousValue = currentValue.value;
            currentValue.value = 0;
        } else {
            switch (operation) {
                case "multiply":
                    currentValue.value = parseFloat((Number(currentValue.dataset.previousValue) * Number(currentValue.value)).toFixed(4));
                    break;

                case "add":
                    currentValue.value = Number(currentValue.dataset.previousValue) + Number(currentValue.value);
                    currentValue.setAttribute("data-previous-value", currentValue.value);
                    break;

                case "subtract":
                    currentValue.value = Number(currentValue.dataset.previousValue) - Number(currentValue.value);
                    currentValue.setAttribute("data-previous-value", currentValue.value);
                    break;

                case "divide":
                    if (Number(currentValue.value) !== 0) {
                        currentValue.value = parseFloat((Number(currentValue.dataset.previousValue) / Number(currentValue.value)).toFixed(4));
                    }
                    if (Number(currentValue.value) === 0) {
                        currentValue.value =  "Error";
                        currentValue.setAttribute("data-previous-value", '0');
                    }
                    break;

                case "percentage":
                    currentValue.value = Number(currentValue.dataset.previousValue) * (Number(currentValue.value)/100);
                    currentValue.setAttribute("data-previous-value", currentValue.value);
                    break;
                default:
                    break;
            }
            currentValue.dataset.previousValue = currentValue.value !== "Error" ? parseFloat(currentValue.value).toFixed(4): 0;
            currentValue.dataset.type = "result";
        }
    }
}