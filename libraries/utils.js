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

    let CURRENT_VALUE = document.getElementById(INPUT_ID);
    const CASE_OPTION = INPUT_TYPE.get(value);

    switch (CASE_OPTION){
        case 'PERIOD':
            if(value.includes('.') && !CURRENT_VALUE.value.includes('.')) {
                CURRENT_VALUE.value = Number(CURRENT_VALUE.value) === 0 ? '0' + value : CURRENT_VALUE.value + value;
            }
            break;

        case 'NUMBER':
            CURRENT_VALUE.value = Number(CURRENT_VALUE.value) === 0 ? value : CURRENT_VALUE.value + value;
            break;

        case 'ZERO':
            CURRENT_VALUE.value = Number(CURRENT_VALUE.value) === 0 ? value : CURRENT_VALUE.value + value;
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
    let CURRENT_VALUE = document.getElementById(INPUT_ID);
    CURRENT_VALUE.value = Number(CURRENT_VALUE.value) * -1;
}

/**
 * Clear all values for new calculations.
 */
let clearValues = ()=>{
    document.getElementById(INPUT_ID).value = 0;
}