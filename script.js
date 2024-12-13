let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}
window.onscroll =() =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');

}

var typed = new Typed('.multiple-text', {
  strings: ['GAIN MUSCLE', 'LOSE FAT','LEEN BULK',],
  typeSpeed: 50,
  backSpeed: 60,
  backDelay:1000,
  loop:true,

});


let button = document.getElementById('mybtn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;
    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal : ' + bmi;
        }else{
            result.innerHTML = 'Over weight : ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')
       
const sendEmail = (e) => {
    e.preventDefault()
    if(contactUser.value ===''){
        contactMessage.classList.remove('color-white')
        contactMessage.classList.add('color-red')
        contactMessage.textContent = 'You must enter your email ⬆️'


        setTimeout(() =>{
            contactMessage.textContent = ''
        },3000)
    } else{
        emailjs.sendForm('service_yhwkx2a','template_cxywdpf','#contact-form','tUMWweeJ3LuLXsDJH')
        .then(()=>{
            contactMessage.classList.add('color-white')
            contactMessage.textContent = 'your request is sent'

            setTimeout(()=>{
                contactMessage.textContent = ''
            } , 3000)
        } , (error)=>{
        alert('OPPS! SOMETHING HAS FAILED....', error)
        })
      contactUser.value = ''

         
    }
}
contactForm.addEventListener('submit',sendEmail)











