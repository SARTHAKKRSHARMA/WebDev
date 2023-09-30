const usernameContainer = document.querySelector("[data-username]");
const searchButton = document.querySelector("[data-search-button]");
const cancelButton = document.querySelector(".cancel-btn");
const userDetails = document.querySelector(".user-details")
const noDetailsFound = document.querySelector(".no-details-found");
const loaderContainer = document.querySelector(".loader-container");

async function getDetails(username)
{
    loaderContainer.classList.add("active");
    userDetails.classList.remove("active");
    noDetailsFound.classList.remove("active");
    try
    {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        console.log("Here");
        if("message" in data) 
        {
            console.log("not found");
            throw new Error("Not Found");
        }
        loaderContainer.classList.remove("active");
        render(data);
    }
    catch(e)
    {
        loaderContainer.classList.remove("active");
        noDetailsFound.classList.add("active");
    }
}

function render(data)
{
    userDetails.classList.add("active");
    const userImage = document.querySelector("[data-user-image]");
    const userName = document.querySelector("[data-user-name]");
    const userJoiningDate = document.querySelector("[data-user-joining-data]");
    const userURL = document.querySelector("[data-user-url]");
    const userBio = document.querySelector("[data-user-bio]");
    const userRepo = document.querySelector("[data-stats-repo]");
    const userFollowers = document.querySelector("[data-stats-followers]");
    const userFollowing = document.querySelector("[data-stats-following]");
    const userLocation = document.querySelector("[user-location]");
    const userTwitter = document.querySelector("[data-twitter]");
    const userOrganisation = document.querySelector("[data-organisation]");
    const userBlog = document.querySelector("[user-blog]");

    userImage.src = data?.avatar_url;
    
    userName.textContent = data?.name;
    
    const date = new Date(data?.created_at);
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
      
      // Get the day, month, and year from the date object
    const day = date.getUTCDate();
    const monthIndex = date.getUTCMonth();
    const year = date.getUTCFullYear();
      
      // Format the date in the desired format
    const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
    userJoiningDate.textContent = `Joined ${formattedDate}`

    userURL.href = data?.html_url;
    userURL.textContent = "@" + data?.login;

    userBio.textContent = data?.bio;

    userRepo.textContent = data?.public_repos;
    userFollowers.textContent = data?.followers;
    userFollowing.textContent = data?.following;

    userLocation.textContent = (data?.location) ? data?.location : "Not Available";
    userTwitter.textContent = (data?.twitter_username) ? data?.twitter_username : "Not Available";
    userOrganisation.textContent = (data?.company) ? data?.company : "Not Available";
    userBlog.textContent =  (data?.blog) ? data?.blog : "Not Available";
}

usernameContainer.addEventListener("input", () => 
{
    if(usernameContainer.value)
    {
        cancelButton.classList.add("active");
    }   
    else
    {
        cancelButton.classList.remove("active");
    }
})

cancelButton.addEventListener("click", () => {
    if(usernameContainer.value)
    {
        usernameContainer.value = "";
        cancelButton.classList.remove("active");
    }
})

searchButton.addEventListener("click", () => {
    const input = usernameContainer.value.trim();
    if(input)
    {
        getDetails(usernameContainer.value.trim());
    }
    else
    {
        usernameContainer.value = "";
    }
});