
//            √(<main>)
//               |
//             √div(s)
//             / 
//            √button  
//          /   |    \
//  √innerText  √modal  √eventlistener
//        /      | \     \
// √userPoints   /   \   √remove innerText
//       √question   √input
//                     \
//                   √ if( guess == answer){
//                     userPoints + Number(innerText)
//                    }√else {
//                     userpoints - Numeber(innerText)
//                    }


let userScore = 0
//create a for loop to create the <divs class="box"> in parent div (<main>)
for (let i = 1; i < 6; i++) {
    let userPoints = 100
    // creating and attaching children divs(columns) to <main>
    let column = document.createElement("div")
    $("main").append(column)
    $(column).addClass(`column${i}`)

    // $(`.categories:nth-child(${i})`).html(arr[i]) 
    // for loop creates the rows in each column
    for (let z = 0; z < 6; z++) {
        //inside div is a button
        let row = document.createElement("button")
        //refactoring titles for categories that doesnt work
        // let arr = ['Composting','Food Sustainability','Gardening','Slow Fashion','ReUse']
        // $(`.categories:nth-child(${(z+1)})`).html(arr[z]) 
        //if statement allows seperation of categories and quesiton
        if (z === 0) {
            $(row).addClass(`row${z} categories`)
            $(column).append(row)
            $(row).attr("id", `${(z + (i * 10))}`)
            // titles for categories
            $(".column1 > .categories").html(`Composting`)
            $(".column2 > .categories").html(`Gardening`)
            $(".column3 > .categories").html(`Food Sustainability`)
            $(".column4 > .categories").html(`Slow Fashion`)
            $(".column5 > .categories").html(`Reduce ReUse Recycle`)
        }
        // here lies the question buttons
        else {
            // $(`.categories:nth-child(${(z+1)})`).html(arr[z]) 
            $(row).addClass(`row${z} modalLink`)
            $(column).append(row)
            $(row).attr("id", `${(z + (i * 10))}`)
            // if statement inside for loop to number the button's innerText with points
            row.innerText = userPoints
            userPoints += 100
        }
    }
}
//object of objects with my questions and answers
//https://play.howstuffworks.com/quiz/compost-quiz
//https://www.dosomething.org/us/facts/11-facts-about-sustainable-agriculture
const questionsAnswers = {
    11: {
        question: "True or false? Newspaper is organic waste?",
        answer: "true"

    },
    12: {
        question: "True or false? Soil is required for composting?",
        answer: "true"
    },
    13: {
        question: "True or false? During the composting process, microorganisms from the soil eat the waste and break it down?",
        answer: "true"
    },
    14: {
        question: "Where does 57% of garbage go?",
        answer: "landfill"
    },
    15: {
        question: "How many million tons of trash do Americans create each year?",
        answer: "210"
    },
    21: {
        question: "True or false? Absorbing nutrients and water, storing food and anchoring plants to soil is the function of roots.",
        answer: "true"
    },
    22: {
        question: "Which plant part is responsible for photosynthesis, or the conversion of water and sunlight to produce food",
        answer: "leaves"
    },
    23: {
        question: "True or false? Late winter-very early spring is the best time to prune most trees, shrubs and other woody plants",
        answer: "true"
    },
    24: {
        question: "Which should be planted in the vegetable garden to repel aphids, bean beetles and other pests?",
        answer: "marigolds"
    },
    25: {
        question: "True or false? The golden rule of hedge pruning is the bottom must always remain wider than the top.",
        answer: "true"
    },
    31: {
        question: "True or False? Sustainable agriculture is the rejection of the industrial approach to food production (aka factory farms). It integrates three main things: environmental health, economic profitability, and social and economic equity.",
        answer: "true"
    },
    32: {
        question: "True or false? The ecological and social price of factory farms is: erosion, deforestation, depleted and contaminated soil and water resources, loss of biodiversity, labor abuses, and the decline of family farms.",
        answer: "true"
    },
    33: {
        question: "True or false? “Healthy” soil is an important component of sustainability. Methods to enhance and protect the productivity of the soil include using cover crops, compost/manures, avoiding traffic on wet soils, and maintaining soil cover with plants/mulches.",
        answer: "true"
    },
    34: {
        question: "True or false? There are 4 key sustainability goals: Satisfy human food needs, and contribute to biofuel needs. Enhance environmental quality. Sustain the economic viability of agriculture. Enhance the quality of life for farmers, farm workers and society as a whole.",
        answer: "true"
    },
    35: {
        question: "True or false? With this type of farming, chemical pesticides or fertilizers aren’t necessary, crop diversity is encouraged, and precipitation provides irrigation water.",
        answer: "true"
    },
    41: {
        question: "True or false? It’s estimated that less than 1 percent of material used to produce clothing is recycled into something more.",
        answer: "true"
    },
    42: {
        question: "By 2030, it’s expected that fashion waste will increase to a 148 million ton problem.",
        answer: "true"
    },
    43: {
        question: "True or false? The modern fashion industry is one of the most pulluting industries in the world.",
        answer: "true"
    },
    44: {
        question: "True or false? Cotton, a popular material in clothing, requires high levels of water and pesticides, which cause issues in developing countries.",
        answer: "true"
    },
    45: {
        question: "True or false? Only 15 percent of consumers recycle their used clothing.",
        answer: "true"
    },
    51: {
        question: "True or false? Reducing, Reusing, and Recycling make the Earth cleaner.",
        answer: "true"
    },
    52: {
        question: "Do you need to rinse out your cans, bottles, and jars before putting them in a recycling bin? ",
        answer: "yes"
    },
    53: {
        question: "Are pizza boxes recyclable?",
        answer: "no"
    },
    54: {
        question: "True or False? You can reduce your water usage by shutting off the water while you brush your teeth and taking shorter showers.",
        answer: "true"
    },
    55: {
        question: "Fill in the blank</br>Reduce means: Use less of something, creating smaller amounts of -----.",
        answer: "waste"
    },


}
//display score is aside
$("aside").prepend("<h2>Your Score</h2><p class='score'>0</p>")
//create modal
$(".modalDisplay").prepend("<div class='modalInside'><div class='holdQuestionInput'></div><p class='close'>close</p></div>")
// create event listner for click to get id
//create event listener for each box to grab the [i] object

$(".modalLink").click(function () {
    //creates new question and input field after emptying it
    $(".holdQuestionInput").prepend("<h2 class='large'>Question:</h2><p class='question'></p><div class='holdSubmit'><input type=text placeholder='who/what/where is...?'><button class='submit'>submit answer</button></div></div>")

    let getId = $(this).attr('id')

    console.log(getId)
    let question = questionsAnswers[getId].question
    console.log(question)
    $(".question").html(question)
    let answer = questionsAnswers[getId].answer

    $(".submit").click(() => {
        
        //this grabs input and consolelogs
        let userInput = $("input:text").val()
        console.log(userInput)
        console.log(answer)
       
        //this compares input to answer
        if (userInput == answer) {
            $(".large").html("Correct!")
            $(".question").empty()
            $(".holdSubmit").empty()
            pointsAdded = Number($(this).html())
            console.log(pointsAdded)
            userScore += pointsAdded
            console.log(userScore)
            return userScore
        }
        else {
            $(".large").html(`Incorrect. The answer is ${answer}`)
            $(".holdSubmit").empty()
            pointsAdded = Number($(this).html())
            console.log(pointsAdded)
            userScore -= pointsAdded
            console.log(userScore)
            return userScore
        }

    })
})

//modal open
$(".modalLink").click(() => {
    $(".modalDisplay").css("display", "flex")
})
//modal close
$(".close").click(() => {
    $(".modalDisplay").css("display", "none")
    //clears question and input feild
    $(".holdQuestionInput").empty()
    $(".score").html(userScore)
})
//modal for start page close
$(".closeIndex").click(() => {
    $(".indexPage").css("display", "none")

})
//create event listner for click to remove button
$("main").on("click",".modalLink", () => {
    $(event.target).remove()
})

$("footer").prepend("<div><button class='footerButtons quit'>Quit</button><button class='footerButtons finished'>Answered all the questions! Did I win?</button><button class='footerButtons rules'>Rules</button></div>")

let quitFunction = () => {
    $(".modalDisplay").css("display", "flex")
    $(".holdQuestionInput").prepend("<div class='large'></div><a href='./index.html' class='restart'>I'm sure</a>")
    $(".large").html(`Are you sure you want to quit? </br>If no, select Close. If yes, select "I'm sure" `)
}
$(".quit").click(quitFunction)
$(".finished").click(() => {
    $(".modalDisplay").css("display", "flex")
    $(".modalDisplay").empty()
    $(".modalDisplay").prepend("<div class='modalInside'><div class='holdQuestionInput'><div class='large'></div><a href='./index.html' class='restart'>Restart</a></div></div>")
    if (userScore > 0) { $(".large").html(`Your final score is ${userScore}. You win!!`) }
    else if (userScore == 0) { $(".large").html(`Your final score is ${userScore}. You tie!!`) }
    else { $(".large").html(`Your final score is ${userScore}.You lose!`) }
})

$(".rules").click(() => {
    $(".modalDisplay").css("display", "flex")
    $(".holdQuestionInput").prepend("<div class='large'></div>")
    $(".large").html('This is jeopardy: answer the questions correctly to recieve points </br> ( All answers should be inputed with lowercase letters). </br> Answer incorrectly and lose points.</br> Once you answer all the questions click the "Answered all the questions! Did I win?" button to see if you won! </br> Score above zero and win! Score 0 and tie. </br> Score below 0 and lose.')
})