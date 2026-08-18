console.log("====================================================");
//First Assignment
// Student information
function studentInfo(name, age, course) {
    console.log("");
    function sum(num1, num2) {
        // Adding two numbers
        let result = num1 + num2;
        return result;
    }
    console.log("");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Course: " + course);
    console.log("The Sum is: " + sum(10, 10));
    console.log("");
}
studentInfo("Pascal Chibuikem Stanley-Enike", 13, "Front End Web Development - Javascript");
console.log("====================================================");


//Second Assignment
// Student Performance Report
console.log("====================================================");
function studentPerformance(studentName, mathematicsScore, englishScore, javascriptScore) {
    console.log("");
    function calculateResults() {
        let totalScore = mathematicsScore + englishScore + javascriptScore;
        let averageScore = totalScore / 3;
        let percentage = (totalScore / 300) * 100;
        console.log("");
        console.log("STUDENT REPORT");
        console.log("");
        console.log("Student Name: " + studentName);
        console.log("");
        console.log("Mathematics: " + mathematicsScore);
        console.log("English: " + englishScore);
        console.log("JavaScript: " + javascriptScore);
        console.log("");
        console.log("Total Score: " + totalScore);
        console.log("Average Score: " + averageScore.toFixed(2));
        console.log("Percentage: " + percentage.toFixed(2) + "%");
        console.log("");
    }
    calculateResults()
}
studentPerformance("Pascal Chibuikem Stanley-Enike", 78, 81, 95); //Calling the function with student name and scores as arguments
console.log("====================================================");


console.log("====================================================");
//Third assignment
//Student Result checker
//Subjects and their scores
//Assignment 1
function studentResult(English, Mathematics, Science, Civic, Computer) {
    console.log("");

    //Totals
    let total = English + Mathematics + Science + Civic + Computer;
    let average = total / 5;
    console.log("");
    console.log("Total Score: " + total + " / 500");
    console.log("Average Score: " + average + " / 100");
    console.log("");

    function scores() {
        console.log("English: " + English);
        console.log("Mathematics: " + Mathematics);
        console.log("Science: " + Science);
        console.log("Civic: " + Civic);
        console.log("Computer: " + Computer);
    }
    scores();
    console.log("");

    //Switch statement to check the result
    switch (true) {
        case (average >= 70):
            console.log("Congratulations! You Passed! With an A and an average of " + average.toFixed(2));
            break;
        case (average >= 60):
            console.log("Congratulations! You Passed! With a B and an average of " + average.toFixed(2));
            break;
        case (average >= 50):
            console.log("Congratulations! You Passed! With a C and an average of " + average.toFixed(2));
            break;
        case (average >= 45):
            console.log("Sorry, You Failed. With a D and an average of " + average.toFixed(2));
            break;
        case (average >= 40):
            console.log("Sorry, You Failed. With an E and an average of " + average.toFixed(2));
            break;
        default:
            console.log("Sorry, You Failed. With a F and an average of " + average.toFixed(2));
    }
    console.log("");
}
studentResult(80, 90, 70, 60, 50); //Calling the function with scores as arguments
console.log("====================================================");


console.log("====================================================");
//Assignment 2
//ATM MACHINE
function atmMachine(balance, amount) {
    console.log("");
    if (amount <= 0) {
        console.log("Invalid amount");
    } else if (amount > balance) {
        console.log("Insufficient funds due to low balance");
    } else {
        balance = balance - amount;
        console.log("Withdrawal amount: " + amount);
        console.log("Remaining balance: " + balance);
        console.log("Transaction successful");
    }
    console.log("");
}
atmMachine(100000, 500); //Calling the function with balance and amount as arguments
console.log("====================================================");


console.log("====================================================");
//First Classwork
function test() {
    console.log("");
    function greetUser(name) {
        return name;
    }
    function userName(user) {
        console.log("Welcome " + user);
    }
    userName(greetUser("Pascal"))
    console.log("");
}
test();
console.log("====================================================");


console.log("====================================================");
//Fourth Assignment
//Assignment 1
function resultChecker(studentName, maths, english, javascript) {
    // Function to calculate average
    function calculateAverage(maths, english, javascript) {
        return (maths + english + javascript) / 3;
    }

    // Function to get grade
    function Grade(avg) {
        if (avg >= 70 && avg <= 100) return "A";
        else if (avg >= 60) return "B";
        else if (avg >= 50) return "C";
        else if (avg >= 45) return "D";
        else if (avg >= 40) return "E";
        else return "F";
    }
    Grade(calculateAverage(maths, english, javascript));

    function displayResult() {
        // Calculate average
        let average = calculateAverage(maths, english, javascript);

        // Get grade
        let grade = Grade(average);

        // Bonus Excellence
        if (average >= 90) {
            console.log("Excellence");
        }

        // Display result
        console.log("Student Name:", studentName);
        console.log("");
        console.log("Maths:", maths);
        console.log("English:", english);
        console.log("JavaScript:", javascript);
        console.log("");
        console.log("Average:", average.toFixed(2));
        console.log("Grade:", grade);
        // Pass or Fail
        if (average >= 50) {
            console.log("Pass")
        }
        else {
            console.log("Fail")
        }
    }
    displayResult();
}
resultChecker("Pascal Chibuikem Stanley-Enike", 78, 81, 95);
console.log("====================================================");


console.log("====================================================");
//Assignment 2
//Atm Machine with PIN verification and transaction fee
function atm(accountName, balance, withdrawalAmount, enteredPin, correctPin) {
    //Pin verification
    function verifyPIN(pin) {
        return pin === correctPin;
    }
    verifyPIN(enteredPin);

    // Store original balance
    let originalBalance = balance;

    function withdrawRun() {
        // ATM Logic
        if (!verifyPIN(enteredPin)) {
            console.log("Incorrect PIN");
        }
        else if (withdrawalAmount <= 0) {
            console.log("Invalid withdrawal amount");
        }
        else if (withdrawalAmount > balance) {
            console.log("Insufficient balance");
        }
        else {
            let fee = 0;

            if (withdrawalAmount >= 20000) {
                fee = 100;
            }

            let totalWithdrawal = withdrawalAmount + fee;

            if (totalWithdrawal > balance) {
                console.log("Insufficient balance including fee");
            } else {
                balance -= totalWithdrawal;

                console.log("Withdrawal successful");
                console.log("Withdrawal Amount:", withdrawalAmount);

                if (fee > 0) {
                    console.log("Transaction Fee: 100");
                }

                console.log("Total Withdrawal (including fee):", totalWithdrawal);
                console.log("New Balance:", balance);
            }
        }
    }

    function finalDis(name = "Pitrix Bank") {
        if (!verifyPIN(enteredPin)) {
            console.log("Cannot display balance");
        }
        else if (withdrawalAmount <= 0) {
            console.log("Cannot display balance");
        }
        else if (withdrawalAmount > balance) {
            console.log("Cannot display balance");
        }
        else {
            // Final Display
            console.log("Bank Name: " + name)
            console.log("Account Name:", accountName);
            console.log("Original Balance:", originalBalance);
            console.log("Remaining Balance:", balance);
            console.log("Thank you for patronizing 'Pitrix Bank'. Come back soon!")
            return name
        }
    }
    finalDis(withdrawRun())
}
// atm("Pascal Chibuikem Stanley-Enike", 100000, 25000, 1234, 1234);
// atm("Pascal Stanley-Enike", 100000, 5000, 1234, 90)
// atm("Pascal Stanley-Enike", 100000, 500000, 1234, 1234)
atm("Pascal Stanley-Enike", 100000, 99990, 1234, 1234)
console.log("====================================================");


console.log("====================================================");
//Fifth assignment
//assignment 1
console.log("====================================================");
function loops() {

}
loops();
console.log("====================================================");

console.log("====================================================");
//Assignment 2
function scoreAnalyzer(scores) {
    console.log("Student Scores:")
    for (let i = 0; i < scores.length; i++) {
        //Pass or fail
        if (scores[i] >= 50) {
            console.log(scores[i], "You passed");
        } else {
            console.log(scores[i], "You failed");
        }

        //Grades
        if (scores[i] >= 70 && scores[i] <= 100) {
            console.log(scores[i], "Grade - A");
        } else if (scores[i] >= 60) {
            console.log(scores[i], "Grade - B");
        } else if (scores[i] >= 50) {
            console.log(scores[i], "Grade - C");
        } else if (scores[i] >= 40) {
            console.log(scores[i], "Grade - D");
        } else {
            console.log(scores[i], "Grade - F");
        }
    }

    let total = 0;
    let highest = scores[0];
    let lowest = scores[0];
    let passed = 0;
    let failed = 0;

    for (let i = 0; i < scores.length; i++) {

        total = total + scores[i];

        if (scores[i] > highest) {
            highest = scores[i];
        }

        if (scores[i] < lowest) {
            lowest = scores[i];
        }

        if (scores[i] >= 50) {
            passed++;
        } else {
            failed++;
        }
    }

    let average = total / scores.length;

    console.log("Total Score:", total);
    console.log("Highest Score:", highest);
    console.log("Lowest Score:", lowest);
    console.log("Average Score:", average);
    console.log("Students Passed:", passed);
    console.log("Students Failed:", failed);
}
let theScores = [45, 78, 92, 34, 67, 88, 51, 73, 29, 95];
scoreAnalyzer(theScores);
console.log("====================================================");