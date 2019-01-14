//step 1 - select all the inputs and store into the variable

let inputs = document.querySelectorAll('input')

  // DATA FOR TAX CALCULATOR
function cal_Tax() {



  // Income thresholds where tax rates change
  let income_Ranges = [0,18200,37000,87000,180000,Number.MAX_VALUE];

  // Interest rates to be applied at the different income thresholds
  let tax_Rates = [0,0.19,0.325,0.37,0.45]

  // Min Tax amount at the different income levels/thresholds
  let min_Tax = [0,0,3572,19822,54232]

  // Empty array
  let input_values=[];

  // gets all the input values and stores them into the empty array
  for (let i = 0; i<inputs.length; i++) {

    // Means the loop will go through each value and get the value and store into this "value"
    let value = inputs[i].value;

    // If Value is empty then push into the array the number 0 - want a number otherwise push "value" into array
    if (value==="") {
      input_values.push(Number(0))
          } else {
              input_values.push(number(0));
          }
  }
