document.getElementById("btn4").addEventListener("click", function() {
    let firstSentence = document.getElementById("firstSentence").value;
    

    const letters = firstSentence.split('');


    let nums = letters.map((x) =>   x==='a'? x = 1: 
                                    x==='e'? x = 2: 
                                    x==='i'? x = 3:
                                    x==='o'? x = 4:
                                    x==='u'? x = 5: x);
                                    
    let reverseOrder = nums.reverse().join('')
    
    document.getElementById("result3").textContent = reverseOrder;
})