const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay  = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[copy-btn]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-button");
const allCheckbox = document.querySelectorAll("input[type=checkbox]");

let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider(passwordLength);

function handleSlider()
{
    inputSlider.value = passwordLength;
    lengthDisplay.textContent = passwordLength;
}

function setIndicator(color)
{
    indicator.computedStyleMap.backgroundColor = color;
}


function getRandomInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumber()
{
    return getRandomInteger(0, 9);
}

function generateRandomlowercase()
{
    return String.fromCharCode(getRandomInteger('a'.charCodeAt(0), 'z'.charCodeAt(0)));
}

function generateRandomUppercase()
{
    return String.fromCharCode(getRandomInteger('A'.charCodeAt(0), 'Z'.charCodeAt(0)));
}

function generateRandomSymbol()
{
    let symbols = '~`!@#$%^&*()_+{}|-=\\][:;<>?/';
    return symbols.charAt(getRandomInteger(0, symbols.length-1));
}


function calcStrength()
{
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(hasNumber.checked) hasLower = true;
    if(hasSymbol.checked) hasSymbol = true;

    if(hasUpper && hasLower && (hasNumber || hasSymbol) && password.length >= 8)
    {
        setIndicator("#0f0");
    }
    else if((hasLower || hasUpper) && (hasNumber || hasSymbol) && password.length >= 6)
    {
        setIndicator("#ff0");
    }
    else
    {
        setIndicator("#f00");
    }
}


async function copyContent()
{
    try
    {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.textContent = "copied";
    }
    catch(e)
    {
        copyMsg.textContent = "failed";
    }
    copyMsg.classList.add("active");
    setTimeout(() => copyMsg.classList.remove("active"), 2000);       
}

function handleCheckBoxChange() 
{
    if(this.checked) checkCount++;
    else checkCount--;
    if(passwordLength < checkCount)
    {
        passwordLength = checkCount;
        handleSlider();
    }
}

function createPassword(optionsAvailable)
{
    for(let i = 0; i < optionsAvailable.length; i++)
    {
        password += optionsAvailable[i]();    
    }


    let min = 0;
    let max = optionsAvailable.length-1;
    let currLength = optionsAvailable.length;
    
    while(currLength < passwordLength)
    {
        let index = getRandomInteger(min, max);
        password += optionsAvailable[index]();
        currLength++;
    }
    return password    
}

function shufflePassword()
{
    let shufflePassArr = password.split("");
    for(let i = shufflePassArr.length - 1; i >= 0; i--)
    {
        let j = Math.floor(Math.random() * (i + 1));
        const temp = shufflePassArr[i];
        shufflePassArr[i] =  shufflePassArr[j];
        shufflePassArr[j] = temp;
    }

    password = shufflePassArr.join("");
    return password;
}


inputSlider.addEventListener("input", (event) => {
    passwordLength = Math.max(event.target.value, checkCount);
    handleSlider();
})

copyBtn.addEventListener("click", (event) => {
    if(passwordDisplay.value)
    {
        copyContent();
    }
})

allCheckbox.forEach((checkbox) => 
{
    checkbox.addEventListener("change", handleCheckBoxChange);
})


generateBtn.addEventListener("click", (event) => {
    if(checkCount > 0)
    {
        password = "";
        optionsAvailable = [];
        if(uppercaseCheck.checked) optionsAvailable.push(generateRandomUppercase);
        if(lowercaseCheck.checked) optionsAvailable.push(generateRandomlowercase);
        if(symbolsCheck.checked) optionsAvailable.push(generateRandomSymbol);
        if(numbersCheck.checked) optionsAvailable.push(generateRandomNumber);

        password = createPassword(optionsAvailable);

        password = shufflePassword();
        passwordDisplay.value = password;   
        calcStrength();
    }
})