document.getElementById("btn").addEventListener("click", function() {

    
    const weight = document.getElementById("weight").value
    const age = document.getElementById("age").value
    const gender = 'male'
    const exerciseHours = document.getElementById("exerciseHours").value
    let caloriesDay;

    if (weight < 80){
    caloriesDay = 2000  
    }else if
        (weight < 150){
    caloriesDay = 2100}
    else if
        (weight < 200 ){
    caloriesDay = 2200}
    else if
        (weight < 250){
    caloriesDay = 2300
    }else{
    caloriesDay = 2400  
    }
    
    if (age < 15){
    caloriesDay *= 1.05  
    }else if
        (age < 25){
    caloriesDay *=1.12 }
    else if
        (age < 35 ){
    caloriesDay *= 1.1}
    else if
        (age < 45){
    caloriesDay *= 1.2
    }else{
    caloriesDay *= 1.15  
    }
    
    console.log(caloriesDay)

    let afterExcercise =Math.round(caloriesDay + (exerciseHours*200/7))

    document.getElementById("result2").textContent = afterExcercise
})
