// Approach 1
// const t1 = performance.now();
// let myDiv = document.createElement("div");
// for(let i = 0; i < 100; i++)
// {
//     let para = document.createElement("p");
//     para.textContent = `This is a new para ${i}`;

//     para.addEventListener("click", () => 
//     {
//         console.log("I clicked on para");
//     })

//     myDiv.appendChild(para);
// } 

// document.body.appendChild(myDiv);
// const t2 = performance.now();

// console.log(`this took ${t2 - t1}ms`);

// Approach 2
// const t1 = performance.now();
// let myDiv = document.createElement("div");

// function paraClicker()
// {
//     console.log("I clicked on para");
// }

// myDiv.addEventListener("click", paraClicker);

// for(let i = 0; i < 100; i++)
// {
//     let para = document.createElement("p");
//     para.textContent = `This is a new para ${i}`;
//     myDiv.appendChild(para);
// } 
// document.body.appendChild(myDiv);
// const t2 = performance.now();
// console.log(`this took ${t2 - t1}ms`);



// let fragment = document.createDocumentFragment();
// for(let i = 0; i < 100; i++)
// {
//     let newElement = document.newElement("p");
//     newElement.textContent = `This is a para ${i}`;

//     fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment);


// function addPara()
// {
//     let para = document.createElement("p");
//     para.textContent = "JS is single";
//     document.body.appendChild(para);
// }

// function appendNewMessage()
// {
//     let para = document.createElement("p");
//     para.textContent = "Kya Haal Chal";
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();



console.log("Hi");

setTimeout(function()
{
    console.log("Hey");
}, -1);

console.log("T");
console.log("Hello");