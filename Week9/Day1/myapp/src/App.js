import logo from './logo.svg';
import './App.css';
import Item from './component/Item';
import ItemDate from './component/ItemDate';

function App() {
  const reponse = [
    {
      itemName : "Nirma",
      itemDate : "20",
      itemMonth : "June",
      itemYear : "1998"
    },
    {
      itemName : "Nirma2",
      itemDate : "20",
      itemMonth : "June2",
      itemYear : "1998"
    },
    {
      itemName : "Nirma3",
      itemDate : "20",
      itemMonth : "June3",
      itemYear : "1998"
    },
    {
      itemName : "Nirma4",
      itemDate : "20",
      itemMonth : "June4",
      itemYear : "1998"
    },
  ];
  
  return (
    <div>
      <Item name={reponse[0].itemName}>Hello</Item>
      <ItemDate day={reponse[0].itemDate} month={reponse[0].itemMonth} year={reponse[0].itemYear}></ItemDate>
      <Item name={reponse[1].itemName}></Item>
      <ItemDate day={reponse[1].itemDate} month={reponse[1].itemMonth} year={reponse[1].itemYear}></ItemDate>
      <Item name={reponse[2].itemName}></Item>
      <ItemDate day={reponse[2].itemDate} month={reponse[2].itemMonth} year={reponse[2].itemYear}></ItemDate>
      <Item name={reponse[3].itemName}></Item>
      <ItemDate day={reponse[3].itemDate} month={reponse[3].itemMonth} year={reponse[3].itemYear}></ItemDate>
      <div className="App">
        Hello Jee
      </div>
    </div>
  );
}

export default App;
