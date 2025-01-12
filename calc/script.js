const calculator = document.querySelector('.calculator');
const displayMain = document.querySelector('.calculator__display-main');
const displayHistory = document.querySelector('.calculator__display-history');
const keys = document.querySelector('.calculator__keys');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = displayMain.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === '0' || 
          previousKeyType === 'operator' ||
          previousKeyType === 'calculate') {
        displayMain.textContent = keyContent;
      } else {
        displayMain.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = 'number';
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue && 
          operator && 
          previousKeyType !== 'operator' &&
          previousKeyType !== 'calculate') {
        const calcValue = calculate(firstValue, operator, secondValue);
        displayMain.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = displayedNum;
      }

      if (action === 'add') displayHistory.textContent = `${displayedNum} +`;
      if (action === 'subtract') displayHistory.textContent = `${displayedNum} -`;
      if (action === 'multiply') displayHistory.textContent = `${displayedNum} ×`;
      if (action === 'divide') displayHistory.textContent = `${displayedNum} ÷`;

      key.classList.add('is-depressed');
      calculator.dataset.operator = action;
      calculator.dataset.previousKeyType = 'operator';
    }

    if (action === 'decimal') {
      if (!displayedNum.includes('.')) {
        displayMain.textContent = displayedNum + '.';
      } else if (
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
      ) {
        displayMain.textContent = '0.';
      }
      calculator.dataset.previousKeyType = 'decimal';
    }

    if (action === 'clear') {
      displayHistory.textContent = '';
      if (key.textContent === 'AC') {
        calculator.dataset.firstValue = '';
        calculator.dataset.modValue = '';
        calculator.dataset.operator = '';
        calculator.dataset.previousKeyType = '';
      } else {
        key.textContent = 'AC';
      }

      displayMain.textContent = '0';
      calculator.dataset.previousKeyType = 'clear';
    }

    if (action === 'calculate') {
      let firstValue = calculator.dataset.firstValue;
      let operator = calculator.dataset.operator;
      let secondValue = displayedNum;

      if (firstValue) {
        if (previousKeyType === 'calculate') {
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }
        const result = calculate(firstValue, operator, secondValue);
        displayMain.textContent = result;
        displayHistory.textContent = `${firstValue} ${getOperatorSymbol(operator)} ${secondValue} =`;
      }
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = 'calculate';
    }

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'));
  }
});

const calculate = (n1, operator, n2) => {
  let result = '';
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2);
  }
  return result;
}

const getOperatorSymbol = (operator) => {
  switch(operator) {
    case 'add': return '+';
    case 'subtract': return '-';
    case 'multiply': return '×';
    case 'divide': return '÷';
    default: return '';
  }
}
