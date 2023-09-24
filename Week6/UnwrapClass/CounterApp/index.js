let decrementElement = document.querySelector("#decrement");
decrementElement.addEventListener("click", () => 
{
    let content = document.querySelector("#value");
    let currVal = parseInt(content.textContent);
    currVal--;
    content.textContent = currVal;
})

let incrementElement = document.querySelector("#increment");
incrementElement.addEventListener("click", (event) => 
{
    let content = document.querySelector("#value");
    let currVal = parseInt(content.textContent);
    currVal++;
    content.textContent = currVal;
})