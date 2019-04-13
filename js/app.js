
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

// let questions = [{}]

//create a for loop to create the <divs class="box"> in parent div (<main>)
for(let i = 1; i<6 ;i++){
    let userPoints = 100
    // creating and attaching children divs(columns) to <main>
    let column =  document.createElement("div")
    $("main").append(column)
    $(column).addClass(`column${i}`)
    // for loop creates the rows in each column
    for(let z = 0; z<6; z++){
        //inside div is a button
        let row =  document.createElement("button")
        
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
            $(".column5 > .categories").html(`ReUse `) 
        }
        // here lies the question buttons
        else{
            $(row).addClass(`row${z} modalLink`)
            $(column).append(row)
            $(row).attr("id", `${(z+(i*10))}`)
            // if statement inside for loop to number the button's innerText with points
            row.innerText= userPoints
            userPoints+= 100
        }
    }
}

//object of objects with my question
const questionsAnswers = {
    11: {
        question:"what composting reduces trash from going where?",
        answer: "landfill"
    },
    12: {
        question:"",
        answer: ""
    },
    13: {
        question:"",
        answer: ""
    },
    14: {
        question:"",
        answer: ""
    },
    15: {
        question:"",
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
// create event listner for click to get id
//create event listener for each box to grab the [i] object
$(".modalLink").click(function(){
    let getId = $(this).attr('id')
   console.log(getId)
   console.log(questionsAnswers[getId])
 })
 //modal open
$(".modalLink").click(()=>{
  $(".modalDisplay").css("display","flex")
 })
 //modal close
$(".close").click(()=>{
  $(".modalDisplay").css("display","none")
 })
 // create event listner for click to remove button
$("main").on("click",".modalLink",()=>{
    $(event.target).remove()
})
//create modal

//[i] object includes question and answer choices
// create score keeper in aside
//  if( guess === answer){
//                     userPoints + Number(innerText)
//                    }else {
//                     userpoints - Number(innerText)
//                    }
