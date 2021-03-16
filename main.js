
const allInputsClass=document.querySelector('.formInputs');
/**BASIC***/
const nextBasic=document.querySelector('.nextBasic');//button
const firstNameInput=document.querySelector('.inputsBasic input:nth-of-type(1)');
const lastNameInput=document.querySelector('.inputsBasic input:nth-of-type(2)');
const errorFirstName=document.querySelector('.errorFirstName');
const errorLastName=document.querySelector('.errorLastName');

/**CIRCLES STEPS*/
const textStep1=document.querySelector('.step:nth-of-type(1)');
const circleStep1=document.querySelector('.step:nth-of-type(1) .circle');

nextBasic.addEventListener('click',nextBasicClick)

function nextBasicClick(e) {

  e.preventDefault()
  if(firstNameInput.value == "" && lastNameInput.value==""){
      errorFirstName.innerHTML="*Enter first name";
        errorLastName.innerHTML="*Enter last name";
          errorFirstName.style.display='block';
            errorLastName.style.display='block';

  }


 if (firstNameInput.value == "") {
        errorFirstName.innerHTML="*Enter first name";
        errorFirstName.style.display='block';
          firstNameInput.focus();

          return false;

      }else{
        errorFirstName.innerHTML="";
        errorFirstName.style.display='none';
      }

       if (!/^[a-zA-Z]*$/g.test(firstNameInput.value)||firstNameInput.value.length<=1) {
        errorFirstName.innerHTML="*Invalid charters";
        errorFirstName.style.display='block';
          firstNameInput.focus();
          if(lastNameInput.value.length>1){
            errorLastName.innerHTML="";
            errorLastName.style.display='none';
          }
          return false;
      }else{
        errorFirstName.innerHTML="";
        errorFirstName.style.display='none';

      }


       if (lastNameInput.value == "") {
              console.log("Enter a lastname");
              lastNameInput.focus();
              errorLastName.innerHTML="*Enter Last name";
              errorLastName.style.display='block';
              return false;
          }else{
            errorLastName.innerHTML="";
            errorLastName.style.display='none';

          }




          if (!/^[a-zA-Z]*$/g.test(lastNameInput.value)||lastNameInput.value.length<=1) {
            errorLastName.innerHTML="*Invalid charters";
            errorLastName.style.display='block';
              lastNameInput.focus();
              return false;
          }else{
            errorLastName.innerHTML="";
            errorLastName.style.display='none';

          }

          if(lastNameInput && firstNameInput){
            errorFirstName.innerHTML="";
            errorFirstName.style.display='none';
            errorLastName.innerHTML="";
            errorLastName.style.display='none';
            allInputsClass.style.marginLeft="-117%";

            textStep1.classList.add('step1');
            circleStep1.classList.add('circle1');

            textStep1.classList.remove('step1Rem');
            circleStep1.classList.remove('circle1Rem');
            circleStep1.innerHTML='<i class="fas fa-check"></i>';
          }

}




/**CONTACT***/
const emailInput=document.querySelector('.inputsContact input:nth-of-type(1)');
const phoneInput=document.querySelector('.inputsContact input:nth-of-type(2)');
const nextBtnContact=document.querySelector('.nextContact');
const prevusBtnContact=document.querySelector('.previusContact');
const errorEmail=document.querySelector('.errorEmail');
const errorNumber=document.querySelector('.errorNumber');
/**CIRCLES STEPS*/
const textStep2=document.querySelector('.step:nth-of-type(2)');
const circleStep2=document.querySelector('.step:nth-of-type(2) .circle');

prevusBtnContact.addEventListener('click',prevusBtnContactClick)

function prevusBtnContactClick(e) {//contact previus button
  e.preventDefault()
allInputsClass.style.marginLeft="0%";
textStep1.classList.add('step1Rem');
circleStep1.classList.add('circle1Rem');

textStep1.classList.remove('step1');
circleStep1.classList.remove('circle1');
circleStep1.innerHTML='1';

}

nextBtnContact.addEventListener('click',nextBtnContactClick)
function nextBtnContactClick(e) {
  e.preventDefault()

  let  regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;


  if (regexEmail.test(emailInput.value)) {
    errorEmail.innerHTML='';
    errorEmail.style.display="none"
  } else {
errorEmail.innerHTML='*Insert valid email adress';
errorEmail.style.display="block"
  }

  if(phoneInput.value.length>=9){
    errorNumber.innerHTML='';
    errorNumber.style.display="none"
  }else{
    errorNumber.innerHTML='*Insert valid phone number';
    errorNumber.style.display="block"
  }
if(emailInput&&regexEmail.test(emailInput.value)&&phoneInput.value.length>=9){
allInputsClass.style.marginLeft="-234%";
textStep2.classList.add('step2');
circleStep2.classList.add('circle2');

textStep2.classList.remove('step2Rem');
circleStep2.classList.remove('circle2Rem');
circleStep2.innerHTML='<i class="fas fa-check"></i>'

}

}


/***DATA OF BIRTH****/
const previusInputsBirth=document.querySelector('.previusInputsBirth');//button
const nextInputsBirth=document.querySelector('.nextInputsBirth');
const dateSelect=document.querySelector('#date');
const monthSelect=document.querySelector('#month');
const yearSelect=document.querySelector('#year');
const genderSelect=document.querySelector('#gender');

/**CIRCLES STEPS*/
const textStep3=document.querySelector('.step:nth-of-type(3)');
const circleStep3=document.querySelector('.step:nth-of-type(3) .circle');

const now = new Date()
const currentYear = now.getFullYear()
const monthNames=["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

for (var i = 1; i <= 31; i++) {
dateSelect.innerHTML+=`<option value=${i}>${i}`
}
for (var i = 1; i < monthNames.length; i++) {
monthSelect.innerHTML+=`<option value=${i}>${monthNames[i]}`
}
for (var i = 1930; i <= currentYear; i++) {
yearSelect.innerHTML+=`<option value=${i}>${i}`
}

previusInputsBirth.addEventListener('click',previusInputsBirthClick);
function previusInputsBirthClick(e) {
e.preventDefault()
allInputsClass.style.marginLeft="-117%";
textStep2.classList.remove('step2');
circleStep2.classList.remove('circle2');

textStep2.classList.add('step2Rem');
circleStep2.classList.add('circle2Rem');
circleStep2.innerHTML='2'
}

nextInputsBirth.addEventListener('click',nextInputsBirthClick);
function nextInputsBirthClick(e) {
e.preventDefault()

if(dateSelect.value=="date"){
  dateSelect.style.border="solid 1px red";

}else{
dateSelect.style.border="solid 1px #959595";
}
if(monthSelect.value=="month"){
  monthSelect.style.border="solid 1px red";

}else{
monthSelect.style.border="solid 1px #959595";
}
if(yearSelect.value=="year"){
  yearSelect.style.border="solid 1px red";

}else{
yearSelect.style.border="solid 1px #959595";
}
if(genderSelect.value=="gender"){
  genderSelect.style.border="solid 1px red";

}else{
genderSelect.style.border="solid 1px #959595";
}
if(dateSelect.value!="date"&& monthSelect.value!="month"&& yearSelect.value!="year"&&genderSelect.value!="gender"){
  allInputsClass.style.marginLeft="-351%";
  textStep3.classList.add('step3');
  circleStep3.classList.add('circle3');

  textStep3.classList.remove('step3Rem');
  circleStep3.classList.remove('circle3Rem');
  circleStep3.innerHTML='<i class="fas fa-check"></i>'
}
}


/***SUBMIT FORM***/
const previusInputsDetails=document.querySelector('.previusInputsDetails');
const nextInputsDetails=document.querySelector('.nextInputsDetails');
const inputUsername=document.querySelector('.inputsDetails input:nth-of-type(1)')
const inputPassword=document.querySelector('.inputsDetails input:nth-of-type(2)')
const errorUsername=document.querySelector('.errorUsername')
const errorPassword=document.querySelector('.errorPassword')
let step4Submit='';
/**CIRCLES STEPS*/
const textStep4=document.querySelector('.step:nth-of-type(4)');
const circleStep4=document.querySelector('.step:nth-of-type(4) .circle');

previusInputsDetails.addEventListener('click',previusInputsDetailsClick)
function previusInputsDetailsClick(e) {
  e.preventDefault()
  allInputsClass.style.marginLeft="-234%";
circleStep3.innerHTML='3'
  textStep3.classList.add('step3Rem');
  circleStep3.classList.add('circle3Rem');
}

nextInputsDetails.addEventListener('click',nextInputsDetailsClick)
function nextInputsDetailsClick(e) {
  e.preventDefault()


  if(inputUsername.value.length<3 || inputUsername.value.trim()==null || inputUsername.value.trim()==""){
    errorUsername.innerHTML="*Username should have at least 3 characters";
    errorUsername.style.display="block"
return false

  }else{
    errorUsername.innerHTML="";
    errorUsername.style.display="none"

  }


  if(inputPassword.value.length<7 || inputPassword.value.trim()==null || inputPassword.value.trim()==""){
    errorPassword.innerHTML="*Password should have at least 7 characters";
    errorPassword.style.display="block"
  return false

  }else{
    errorPassword.innerHTML="";
    errorPassword.style.display="none"

  }
textStep4.classList.add('step4');
circleStep4.classList.add('circle4');
circleStep4.innerHTML='<i class="fas fa-check"></i>'
// location.href = 'https://www.youtube.com/watch?v=SMagaO4mbJY';
step4Submit=4;

setTimeout(function(){
  confirmSuccsess();
}, 600);

}



/***succsess***/

const sucsessContent=document.querySelector('.succsess');//email name on confirm page (input field email text)

emailInput.addEventListener('input', updateValue);
let helloEmail=""
function updateValue(e) {
 helloEmail=e.target.value;
 console.log(helloEmail);
if(step4Submit==4){
  confirmSuccsess()
}
}

function confirmSuccsess() {

sucsessContent.style.display="block";
sucsessContent.innerHTML=`<div class="succsessContent">
<div class="succsessIcon">
  <i class="fas fa-check-circle"></i>
</div>
<div class="succsessText">
<p>  Hello, <b>${helloEmail}</b></p>
<p>Please click bellow button to confirm your account</p>
<button onclick="location.href = 'https://www.youtube.com/watch?v=SMagaO4mbJY'" class="confirmBtn">Confirmation Link</button>
</div>
</div> `
}
// confirmSuccsess()
