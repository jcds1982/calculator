// Adding on keypress event
document.addEventListener("keyup", function (event) {
    // inputValue
    let numberEntered = document.getElementById("calc");
    inputValue(event.key?.toLowerCase());
    console.log("Key pressed " + event.key);
});

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
    .set("backspace", "DELETE");

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
                currentValue.value =
                    Number(currentValue.value) === 0
                        ? "0" + value
                        : currentValue.value + value;
            }
            break;

        case "NUMBER":
            console.log(currentValue.value);
            console.log("1" + currentValue.dataset.type !== "result");
            console.log("2" + Number(currentValue.value.toString()) !== "0");
            console.log("3" + currentValue.value.toString() !== "0");

            if (
                currentValue.dataset.type !== "result" &&
                Number(currentValue.value.toString()) !== "0" &&
                currentValue.value !== "0"
            ) {
                currentValue.value = currentValue.value + value;
                break;
            }

            currentValue.value = value;
            break;

        case "ZERO":
            currentValue.value =
                Number(currentValue.value) === 0
                    ? value
                    : currentValue.value + value;
            break;

        case "CLEAR":
            currentValue.value = "0";
            break;

        case "DELETE":
            currentValue.value = currentValue.value.substring(
                0,
                currentValue.value.length - 1
            );
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
    document.getElementById("messageSection").innerHTML = ``;
};

let doCalculation = (operation) => {
    let currentValue = document.getElementById(INPUT_ID);
    let previousValue = currentValue.dataset.previousValue;

    console.log(`Operation: ${operation}`);
    console.log(`This is the previous value ${previousValue}`);

    if (currentValue.dataset.type !== "result") {
        if (previousValue === "0") {
            currentValue.dataset.previousValue = currentValue.value;
            currentValue.value = 0;
        } else {
            switch (operation) {
                case "multiply":
                    currentValue.value =
                        Number(currentValue.dataset.previousValue) *
                        Number(currentValue.value);
                    break;

                case "add":
                    currentValue.value =
                        Number(currentValue.dataset.previousValue) +
                        Number(currentValue.value);
                    break;

                case "subtract":
                    currentValue.value =
                        Number(currentValue.dataset.previousValue) -
                        Number(currentValue.value);
                    break;

                case "divide":
                    if (Number(currentValue.value) !== 0) {
                        currentValue.value =
                            Number(currentValue.dataset.previousValue) /
                            Number(currentValue.value);
                    }
                    if (Number(currentValue.value) === 0) {
                        console.log("Entered division by 0");
                        document.getElementById(
                            "messageSection"
                        ).innerHTML = `Error - You can't divide by 0`;
                    }
                    break;
            }

            currentValue.dataset.previousValue = currentValue.value;
            currentValue.dataset.type = "result";
        }
    }
};

const clearValue = () => {
    document.getElementById("numberEntered").value = "";
};
