const buttonEl = document.getElementById("button")
const inputEl = document.getElementById("batday")
const resultEl = document.getElementById("result")




function editDate(){ 

  let birthdayValue = inputEl.value;
  let agedYear = getYear(birthdayValue);
   let agedMonth = getMonth(birthdayValue);
   let agedDay = theDay(birthdayValue)
  
  
   if(birthdayValue === ""){
    alert('please input a valid date');
  }else[
    resultEl.innerHTML = `Your age is <span> ${agedYear} ${agedYear > 1 ? "Years" : "Year"} ${agedMonth} ${agedMonth > 1? "Months" : "Month"} and ${agedDay} ${agedDay > 1 ? "Days" : "Day"} </span> `
  ]
}


theDay();

function getYear(birthdayValue){
  const todayDate = new Date();
  const birthDate = new Date(birthdayValue);

  let age = todayDate.getFullYear() - birthDate.getFullYear();
  
  if(todayDate.getMonth() < birthDate.getMonth() || todayDate.getDate() < birthDate.getDate()){
   
    // this condition reduces the age if the month or day are not equal to the the birthday month and date
    age--;
    
  }
  return age;
}
getMonth();

function getMonth(birthdayValue){
  const todayDate = new Date();
  const birthDate = new Date(birthdayValue);

  let month = todayDate.getMonth() - birthDate.getMonth();
  

  if(todayDate.getMonth() > birthDate.getMonth() || todayDate.getMonth() === birthDate.getMonth()){
   month = month;

  }else{
   month = 12 - (month * -1);
    
  }

  if(todayDate.getDate() < birthDate.getDate()){
    month--;
  }
  
  return month;
}

function theDay(birthdayValue){
  const todayDate = new Date();
  const birthDate = new Date(birthdayValue);

  let day = todayDate.getDate() - birthDate.getDate();

  
  if(todayDate.getDate() > birthDate.getDate()){
     day = day;
  }else{
     day = 30 - ( day * -1); 
  }

  if(todayDate.getHours() < 24){
    day--;
    
  }
  return day;
}

buttonEl.addEventListener('click', editDate)