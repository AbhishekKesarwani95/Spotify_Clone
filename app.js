let arr=[1,2,3,4,5];

let b={abhi:"123", rahul:123};


let squareSumAv=(...arr)=>{
    let square=arr.map((el)=>{
        return el*el;
    });

    let sum=square.reduce((sum1,el)=>{
        return sum1+el;
    });

    let average=sum/arr.length;

    return average;

    
}

let orginialPlus5=(...arr)=>{
    return arr.map((el)=>el+5)
}

console.log(squareSumAv(...arr));
console.log(orginialPlus5(...arr));





































function largest(arr,num){
    let arr1=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

function countryLar(country){
    let lengthOfc=0;
    for(let i=0;i<country.length;i++){
        if(country[i].length>lengthOfc){
            lengthOfc=country[i].length;
        }
    }
}

function countOfVowels(vowel){
    let count=0;
    for(let i=0;i<vowel.length;i++){
        if(vowel[i]=='a' || vowel[i]=='e' || vowel[i]=='i' || vowel[i]=='o' || vowel[i]=='u'){
            count++;
        }
    }
    return count;
}

function generateRandom(start, end){
    let random=0;
    let diff=end-start;
    for(let i=start;i<=end;i++){
        random=Math.floor(Math.random()*diff)+start;
        //console.log(random);
    }
    
}
generateRandom(21,30);
let vowel=['a','b','c','d','e','i','o','u'];
//console.log(countOfVowels(vowel));
//console.log(largest(arr,num));

let random=Math.floor(Math.random()*6)+1;
//console.log(random)

let carObject={
    name:'AUdi',
    model:'X8',
    color:'white'
};

//console.log(carObject.name)

let person={
    name:'abhishek',
    age:24,
    city:'Prayagraj'
};
person.city='New York';
person.country='United state';

//console.log(person)

document.getElementById('explorePremium').style.display='none';
function hideDiv(){
    document.getElementById('homeDiv').style.display='none';
    document.getElementById('explorePremium').style.display='block';
}

