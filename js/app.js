
//            (<main>)
//               |
//             div(s)
//             / 
//            button  
//          /   |    \
//  innerText  modal  eventlistener
//        /      | \     \
// "$ amount"   /   \   remove innerText
//       question   input
//                     \

//                    if( answer == answer){
//                     userPoints + Number(innerText)
//                    }else {
//                     userpoints - Number(innerText)
//                    }



//create a for loop to create the <divs class="box"> in parent div (<main>)
for(let i = 1; i<31 ;i++){
    let text
    if (i < 6){
        text = "Category " + i;
    }
    else if (i < 11){
        text = "100"
    }
    else if (i < 16){
        text = "200"
    }
    else if (i < 21){
        text = "300"
    }
    else if (i < 26){
        text = "400"
    }
    else if (i < 31){
        text = "500"
    }
    $("main").append("<div class='questionBlocks'>"+"<a href='#'>" + "<button class='modalButton'>" + text + "</button>"+"</a>"+"</div>")
    // $("main").on("click",".modalButton",()=>{
    //     $(event.target).remove()
    // })
  
}

//inside div is a square button
// if statement inside for loop to number the button's innerText with points
//create event listener for each box to grab the [i] object
//[i] object includes question and answer choices
// create event listner for click to remove button
//  if( guess === answer){
//                     userPoints + Number(innerText)
//                    }else {
//                     userpoints - Number(innerText)
//                    }
