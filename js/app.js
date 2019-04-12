
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
//                    if( guess == answer){
//                     userPoints + Number(innerText)
//                    }else {
//                     userpoints - Numeber(innerText)
//                    }



//create a for loop to create the <divs class="box"> in parent div (<main>)
for(let i = 1; i<6 ;i++){
    let userPoints = 100
    let column =  document.createElement("div")
    $("main").append(column)
    $(column).addClass(`column${i}`)
    for(let z = 0; z<6; z++){
        let row =  document.createElement("button")
        if(z===0){
            $(row).addClass(`row${z} categories`)
            $(column).append(row)
            $(".column1 > .categories").html(`Composting`) 
            $(".column2 > .categories").html(`Food Sustainability`) 
            $(".column3 > .categories").html(`Gardening`) 
            $(".column4 > .categories").html(`Slow Fashion`) 
            $(".column5 > .categories").html(`ReUse `) 
        }
        else{
            $(row).addClass(`row${z} modalLink`)
            $(column).append(row)
            row.innerText= userPoints
            userPoints+= 100
            $("main").on("click",".modalLink",()=>{
                $(event.target).remove()
            })
        }
        
    }
    
    // let userPoints
    // if (i < 6){
    //     userPoints = "Category " + i;
    //     $(".modalLink").addClass("row1")
    // }
    // else if (i >= 6 && i < 11){
    //     userPoints = 100
    //     $(".modalLink").addClass("row2")
    // }
    // else if (i>= 11 && i < 16){
    //     userPoints = 200
    //     $(".modalLink").addClass("row3")
    // }
    // else if (i>= 16 && i < 21){
    //     userPoints = 300
    //     $(".modalLink").addClass("row4")
    // }
    // else if (i>= 21 && i < 26){
    //     userPoints = 400
    //     $(".modalLink").addClass("row5")
    // }
    // else if (i >= 26 && i < 31){
    //     userPoints = 500
    //     $(".modalLink").addClass("row6")
    // }
    // $("main").append("<a class='modalLink' href='#'>"  + userPoints + "</a>")
    // $("main").on("click",".modalLink",()=>{
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
