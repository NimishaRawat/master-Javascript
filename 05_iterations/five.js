 const coding = [ "js", 'ruby', 'java', 'python']

coding.forEach( function (item){
    // console.log(item)
})


coding.forEach( (item) => {
    // console.log(item)
} )

function printMe(item){
    // console.log(item);
    
}

// coding.forEach(printMe)

const myCoding = [
    {
        languageName : 'Javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    }
]

myCoding.forEach(( item ) => {
    //console.log(item.languageFileName);
} )



const religion = ['Hindu','Muslim', 'Sikh', 'Christan']

const values = religion.forEach( (item) => {
    // console.log(item);
    // return item nothing will get retured
} )

//console.log(values);

//To return the values we use filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newMyNums = myNums.filter( (num) => {
    return num > 4
} )


const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
} )

console.log(newNums);

