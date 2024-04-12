//comment
//variables
//container - lalagyan - Storage -> Data

  //let - you can change the value later on
    //syntax:
    //keyword variable_name = value ;
    let order = 0 ;
    let remark = "passed";
    let remark2 = 'passed';


  //var - generic (old)
    var grade_2 = 80;

  //const - constant - fixed value
    const final_grade = 90;


//Data Types
// Integer =  numbers 123 = as is
// String = texts/ words = "" / ''
//array = list = [] = more than 1 value

let fruits = ["apple","banana", "cherry"];
//counting starts with 0
//index
//fruits[1];

//Display
//console.log();
console.log(order);
console.log(fruits[0]);
console.log(final_grade);
order = order + 1;
fruits[0] = "mango";
console.log(order);
console.log(fruits[0]);


//alert
//alert("Hello! Alert!");


//document.getElementById("*insert id name")
document.getElementById("name").innerText = "Michelle";
// let element = document.getElementById("name");
// element.innerText = "Michelle";


//function / methods
//-block of code that is executed once called.

//syntax:
function aa() {
    //code to be executed
    //alert("Hello! Alert!");
    let one = document.getElementById("one").innerText;
    document.getElementById("name").value = one;
}

// sampleFunction();

//JS Events
// onclick = pag pinindot ?