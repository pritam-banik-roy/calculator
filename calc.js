const display = document.querySelector('#display');
const buttons = document.querySelectorAll("button");
buttons.forEach((item) => {
  item.onclick = () => {
    console.log(item)
    if(item.id == 'clear'){
      display.innerText = ''
    } else if(item.id == 'backspace'){
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != '' && item.id == 'equal'){
      display.innerText = eval(display.innerText);
    } else if (display.innerText == '' && item.id == 'equal'){
      display.innerText = 'Empty!';
      setTimeout(() => (display.innerText = ''), 2000);
    } else {
      display.innerText += item.id
    }
  }
})



const container = document.querySelector('.container');
const dark = document.querySelector('.calc-toggle-theme');
const calc = document.querySelector('.calc');
const calc_heading = document.querySelector('.calc-heading');
const calc_theme = document.querySelector('.calc-theme')
const calc_toggle_theme = document.querySelector('.calc-toggle-theme')
const display_class = document.querySelector('.display')
const calc_number = document.querySelectorAll('.calc-number')
const calc_operator = document.querySelectorAll('.calc-operator')
const calc_equal = document.querySelector('#equal')
const clear = document.querySelector('#clear')
console.log(calc_equal)
let isDark = true;
dark.onclick = () => {
  container.classList.toggle('container-dark')
  // calc.classList.toggle('calc-dark')
  calc_heading.classList.toggle('calc-heading-dark')
  calc_theme.classList.toggle('calc-theme-dark')
  calc_toggle_theme.classList.toggle('calc-toggle-theme-dark')
  display_class.classList.toggle('display-dark')
  calc_number.forEach((item) =>{
    item.classList.toggle('button-dark')
  })
  calc_operator.forEach((item) => {
    item.classList.toggle('calc-operator-dark')
  })
  calc_equal.classList.toggle('calc-equal-dark')
  clear.classList.toggle('clear-dark')
  
  isDark=!isDark;
}





