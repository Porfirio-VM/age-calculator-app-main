const pYear = document.getElementById('rYear');
const pDay = document.getElementById('rDays');
const pMonth = document.getElementById('rMonth');

window.onload = () => {
    const bttn = document.getElementById('calculate');
    const inputContainer = document.querySelectorAll('.input-container');


    bttn.addEventListener('click', function() {

        const actualDate = new Date();
        const lastDay = new Date(actualDate.getFullYear(), actualDate.getMonth() + 1, 0).getDate();
        let isValid = true;

        inputContainer.forEach(container => {
           const inputs = container.querySelector('input');
           const alert = container.querySelector('p');
           const inputValue = inputs.value;
          
           if(inputValue === ''){
                inputs.classList.add('wrong')
                alert.innerText = 'This field is required'
                isValid = false;
           }else if(day.value > lastDay){
                day.classList.add('wrong')
                pday.innerText = 'Must be a valid day'
                isValid = false;
           }else if(month.value > 12){
                month.classList.add('wrong')
                pmonth.innerText = 'Must be a valid month'
                isValid = false;
           }else{
                inputs.classList.remove('wrong')
                alert.innerText = ''
               
           }
        });

        isValid === true ?
        calculateDate(actualDate, day.value, month.value, year.value):
        null;
    });

}

const calculateDate = (date, d, m, y) =>{

    const inputDate = new Date (y, m - 1, d);
    let age = date.getFullYear() - inputDate.getFullYear();
    const monthDiff = date.getMonth() - inputDate.getMonth();

    inputDate.setFullYear(date.getFullYear())

    const mlSeconds = 24 * 60 * 60 * 1000;
    const dayDiff = Math.round(Math.abs((inputDate - date) / mlSeconds));

    if(monthDiff < 0  || (monthDiff === 0 && date.getDate() < inputDate.getDate())){
        age --;
    }
 
    pYear.innerText = age;
    pMonth.innerText = monthDiff;
    pDay.innerText = dayDiff;
}