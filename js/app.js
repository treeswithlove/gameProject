
//            √(<main>)
//               |
//             √div(s)
//             / 
//            √button  
//          /   |    \
//  √innerText  modal  √eventlistener
//        /      | \     \
// √userPoints   /   \   √remove innerText
//       question   input
//                     \
//                    if( guess == answer){
//                     userPoints + Number(innerText)
//                    }else {
//                     userpoints - Numeber(innerText)
//                    }


let userScore = 0
//create a for loop to create the <divs class="box"> in parent div (<main>)
for(let i = 1; i<6 ;i++){
    let userPoints = 100
    // creating and attaching children divs(columns) to <main>
    let column =  document.createElement("div")
    $("main").append(column)
    $(column).addClass(`column${i}`)
   
    // $(`.categories:nth-child(${i})`).html(arr[i]) 
    // for loop creates the rows in each column
    for(let z = 0; z<6; z++){
        //inside div is a button
        let row =  document.createElement("button")
        //refactoring titles for categories that doesnt work
        // let arr = ['Composting','Food Sustainability','Gardening','Slow Fashion','ReUse']
        // $(`.categories:nth-child(${(z+1)})`).html(arr[z]) 
        //if statement allows seperation of categories and quesiton
        if(z===0){
            $(row).addClass(`row${z} categories`)
            $(column).append(row)
            $(row).attr("id", `${(z+(i*10))}`)
            // titles for categories
            $(".column1 > .categories").html(`Composting`) 
            $(".column2 > .categories").html(`Food Sustainability`) 
            $(".column3 > .categories").html(`Gardening`) 
            $(".column4 > .categories").html(`Slow Fashion`) 
            $(".column5 > .categories").html(`ReUse`) 
        }
        // here lies the question buttons
        else{
            // $(`.categories:nth-child(${(z+1)})`).html(arr[z]) 
            $(row).addClass(`row${z} modalLink`)
            $(column).append(row)
            $(row).attr("id", `${(z+(i*10))}`)
            // if statement inside for loop to number the button's innerText with points
            row.innerText= userPoints
            userPoints+= 100
        }
    }
}
//object of objects with my questions and answers
const questionsAnswers = {
    11: {
        question:"Composting reduces trash from going where?",
        answer: "landfill"
    },
    12: {
        question:"q",
        answer: "a"
    },
    13: {
        question:"w",
        answer: "b"
    },
    14: {
        question:"e",
        answer: "c"
    },
    15: {
        question:"r",
        answer: ""
    },
    21: {
        question:"",
        answer: ""
    },
    22: {
        question:"",
        answer: ""
    },
    23: {
        question:"",
        answer: "",
        input: ""
    },
    24: {
        question:"",
        answer: "",
        input: ""
    },
    25: {
        question:"",
        answer: "",
        input: ""
    },
    31: {
        question:"",
        answer: "",
        input: ""
    },
    32: {
        question:"",
        answer: "",
        input: ""
    },
    33: {
        question:"",
        answer: "",
        input: ""
    },
    34: {
        question:"",
        answer: "",
        input: ""
    },
    35: {
        question:"",
        answer: "",
        input: ""
    },
    41: {
        question:"",
        answer: "",
        input: ""
    },
    42: {
        question:"",
        answer: "",
        input: ""
    },
    43: {
        question:"",
        answer: "",
        input: ""
    },
    44: {
        question:"",
        answer: "",
        input: ""
    },
    45: {
        question:"",
        answer: "",
        input: ""
    },
    51: {
        question:"",
        answer: "",
        input: ""
    },
    52: {
        question:"",
        answer: "",
        input: ""
    },
    53: {
        question:"",
        answer: "",
        input: ""
    },
    54: {
        question:"",
        answer: "",
        input: ""
    },
    55: {
        question:"",
        answer: "",
        input: ""
    },
  
  
}
 //create modal
$(".modalDisplay").prepend("<div class='modalInside'><p class='close'>Close</p><div class='holdQuestionInput'></div>")
// create event listner for click to get id
//create event listener for each box to grab the [i] object

$(".modalLink").click(function(){
    //creates new question and input field after emptying it
$(".holdQuestionInput").prepend("<h1>Question:</h1><p class='question'></p><input type=text placeholder='who/what/where is...?'><button class='submit'>submit answer</button></div>")

let getId = $(this).attr('id')
   console.log(getId)
   let question = questionsAnswers[getId].question
   console.log(question)
$(".question").html(question)
 let answer =  questionsAnswers[getId].answer

    $(".submit").click(()=>{
     //this grabs input and consolelogs
    let userInput = $("input:text").val()
    console.log(userInput)
    console.log(answer)
    //this compares input to answer
    if(userInput == answer){
        console.log("you got it")
        pointsAdded = Number($(this).html())
        console.log(pointsAdded)
        userScore += pointsAdded
        console.log(userScore)
        return userScore
    }
    else{
        console.log("better luck next time")
        pointsAdded = Number($(this).html())
        console.log(pointsAdded)
        userScore -= pointsAdded
        console.log(userScore)
        return userScore
    }
    })
 
 }) 

//modal open
$(".modalLink").click(()=>{
  $(".modalDisplay").css("display","flex")
 })
 //modal close
$(".close").click(()=>{
    $(".modalDisplay").css("display","none")
    //clears question and input feild
  $(".holdQuestionInput").empty()
 })
 // create event listner for click to remove button
$("main").on("click",".modalLink",()=>{
    $(event.target).remove()
})