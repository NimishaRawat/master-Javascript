// switch(key){
//     case value:
//     break;

//     default:
//         break;
// }

const month = "April"

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}

// Q - what if a case has no break statement 
// except default all the cases get executed 
// after the case with has no break statement
