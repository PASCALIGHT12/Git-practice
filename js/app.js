function daY1() {
    //DAY1
    var Studentname = "Kenechukwu";

    // if (Studentname === True) {
    //     var Studentname = "Amara";
    // }

    function greet() {
        var Studentname = "Chinonso";
    }

    let StudentId = 1876; //Paschal case or upper camel case
    let studentId = 1043; //Lower camel case or small camel case
    let studentId12 = 1043; //Lower camel case or small camel case
    let student_Id = 1043; //Lower camel case or small camel case

    const PI = 3.142; // Constant Variable


    let course = "Javascript";

    console.log(course);

    //Data types in javascript
    //Primitive data types
    let age = 20; //Number
    let name = "Kenechukwu"; //String
    let isStudent = true; //Boolean
    let address = null; //Null
    let phoneNumber; //Undefined
    let symbol = Symbol("id"); //Symbol
    let bigInt = 1234567890123456789012345678901234567890n; //BigInt

    //Non-primitives data types
    let arr = [1, 2, 3, 4, 5]; //Array
    let obj = { name: "Kenechukwu", age: 20 } //Object
    let func = function () { console.log("Hello World"); }; //Function 

    let value = arr[0]; //Accessing the first element of the array
    console.log(value);

    let value2 = obj.name; //Accessing the name property of the object

    // Assignment on the classwork
    // Write a program that will display a student name, age and course of study
    // Write a program that will display the sum of two numbers
}
daY1();




function daY2() {
    //DAY2
    //Opetrators in javascript
    //Arithmetic Operators
    let num1 = 10;
    let num2 = 5;

    let sum = num1 + num2; //Addition
    let difference = num1 - num2; //Subtraction
    let product = num1 * num2; //Multiplication
    let quotient = num1 / num2; //Division
    let remainder = num1 % num2; //Modulus
    let exponentiation = num1 ** num2; //Exponentiation

    //Comparison operators
    let isEqual = num1 == num2; //Equal to
    let isNotEqual = num1 != num2; //Not equal to
    let isStrictEqual = num1 === num2; //Strict equal to
    let isStrictNotEqual = num1 !== num2; //Strict not equal to
    let isGreaterThan = num1 > num2; //Greater Than
    let isLessThan = num1 < num2; //Less Than
    let isGreaterThanOrEqual = num1 >= num2; //Greater Than or Equal To
    let isLessThanOrEqualThan = num1 <= num2; //Less Than or Equal To

    // console.log("The sum is: " + sum)

    //Logical operators
    let and = true && false; //Logical AND
    let or = true || false; //Logaical OR
    let not = !true; //Logical NOT

    //Assignment operators
    let x = 10;
    x += 5;
    x -= 5;
    x *= 5;
    x /= 5;
    x %= 5;
    x %= 5;
    x **= 5;

    //Increnment and decrement operators
    let y = 12;
    y++; //Increment
    y--; //Decrement

    //Ternary operator
    let age1 = 18;
    let isAdult = (age1 >= 18) ? "Yes" : "No"; //Ternary operator



    //Javascript Functions
    function hello() {
        console.log("Hello World");
    }

    //Function with parameters And arguments
    function greet(name) {
        console.log("Hello, " + name);
    }

    greet("Kenechukwu"); //Calling the function with  an argument

    //Function eith return value
    function add(num1, num2) {
        let calculation = num1 + num2;
        console.log(calculation);
        return num1 + num2;
    }

    let result = add(10, 5); //Callign the function with arguments
    console.log(result); //Displaying the return value of the function


    add(10, 5); //Callign the function with arguments
    console.log(result); //Displaying the return value of the function

    add(2, 4);

    //Arrow functions
    //An arrow function is a shorter form of writing a function.
    let total = (a, b) => a + b;
    console.log(total(4, 6)); //10

    //Default Parameters in javascript
    function greet(name = "Kenechukwu") {
        console.log("Hello: " + name);
    }
    greet(); //Calling the function without an argument

    //Function Expressions

    let square = function (num) {
        return num * num;
    }
    console.log(square(5)); //25

    //Higher Order Functions
    function add(num1, num2) {
        return num1 + num2;
    }
    function displayResult(result) {
        console.log("The result is: " + result);
    }
    displayResult(add(10, 5)); //The result is 15

    //Callback function
    //A food menu
    function orderFood(food, callback) {
        console.log("You have ordered: " + food);
        callback();
    }

    function thankYou() {
        console.log("Thank you for your order");
    }
    thankYou(); //Calling the function

    function processOrder() {
        console.log("Your order is being processed");
    }
    processOrder(); //Calling the function

    function ReadytoServe() {
        console.log("Your order is ready to serve");
    }

    orderFood("Fried Rice", ReadytoServe); //You have ordered Fried Rice

    //Set timeout function
    setTimeout(function () {
        console.log("This message is displayed after 3 seconds");
    }, 3000);

    //Scope of functions
    //Global Scope
    let name = "Kenechukwu";//Global variable

    function greet() {
        console.log("Hello, " + name);//Accessing the global variable
    }

    //Local Scope
    function greet() {
        let name = "Kenechukwu";//Local variable
        console.log("Hello, " + name);//Accessing the local variable
    }

    //Block scope
    if (true) {
        let name = "Kenechukwu";//Block scoped variable
        console.log("Hello, " + name);//Accessing the block scoped variable
    }

    //Nested scope
    function outerFunction() {
        let name = "Kenechukwu";//Outer function variable
        function innerFunction() {
            let name1 = "Pascal";//Inner function variable
            console.log("Hello, " + name);//Accessing the outer function variable
        }
        innerFunction();
        console.log("Hello, " + name1);//Accessing the outer function variable
    }

    //Closures
    //Closures is when an inner function remembers the variables of its outer
    //Function even after the outer function has finished excuting.
    function closure() {
        let count = 0;//Outer function variable
        function innerFunction() {
            return count += 1;//Incrementing the outer function variable
            console.log(count);//Displaying the outer function variable
        }
        return innerFunction;//Returning the inner function
    }
    const closure2 = closure(); //Calling the outer function and storing the inner function in a variable
    console.log(closure2()); //1
    console.log(closure2()); //2
    console.log(closure2()); //3
    console.log(closure2()); //4
}
daY2();



function daY3() {
    //DAY3
    //Conditional Statements
    //If statement
    let age = 20;
    if (age >= 18) {
        console.log("You are an adult");
    }

    //If else statement
    let age1 = 20;
    if (age1 >= 18) {
        console.log("You are an adult");
    } else {
        console.log("You are not an adult");
    }

    //If else if statement
    let age2 = 20;
    if (age2 >= 18) {
        console.log("You are an adult");
    } else if (age2 >= 13) {
        console.log("You are a teenager");
    } else {
        console.log("You are a child");
    }

    //Nested if statement
    let breadname = "Lovebite";
    if (breadname === "Lovebite") {
        let freshness = "True";
        if (freshness === "True") {
            console.log("The bread is fresh");
        } else {
            console.log("The bread is not fresh");
        }
    } else {
        console.log("The bread is not Lovebite");
    }

    //Switch statement
    let day = "Monday";
    switch (day) {
        case "Monday":
            console.log("Today is Monday");
            break;
        case "Tuesday":
            console.log("Today is Tuesday");
            break;
        case "Wednesday":
            console.log("Today is Wednesday");
            break;
        case "Thursday":
            console.log("Today is Thursday");
            break;
        case "Friday":
            console.log("Today is Friday");
            break;
        case "Saturday":
            console.log("Today is Saturday");
            break;
        case "Sunday":
            console.log("Today is Sunday");
            break;
        default:
            console.log("Invalid day");
    }
}
daY3();

//Day 4
function daY4() {
    let fruits = ["Apple", "Banana", "Orange", "Mango"];
    console.log(fruits[0]); //Apple
    console.log(fruits[1]); //Banana
    console.log(fruits[2]); //Orange
    console.log(fruits[3]); //Mango

    const color = ["Red", "Green", "Blue", "Yellow"];
    let colorlength = color.length; //Getting the length of the array
    console.log(colorlength); //4'

    let StringL = "Here are the javascript Developers";
    let StringLength = StringL.length;
    console.log(StringLength);//34

    let colorIndex = color.indexOf("Blue"); //Getting the index of an element
    console.log(colorIndex); //2

    //Editing an array item
    color[0] = "Pink"; //Chaning the first item of the array
    console.log(color); //[Pink, Green, Blue, Yellow]

    //Array Methods
    //Push, pop, shift, unshift, splice, slice, concat, join, reverse, sort.

    //Push Method
    fruits.push("Strawberry"); //Adding an element to the end of the array
    console.log(fruits); //["Apple", "Banana", "Orange", "Mango", "Strawberry"]

    //Pop Method
    fruits.pop();
    console.log(fruits); //["Apple", "Banana", "Orange", "Mango"]

    //Shift method
    fruits.shift();
    console.log(fruits); //["Banana", "Orange", "Mango"]

    //Unshift method
    fruits.unshift("Pineapple");
    console.log(fruits); //["Pineapple", "Banana", "Orange", "Mango"]

    //Splice method
    //This method can be used to add remove or modify an array item.
    //Additon of an array item using splice method 
    fruits.splice(2, 0, "Grape");
    console.log(fruits); //["Pineapple", "Banana", "Grape", "Orange", "Mango"]

    //Removal of an item using splice method
    fruits.splice(2, 1);
    console.log(fruits); //["Pineapple", "Banana", "Orange", "Mango"]

    //Modification of an array using splice method
    fruits.splice(2, 1, "Watermelon");
    console.log(fruits); //["Pineapple", "Banana", "Watermelon", "Mango"]

    //Slice Method
    //This method can be used to create a new array from an existing array.
    let newFruits = fruits.slice(1, 3);
    console.log(newFruits); //["Banana", "Watermelon"]

    //Concat method
    let vegetables = ["Carrot", "Potato", "Tomato"]
    let food = fruits.concat(vegetables);
    console.log(food); //["Pineapple", "Banana", "Watermelon", "Mango", "Carrot", "Potato", "Tomato"]

    //Join method
    let foodString = food.join(",");
    console.log(foodString); //"Pineapple, Banana, Watermelon, Mango, Carrot, Potato, Tomato"

    //Includes method
    let isIncluded = food.includes("Mango");
    console.log(isIncluded); //true

    //reverse method
    let reversedFood = food.reverse();
    console.log(reversedFood); //["Tomato", "Potato", "Carrot", "Mango", "Watermelon", "Banana", "Pineapple"]


    //Methods for sorting an array
    //sort method
    let sortedFood = food.sort();
    console.log(sortedFood); //["Banana", "Carrot", "Mango", "Potato", "Pineapple", "Tomato", "Watermelon"]

    //Find method
    let foundFood = food.find(function (item) {
        return item === "Mango";
    });
    console.log(foundFood); //"Mango"

    //Filter method
    let filterFood = food.filter(function (item) {
        return item.length > 5;
    });
    console.log(filterFood); //["Banana", "Carrot", "Potato", "Pineapple", "Watermelon"]

    //Map method
    let mappedFood = food.map(function (item) {
        return item.toUpperCase();
    });
    console.log(mappedFood); //["BANANA", "CARROT", "MANGO", "POTATO", "PINEAPPLE", "TOMATO", "WATERMELON"]
}
daY4();


//Day 5
function daY5() {
    //Objects in javascript
    let Student = {
        name : "Kenechukwu",
        age : 20,
        course : "Javascript",
    };

    //Accessing object properties
    console.log(Student.name);

    //Methods in javascript
    let Student2 = {
        name : "Kenechukwu",
        age : 20,
        course : "Javascript",
        greet: function() {
            console.log("Hello, " + this.name);
        }
    };

    //Nested oblects
    let customerDetails = {
        name : "Anthony",
        age : "23",
        personalDetails : {
            password : 1234,
            accountBalance : 50000,
            email : "example@email.com"
        }
    }
    console.log(customerDetails.personalDetails.accountBalance);

    //Object.keys, object.values, object.entries

    console.log(Object.keys(customerDetails));
    console.log(Object.values(customerDetails));
    console.log(Object.entries(customerDetails));

    //Addition of a new value to the already existing Object

    customerDetails.address = "Awka Anambra State";





    //Destruction of an Object values
    const {name, age} = customerDetails;
    console.log(name, age);
}
daY5();