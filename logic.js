//----------Constatntes----------------------------

// Bill-------------------------------------------
const bill_rot = document.getElementById('bill');
const bill_err = document.getElementById('b_error');
const bill_in = document.getElementById('bill_in');
// Botones------------------------------------
const b_percent = document.getElementsByClassName('bill_b');
// People---------------------------------------
const people = document.getElementById('people');
const p_error = document.getElementById('p_error');
const people_in = document.getElementById('people_in');

//Outputs--------------------------------------------------------
const tip = document.getElementById('tip');
const total = document.getElementById('total');
const reset = document.getElementById('reset');
const sign = '$ ';

//------------Variables---------------------------
let bill = 0 ;
let percent= 0;
let many = 0;

//--------------Listeners-----------------------
bill_in.addEventListener('focus', (e) => {bill_in.value = ''});
bill_in.addEventListener('keyup', function(){
    if(bill_in.value !== ''){
       let bill_valor = parseFloat(bill_in.value).toFixed(2);
        reset.disabled = false;

        if(bill_valor < 1 || isNaN(bill_valor)){
            bill_in.style.border = '2px solid salmon';
            bill_err.innerHTML = 'C\'ant be zero';
        }else {
            bill_err.innerHTML=('');
            bill_in.style.border = '';

        } 
    }else {
        bill_err.innerHTML=('');
        bill_in.style.border = '';
        reset.disabled=true;
    } 

 bill = parseInt(bill_in.value); // bill
 prueba();

});
people_in.addEventListener('focus', (e) => {people_in.value = ''});
people_in.addEventListener('keyup', function(){
    if(people_in.value !== ''){
        let num_people = parseInt(people_in.value);
        reset.disabled = false;

        if(num_people < 1 || isNaN(num_people)){
            people_in.style.border = '2px solid salmon';
                p_error.innerHTML = 'C\'ant be zero';
        } 
        else {
            p_error.innerHTML=('');
            people_in.style.border = '';
        }
    } else { 
        p_error.innerHTML=('');
        people_in.style.border = ''
        reset.disabled=true;
            }
        many = parseInt(people_in.value); // many
        prueba();
    }) ;

    //---------------buttons listeners-----------------------
for(let b_perc of b_percent){    
    if(b_perc.id !== "custom"  ){
        b_perc.addEventListener('click', function(){  
                percent = parseFloat(b_perc.id)/100;
                prueba();        
            });
        }else{
        b_perc.addEventListener('focus', (e) => {b_perc.value = ''});
        b_perc.addEventListener('keyup', function(){
            if(custom.value !== 'Custom' && custom.value!== ''){
            percent = parseFloat(custom.value)/100;
            prueba();
            }
        });
        }

     }
//------------Reset------------------------
reset.addEventListener('click', function() {    
    reset.disabled = true;
    bill_in.value = '';
    bill_in.style.border = '';
    people_in.value = '';
    people_in.style.border = '';
    total.innerHTML= sign + '0.00';
    tip.innerHTML= sign + '0.00';
    custom.value = '';
    p_error.innerHTML= '';
    bill_err.innerHTML= '';
    bill = 0;
    many = 0;
    percent = 0;
     
});
//------------all ok? then total and tip ---------
function prueba(){
    if(bill && many && percent)
    {
        tip.innerHTML = sign + parseFloat((bill*percent)/many).toFixed(2);
        total.innerHTML= sign + parseFloat((bill + (bill*percent)) / many).toFixed(2);
    }
}