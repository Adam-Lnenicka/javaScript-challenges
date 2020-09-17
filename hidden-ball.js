document.getElementById('btn1').onclick =function(){
    let userSelection =0;
    const randomNumber = Math.floor(Math.random()*3);
    
    if (randomNumber === 0){ document.getElementById('ball1').style.display ='inline-block'};
    if (randomNumber === 1){ document.getElementById('ball2').style.display ='inline-block'};
    if (randomNumber === 2){ document.getElementById('ball3').style.display ='inline-block'};
    
    if (randomNumber === userSelection){
        document.getElementById('wizard-items').style.backgroundColor = 'green'
        document.getElementById('reveal').innerHTML = 'Congratulations! YOU FOUND THE BALL! Hit the RESET button to play again'
    } else {
        document.getElementById('wizard-items').style.backgroundColor = 'red'
        document.getElementById('reveal').innerHTML = 'Sorry, YOU LOST! hit the RESET button to play again'
    }      
}

//hat 2
document.getElementById('btn2').onclick =function(){
    let userSelection =1;
    const randomNumber = Math.floor(Math.random()*3);
    
    if (randomNumber === 0){ document.getElementById('ball1').style.display ='inline-block'};
    if (randomNumber === 1){ document.getElementById('ball2').style.display ='inline-block'};
    if (randomNumber === 2){ document.getElementById('ball3').style.display ='inline-block'};
    
    if (randomNumber === userSelection){
        document.getElementById('wizard-items').style.backgroundColor = 'green';
        document.getElementById('reveal').innerHTML = 'Congratulations! YOU FOUND THE BALL! Hit the RESET button to play again'
    } else {
        document.getElementById('wizard-items').style.backgroundColor = 'red';
        document.getElementById('reveal').innerHTML = 'Sorry, YOU LOST! hit the RESET button to play again' 
    }  
}

//hat 3
document.getElementById('btn3').onclick =function(){
    let userSelection =2;
    const randomNumber = Math.floor(Math.random()*3);
    
    if (randomNumber === 0){ document.getElementById('ball1').style.display ='inline-block'};
    if (randomNumber === 1){ document.getElementById('ball2').style.display ='inline-block'};
    if (randomNumber === 2){ document.getElementById('ball3').style.display ='inline-block'};
    
    if (randomNumber === userSelection){
        document.getElementById('wizard-items').style.backgroundColor = 'green'
        document.getElementById('reveal').innerHTML = 'Congratulations! YOU FOUND THE BALL! Hit the RESET button to play again'
    } else {
        document.getElementById('wizard-items').style.backgroundColor = 'red'
        document.getElementById('reveal').innerHTML = 'Sorry, YOU LOST! Hit the RESET button to play again'
    }      
}

//reset
document.getElementById('reset').onclick = function(){
    document.getElementById('wizard-items').style.backgroundColor = '#f4e4c1';
    document.getElementById('ball1').style.display ='none';
    document.getElementById('ball2').style.display ='none';
    document.getElementById('ball3').style.display ='none';
    document.getElementById('reveal').innerHTML = ''
} 