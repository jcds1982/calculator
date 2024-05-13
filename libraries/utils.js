const INPUT_ID = 'calc';
const INPUT_TYPE = new Map()
    .set('0', 'ZERO')
    .set('1','NUMBER')
    .set('2','NUMBER')
    .set('3','NUMBER')
    .set('4','NUMBER')
    .set('5','NUMBER')
    .set('6','NUMBER')
    .set('7','NUMBER')
    .set('8','NUMBER')
    .set('9','NUMBER')
    .set('.','PERIOD');

/**
 * Enters the value on the input text for calculation
 * @param value Current value from button.
 */
let inputValue = (value)=>{

    let currentValue = document.getElementById(INPUT_ID);
    const CASE_OPTION = INPUT_TYPE.get(value);

    switch (CASE_OPTION){
        case 'PERIOD':
            if(value.includes('.') && !currentValue.value.includes('.')) {
                currentValue.value = Number(currentValue.value) === 0 ? '0' + value : currentValue.value + value;
                writeOperation(value, '');
            }
            break;

        case 'NUMBER':

            currentValue.value = Number(currentValue.value) === 0 || currentValue.dataset.type === 'result' ? value : currentValue.value + value;
            writeOperation(value, '');
            currentValue.dataset.type = 'input';
            break;

        case 'ZERO':
            currentValue.value = Number(currentValue.value) === 0 ? value : currentValue.value + value;
            writeOperation(value, '');
            break;

        default:
            console.log('Value not found');
            break;
    }

}

/**
 * Switch number to Positive or Negative
 */
let switchPositiveOrNegative = () =>{
    let currentValue = document.getElementById(INPUT_ID);
    currentValue.value = Number(currentValue.value) * -1;
}

/**
 * Clear all values for new calculations.
 */
let clearValues = ()=>{
    document.getElementById(INPUT_ID).value = 0;
    document.getElementById(INPUT_ID).dataset.previousValue = '0';
    document.getElementById('messageSection').innerHTML = ``;
}



let doCalculation = (operation)=> {

    let currentValue = document.getElementById(INPUT_ID);
    let previousValue = currentValue.dataset.previousValue;

    console.log(`Operation: ${operation}`);
    console.log(`This is the previous value ${previousValue}`)

    if(currentValue.dataset.type !== 'result'){
        if(previousValue === '0'){
            currentValue.dataset.previousValue = currentValue.value;
            currentValue.value = 0;

        }else{
            switch(operation){

                case 'multiply':
                    currentValue.value = Number(currentValue.dataset.previousValue) * Number(currentValue.value);
                    break;

                case 'add':
                    currentValue.value = Number(currentValue.dataset.previousValue) + Number(currentValue.value);
                    break;

                case 'subtract':
                    currentValue.value = Number(currentValue.dataset.previousValue) - Number(currentValue.value);
                    break;

                case 'divide':
                    if(Number(currentValue.value) !== 0){
                        currentValue.value = Number(currentValue.dataset.previousValue) / Number(currentValue.value);
                    }
                    if(Number(currentValue.value) === 0){
                        console.log('Entered division by 0');
                        let errorSection = document.getElementById('messageSection');
                        errorSection.innerHTML = `Error - You can't divide by 0`;
                        errorSection.classList.toggle('error_message');
                    }
                    break;

            }
            currentValue.dataset.previousValue = currentValue.value;
            currentValue.dataset.type = 'result';
        }
    }
}

let writeOperation = (value, symbol) =>{
    let operationSection = document.getElementById('messageSection');
    operationSection.classList.remove('error_message');
    operationSection.innerHTML = operationSection.innerHTML + symbol + value;


}

