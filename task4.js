let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let sum=0;

for(let count in student )
{
//    console.log(count);
sum++;
}

console.log(sum);