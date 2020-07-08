const language= ["HTML", "CSS", "JavaScript", "PHP", "Swift", "Java"];
const needed_language=3;




console.log("مرحبا بك في برنامج توضيف المبرمجين")

let name =prompt("ما اسمك؟");
let age =parseInt(prompt("كم عمرك؟"));
let experience =parseInt(prompt("كم عدد سنوات الخبره؟"));

console.log(":لغات البرمجه")

console.log("1. " + " " + language[0]);
console.log("2. " + " " + language[1]);
console.log("3. " + " " + language[2]);
console.log("4. " + " " + language[3]);
console.log("5. " + " " + language[4]);
console.log("6. " + " " + language[5]);

let skill1 = prompt("اختر اللغة");
let skill2 = prompt("اختر لغة اخرى")

if(
    age > 25 &&
    age < 40 && 
    experience > 3 &&
(skill1 == needed_language || skill2 == needed_language)
){
    console.log("تهانينا تم قبولك يا " + " " + name)

}else{
    console.log("مرفوض")
}








function logger(temputures){
    for (let i = 0 ; i < temputures.length ; i++){
        console.log(temputures[i]);
    }
}

function toCel(temputures){
    for (let i = 0; i < temputures.length; i++){
        result_array.push(parseInt((temputures[i] - 32) * (5 / 9)));
    }
return result_array;
}

function hottestdays(temputures, min_value){
    for (let i = 0; i < temputures.length; i++){
        if (temputures[i] > min_value){
            hot.push(temputures[i]);
        }
    }
    return hot;
}

let feh_temp_array = [32, 70, 99, 106];
let threshold = 70;
let hot = [];
let result_array = [];

function loghottestdays(input_array, min_value){
    logger(toCel(hottestdays(input_array, min_value)));
}

loghottestdays(feh_temp_array, threshold);






function calc()
{   
            let n1 = parseInt(document.getElementById("n1").value);

            let n2 =  parseInt(document.getElementById("n2").value);

            let n3 = parseInt(document.getElementById("n3").value);

            let n4 = parseInt(document.getElementById("n4").value);

            let total = document.getElementById("totalgrade").value;
           
if(plus === "+"){

    
let total = document.getElementById("totalgrade").value = n1 + n2 + n3 + n4;
}
if(
    totalgrade> 90 &&
    totalgrade < 100
){
    console.log("A")
}
else if(
totalgrade >=80
){
    console.log("B")
    
}else if(
    totalgrade>=70
){
    console.log("C")
}else if(
    totalgrade>=60
){
    console.log("D")
}else if(totalgrade < 60){
    console.log("F")
}

}

calc()
 

