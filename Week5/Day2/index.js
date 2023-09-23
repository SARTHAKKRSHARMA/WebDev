// console.log("Lets Start");
// let rectangle = {
//     length : 1, 
//     breadth : 2,

//     draw : function() {
//         console.log("draw")
//     }
// };

// console.log(rectangle);
// console.log(rectangle.draw);
// rectangle.draw();



//Factory Function
function createRectangle(length, breadth) {
    let rectangle = 
    {
        length : length,
        breadth : breadth,

        draw : function()
        {
            console.log("Drawing Rectangle");
        }
    };
    return rectangle;
}

// let rectangleObj1 = createRectangle(2, 3);
// console.log(rectangleObj1.length);
// console.log(rectangleObj1.breadth);
// console.log(rectangleObj1.draw());


// Constructor Function
// function Rectangle(length, breadth)
// {
//     this.length = length;
//     this.breadth = breadth;
//     this.draw = function() 
//     {
//         console.log("Drawing");
//     };
// }

// console.log(Rectangle.length);

// let obj1 = new Rectangle(2, 3);
// console.log(obj1.length);

// let a = [1, 2, 3, 4];

// for(let x in a)
// {
//     console.log(a[x]);
// }

let arr = [
    {i : 1, name : "Love"},
    {i : 2, name : "Rahul"},
    {i : 3, name : "Kushal"},
    {i : 4, name : "Sarthak"}
];



console.log(arr);

arr.sort(function(obj1, obj2)
{
    name1 = obj1.name.toLowerCase();
    name2= obj2.name.toLowerCase();
    if(name1 > name2) return 1;
    return -1;
});


console.log(arr);
