
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
        //inside div is a button
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
            // if statement inside for loop to number the button's innerText with points
            row.innerText= userPoints
            userPoints+= 100
            // create event listner for click to remove button
            $("main").on("click",".modalLink",()=>{
                $(event.target).remove()
            })
        }
        
    }
}



//create event listener for each box to grab the [i] object
//[i] object includes question and answer choices

//  if( guess === answer){
//                     userPoints + Number(innerText)
//                    }else {
//                     userpoints - Number(innerText)
//                    }
