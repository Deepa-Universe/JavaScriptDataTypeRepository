//DataType

//Value Type
//Number DataType
let numValue; //Declaration of variable

numValue = 10;
console.log(numValue);
console.log(typeof(numValue)); //number //"typeof" operator is used to identify the data type of the data.

numValue = "Deepa";
console.log(numValue);
console.log(typeof(numValue)); //string



//String DataType
let strValue = "Deepa Reddy";
console.log(strValue);
console.log(typeof(strValue)); //string


//Boolean DataType
let boolValue = true; //Other Value is False
console.log(boolValue);
console.log(typeof(boolValue)); //string

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Reference Type
//Arrays-- //Collection of different data types
let arrayObj = [1,2,3,4,5,6,7,8,9,10];

//for loop
console.log("For Loop--------starts------------")
for(let counter=0; counter <= arrayObj.length - 1; counter++)
{
    console.log(arrayObj[counter]);
}
console.log("For Loop--------Ends------------")

//foreach loop
console.log("Foreach Loop--------starts------------")
for(let numValue2 of arrayObj)
{
    console.log(numValue2);
}
console.log("Foreach Loop--------Ends------------")

let arrayObj1=[];
    arrayObj1[0]=1;
    arrayObj1[1]=2;
    arrayObj1[5]=3;

console.log("----------------------------------------------------------------" )
for(let numValue3 of arrayObj1)
{
    console.log(numValue3); //for objects not present in array, it is printed at "undefined" with no. of undefined objects
}

console.log("----------------------------------------------------------------" )
console.log("----------------------------------------------------------------" )
console.log("----------------------------------------------------------------" )
console.log("----------------------------------------------------------------" )
console.log("----------------------------------------------------------------" )
console.log("----------------------------------------------------------------" )

//Dated- 16th January 2020
let intArrayObj = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

//for loop- works really fast with heavy flow of data.
for(let counter2 = 0; counter2 <= intArrayObj.length -1 ; counter2 ++)
{
    console.log(intArrayObj[counter2]);
}

for(let itemObjArray of intArrayObj) //This is foreach 
{
    console.log(itemObjArray);
}

//Important-If we do not have data in array in JS at few positions and we try to fetch it, it does not throw exception. 
//It takes the empty positions in object as "undefined"






