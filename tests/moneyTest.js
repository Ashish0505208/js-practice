import {formatCurrency} from '../scripts/utils/money.js';

if (formatCurrency(2095)==='20.95'){
    console.log('pass');
}
else{
    console.log('fail');
}

if(formatCurrency(0)==='0.00'){
    console.log('pass');
}
else{
    console.log('fail');
}