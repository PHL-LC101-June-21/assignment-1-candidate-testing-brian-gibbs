const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 


let candidateName = ""

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
// let questions = [];
let correctAnswers = [];
let candidateAnswers = [];

const questions = [
  'Who was the first American woman in space? ', 
  'True of False: 5 kilometer == 5000 meters? ', 
  '(5+3)/2*10 == ? ', 
  'Given the array [8, \"Orbit\", \"Trajectory\", 45], what entry is at index 2? ', 
  'What is the minimum crew size for the ISS? '
  ];



//////////  begin askForName ////////////////////////////
////////////////////////////////////////////////////

// Issues to resolve: candidateName not outputting with concenation or string literal when askForName() called in runProgram()


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');
let candidateName = input.question("What is your name? ");
 console.log(`Hello  ${candidateName}`);
 return candidateName;
} // end askForName()

//////////  end askForName /////////////////////////////
////////////////////////////////////////////////////




//////////  begin askQuestion //////////////////////////
////////////////////////////////////////////////////

/* Resources: loop to ask questions ** elegant JS page 109, refer to loop_studio_parts... Replit */


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

/*
Notes: couldn't make for loop work. While loop worked as expected. Review concepts ***
for(let i = 0; i < 4; i = i +1) { 
*/
const input = require('readline-sync');

/* const questions = [
  'Who was the first American woman in space? ', 
  'True of False: 5 kilometer == 5000 meters? ', 
  '(5+3)/2*10 == ? ', 
  'Given the array [8, \"Orbit\", \"Trajectory\", 45], what entry is at index 2? ', 
  'What is the minimum crew size for the ISS? '
  ]; */

let x = 0
  while(x < questions.length) {
    // candidateAnswers[x] = input.question(`${questions[x]}`);
    
    candidateAnswers.push(input.question(`${questions[x]}`));
    x++;
  /* candidateAnswers.push(`${x}`) = input.question(`${questions[x]}`);*/
  // x++;
} // end while loop
} //end function

//////////  end askQuestion ///////////////////////////
////////////////////////////////////////////////////




//////////  begin gradeQuiz ///////////////////////////
////////////////////////////////////////////////////

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

// Issues: candidate Name not passing into function, for loop
// only running twice because logic is wrong. moved       console.log out of if statement 

let grade = 0;
let correctAnswers = ['Sally Ride', 'True', 40, 'Trajectory', 3];


console.log(`\n\nCandidate Name: ${candidateName}`);

  for (let x = 0; x <= 4 ; x++) {
    if (candidateAnswers[x].tolowercase  == correctAnswers[x].tolowercase){
      grade++
      /* console.log(`${x++} )  ${questions[x]}`)
      console.log(`Your Answer: ${candidateAnswers[x]}`)
      console.log(`Correct Answer: ${correctAnswers[x]}`)
      console.log(`\n`); */

    } // end if statement
      
      console.log(`${x+1})  ${questions[x]}`);
      console.log(`Your Answer: ${candidateAnswers[x]}`);
      console.log(`Correct Answer: ${correctAnswers[x]}`);
      console.log(`\n`);

//console.log(${x}\) \${questions[x] \${candidateAnswers})
   
    } // end for loop

// grade = (grade/5)*100; // calculate grade percentage

console.log(`>>> Overall Grade: ${grade/5*100}% (${grade} of 5 responses correct) <<<`);
if(grade < 4){
console.log(' >>> Status: FAILED <<<');
} else {
  console.log('>>> Status: PASSED <<<')
} // end if statement console log pass/fail




} // end gradeQuiz function

//////////  end gradeQuiz ///////////////////////////
////////////////////////////////////////////////////



//////////  begin runProgram ///////////////////////
///////////////////////////////////////////////////
function runProgram() {

  // TODO 1.1c: Ask for candidate's name //
  askForName(candidateName);
  // console.log(`Hello  ${candidateName}`);
  
  // call Question loop
  askQuestion();
  
  // ** needs to calculate grade and print results
 gradeQuiz(this.candidateAnswers, candidateName); //
 
}

//////////  end runProgram ///////////////////////////
////////////////////////////////////////////////////



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};