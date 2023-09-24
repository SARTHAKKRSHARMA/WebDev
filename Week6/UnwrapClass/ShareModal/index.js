function displayShareModal(events)
{
    const element = document.querySelector("#share-modal");
    element.classList.add("active");
}

function closeShareModal(events)
{

    const element = document.querySelector("#share-modal");
    element.classList.remove("active");
}
    
const element = document.querySelector("#share-modal");
element.addEventListener("click", (event)=>{
    if(event.target.id === "share-modal")
    {
        closeShareModal();
    }
});