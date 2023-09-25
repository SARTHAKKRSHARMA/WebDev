const uppercase = [];
for(let ch = 'A'.charCodeAt(0); ch <= 'Z'.charCodeAt(0); ch++) uppercase.push(String.fromCharCode(ch));


const lowercase = [];
for(let ch = 'a'.charCodeAt(0); ch <= 'z'.charCodeAt(0); ch++) lowercase.push(String.fromCharCode(ch));

const number = [];
for(let num = 1; num <= 9; num++) number.push(num.toString());

const symbol = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', ':', '{', '}', '[', ']', '|', '\\', ';', '<', ',', '>', '.', '?', '/'];

const allOptions = [uppercase, lowercase, number, symbol];

function generateRandomPassword(allowedOption, length)
{
    let ans = "";
    while(length > 0)
    {
        let min_i = 0;
        let max_i = allOptions.length -1;
        let random_i = Math.floor(Math.random() * (max_i - min_i + 1)) + min_i;
        if(allowedOption[random_i])
        {
            let min_j = 0;
            let max_j = allOptions[random_i].length - 1;
            let random_j = Math.floor(Math.random() * (max_j - min_j + 1)) + min_j;
            ans += allOptions[random_i][random_j];
            length--;
        }
    }


    return ans;
}

module.exports = generateRandomPassword;



// console.log(generateRandomPassword([true, true, true, true], 20));
