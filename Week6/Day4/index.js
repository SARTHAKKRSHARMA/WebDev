// console.log("Sarthak Here");


// function sync()
// {
//     console.log("first");
// }


// Example ---- 1
// sync();
// console.log("second");

// Example ---- 2
// setTimeout(function(){
//     console.log("Third");
// }, 3000);
// sync();
// console.log("Second");


// let myPromise = new Promise(function(resolve, reject){
//     console.log("Inside Promise Started");
//     setTimeout(() => {
//         console.log("I'm inside promise");
//     }, 10000);
//     console.log("Doosra");
//     reject(498);
//     console.log("Hello");
// });


// console.log(`Outside the promise object ${myPromise}`);
// console.log("Pehla");


// let myPromise = new Promise(function(resolve, reject){
//     setTimeout(() => {console.log("I'm inside promise 1");}, 5000);
//     resolve(2233);
//     // reject(new Error("Bhaishaab error aaya hai"));
//     // reject(4455);
// })

// myPromise.then((value) => {console.log(`then Block ${value}`)}).catch((e) => {console.log(`catch block ${e}`)});



// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {console.log("SetTimeout1 started")}, 2000);
// })

// promise1.then(() => {
//     let promise2 = new Promise((resolve, reject) => {
//         resolve("Promise2 resolved");
//     })
//     return promise2;
// }).then((value) => {console.log(value)});




// async function abcd()
// {
//     return 8;
// }

// console.log(abcd());


// async function utility()
// {
//     let t1 = performance.now();
//     let rajWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Very Hot");
//         }, 10000);
//     });
//     let t2 = performance.now();    
//     let delWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Cool");
//         }, 10000);
//     });
//     let t3 = performance.now();

//     let rW = await rajWeather;
//     let dW = await delWeather;

//     return  [rW, dW];
// }

// utility();




// async function utility()
// {
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');    
//     let output = await content.json();
//     console.log(output);
// }
// utility();

// console.log("Hello");
// console.log("Why");

// let t1;
// let t4;
// let t5;
// let p1 = new Promise((resolve, reject) => {
//     t1 = performance.now();
//     console.log("What the heck is happening");
//     t4 = performance.now();
//     setTimeout(()=>{
//         console.log(`Promise1 Resolved`);
//         resolve("done");
// }, 5000)
//     t5 = performance.now();
// });

// let t2;
// let t6;
// let t7;
// let p2 = new Promise((resolve, reject) => {
//     t2 = performance.now();
//     console.log("I'm not understanding what is happening");
//     t6 = performance.now();
//     setTimeout(()=>{
//         console.log(`Promise2 Resolved`);
//         resolve("done");
// }, 5000)
//     t7 = performance.now();
// });


// let t3 = performance.now();
// console.log("Outside Promise");


// console.log(`${t1}, ${t4} ,${t5}`);
// console.log(`${t2}, ${t6}, ${t7}`);
// console.log(`${t3}`);



// function utility()
// {
//     let weatherPromise = new Promise((resolve, reject) => {
//         try{
//             let content = fetch("https://jsonplasaceholder.typicode.com/todos/1");
//             resolve(content);
//         }
//         catch(e)
//         {
//             reject(new Error(e));
//         }    
//     })


//     weatherPromise.then((content) => {
//         let newJsonifyPromise = new Promise((resolve, reject) => {
//             try{
//                 let jsonContent = content.json();
//                 resolve(jsonContent);
//             }
//             catch(e)
//             {
//                 reject(e);
//             } 
//         })

//         newJsonifyPromise.then((value) => {console.log(value)}).catch((e) => {console.log(e)});
//     }).catch( (error) => {console.log(error)});
// }

// utility();

// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// };



// async function helper()
// {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = await content.json();
//     return response;
// }

// async function utility()
// {
//     let ans = await helper();
//     console.log(ans);
// }


// utility();
// content.then((value) => {
//     return value.json();
// }).then((response) => console.log(response)).catch((e) => {console.log(e)});


// function init()
// {
//     var name = "Mozilla";
//     function displayName()
//     {
//         console.log(name);
//     }
//     return displayName;
// }


// let fun1 =  init();
// fun1()


// function outer()
// {
//     let a = 5;
//     function inner1()
//     {
//         let a = 3;
//         console.log(a);

//         function inner2()
//         {
//             let a = 7;
//             console.log(a);

//             function inner3()
//             {
//                 console.log(a);
//             }

//             return inner3;
//         }

//         return inner2;
//     }

//     return [inner1, inner1(), inner1()()];
// }


// let x = outer();
// x[2]();


// class Person {
//     constructor(name, age)
//     {
//         this.name = name;
//         this.age = age;
//         console.log("Person Created")
//     }

//     sayHello() {
//         console.log("Hello");        
//     }
// }

let x = 10;
function foo() 
{
    console.log(x);
    let x = 20;
}

foo();
// let person1 = new Person("Sarthak", 22);
// let person2 = new Person("abc", 11);
// let person3 = new Person("def", 3);
// let person4 = new Person("ghi", 7);


// person1.sayHello()