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


let inputValue = (value)=>{

    let CURRENT_VALUE = document.getElementById(INPUT_ID);
    const CASE_OPTION = INPUT_TYPE.get(value);

    switch (CASE_OPTION){
        case 'PERIOD':
            console.log('Entered Period');
            if(value.includes('.') && !CURRENT_VALUE.value.includes('.')) {
                CURRENT_VALUE.value = Number(CURRENT_VALUE.value) === 0 ? '0' + value : CURRENT_VALUE.value + value;
            }
            break;

        case 'NUMBER':
            console.log('Entered Number');
            CURRENT_VALUE.value = Number(CURRENT_VALUE.value) === 0 ? value : CURRENT_VALUE.value + value;
            break;

        case 'ZERO':
            console.log('Entered Zero');
            CURRENT_VALUE.value = Number(CURRENT_VALUE.value) === 0 ? value : CURRENT_VALUE.value + value;
            break;

        default:
            console.log('Value not found');
            break;
    }

}