// 6)Filter the students from the class 6th 'A' section from the below array of objects.,

myArr = [

{

studenName: "jack",

studenClass: 6,

studenSection: "a"

},

{

studenName: "tom",

studenClass: 6,

studenSection: "a"

},

{

studenName: "ricky",

studenClass: 6,

studenSection: "b"

},{

studenName: "john",

studenClass: 6,

studenSection: "b"

},{

studenName: "jerry",

studenClass: 6,

studenSection: "a"

},{

studenName: "henry",

studenClass: 6,

studenSection: "b"

},{

studenName: "stephen",

studenClass: 6,

studenSection: "a"

}
]


myArr.map(function(res){
	 if(res.studenClass==6 && res.studenSection=="a")
	 {
		console.log(`students in class 6 sec A ${res.studenName}`);
	 }
	
 });
 
 
 
 //11. Sort an array of JavaScript objects based on age

let employees = [

{

firstName: 'John',

lastName: 'Doe',

age: 27,

joinedDate: 'December 15, 2017'

},

{

firstName: 'Ana',

lastName: 'Rosy',

age: 25,

joinedDate: 'January 15, 2019'

},

{

firstName: 'Zion',

lastName: 'Albert',

age: 30,

joinedDate: 'February 15, 2011'

}

];
let sorted=employees.sort((a1,b1)=> b1.age-a1.age);
console.log(sorted);


//8. Sort an array of JavaScript objects based on libraryID

library = [

{

title: 'The Road Ahead',

author: 'Bill Gates',

libraryID: 1254

},

{

title: 'Walter Isaacson',

author: 'Steve Jobs',

libraryID: 4264

},

{

title: 'Mockingjay: The Final Book of The Hunger Games',

author: 'Suzanne Collins',

libraryID: 3245

},

{

title: 'Adventures of Tom Sawyer',

author: 'Mark Twain',

libraryID: 1345

},

{

title: 'Adventures of Sherlock Holmes',

author: 'Sir Arthur Conan Doyle',

libraryID: 2245

}

];
let sortedArr=library.sort(function(x1,y1){
	return x1.libraryID-y1.libraryID;
});
console.log(sortedArr);

// let sortedArr=library.sort((x,y)=>x.libraryID-y.libraryID);
// console.log(sortedArr);





//7. Write a code to replace the value 6 in the following object with 606,

let obj={
foo: { a: "hello", b: "world" },

bar: ["example", "mem", null, { xyz: 6 }, 88],

qux: [4, 8, 12]
};


obj.bar[3].xyz=606;
console.log(obj);