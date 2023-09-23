// document.addEventListener("click", 
//     () => 
//     {
//         let elements = document.querySelectorAll("h2");
//         for(let element of elements)
//         {
//             element.style.background = "red";
//         }
//     }
// )


// const content = document.querySelector("#wrapper");

// content.addEventListener("click", (event) => {
//     console.log(event);
// });


// let content1 = document.querySelectorAll('a');
// console.log(content1);

// let thirdLink = content1[2];
// thirdLink.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log("Mazza Aaya");
// });


// let myDiv = document.createElement("div");
// function paraSetter(event){
//     console.log("I have clicked on para");
// }

// for(let i = 1; i <= 100; i++)
// {
//     let newElement = document.createElement("p");
//     newElement.textContent = "This is para" + i;
//     newElement.addEventListener("click", paraSetter);
//     myDiv.appendChild(newElement);
// }


// document.body.appendChild(myDiv);



let content = document.querySelector("#wrapper");

content.addEventListener("click", function(event)
{
    if(event.target.nodeName == "SPAN")
    {
        console.log("Span " + event.target.textContent);
    }
});