import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import NewProduct from './components/NewProduct';

function App() {


  const product = [
    {
      id : "p1",
      itemName : "Nirma",
      amount : 200,
      date : new Date(2022, 8, 19)
    },
    {
      id : "p2",
      itemName : "Surf Excel",
      amount : 300,
      itemDay : "02",
      itemMonth : "March",
      itemYear : "2021",
      date : new Date(2022, 11, 8),
    },
    {
      id : "p3",
      itemName : "Tide",
      amount : 330,
      date : new Date(2021, 12, 28),
    },
    {
      id : "p4",
      itemName : "Maggi",
      amount : 450,
      date : new Date(2021, 5, 5),
    },
  ];

  function printProductData(data)
  {
    console.log("I'm inside app.js")
    console.log(data);
  }

  return (
    <div className="App">
        <NewProduct pranay = {printProductData} />
        <Products items={product} ></Products>
    </div>
  );
}

export default App;
