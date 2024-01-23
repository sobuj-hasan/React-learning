import React from "react";
import Card from "./Components/Card";
import Data from "./data.json";
import List from "./Components/UniqList/List";
import CardOne from "./Components/CardOne";
import Card1 from "./Components/ClassComponents/Card1";
import Card2 from "./Components/ClassComponents/Card2";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import ReactBootstrap from "./Components/ReactBootstrap/ReactBootstrap";
import State from "./Components/State/State";

// function App(){
  // // Using for loop
  // let items = [];
  // for(let x = 0; x<Data.length; x++){
  //   items.push(<Card titleText={Data[x].title} descText={Data[x].description} />);
  // }

  // return (
  //   <div>
  //     <h1 className="headingStyle">To Do App</h1>
  //     <div className="cardArea">
  //       {/* <Card titleText={Data[0].title} descText={Data[0].description}/>
  //       <Card titleText={Data[1].title} descText={Data[1].description}/>
  //       <Card titleText={Data[2].title} descText={Data[2].description}/> */}

  //       {/* {items} */}

  //       {Data.map((item, index) => (
  //         <Card key={index} titleText={item.title} descText={item.description} />
  //       ))}
  //     </div>
  //   </div>
  // );

  // 28 December 2023

  // return (
  //   <List />
  // );

  // Nested Mapping

  // const users = [
  //   {
  //     fullName: "Anisul Islam",
  //     age: 32,
  //     phones: [
  //       {
  //         home: "Home: 01302509844",
  //       },
  //       {
  //         office: "Office: 01234567891",
  //       },
  //     ],
  //   },
  //   {
  //     fullName: "Saiful Islam Sobuj",
  //     age: 25,
  //     phones: [
  //       {
  //         home: "Home: 01302509844",
  //       },
  //       {
  //         office: "Office: 01234567891",
  //       },
  //     ],
  //   },
  // ];

  // return (
  //   <div>
  //     <h1>Nested Loop</h1>
  //     {
  //       users.map((user, index) => 
  //         <article>
  //           <h3>{user.fullName}</h3>
  //           <p>{user.age}</p>
  //           {
  //             user.phones.map((phone, index) => 
  //               <div>
  //                 <p>{phone.home}</p>
  //                 <p>{phone.office}</p>
  //               </div>
  //             )
  //           }
  //         </article>
  //       )
  //     }
  //   </div>
  // );

  // return (
  //   <div>
  //     <CardOne name="Card One Title" description="This is the card one description" />
  //   </div>
  // );

  // React Project Template

  // Start the react Assignment


  // Class Component

  // return (
  //   <div>
  //     <Card1 name="This is card 1" description="This is Card 1 Description" />
  //     <Card2 name="This is Card 2 from Class Component" description="This is Card 2 Description"/>
  //   </div>
  // )

  
// }

// ==========================

// Component Under the Hood //Basic concept for functional component

// function Welcome(){
//   return React.createElement('h1', {}, 'Welcome');
// }
// function Welcome2(){
//   return <h1>Saiful Islam Sobuj</h1>;
// }

// function Todo() {
//   return (
//     <div>
//       <h1>Todo Title</h1>
//       <p>Todo Description</p>
//     </div>
//   );
// }

// function Todo2(){
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Todo Title 2'),
//     React.createElement('p', {}, 'Todo Description 2')
//   );
// }

// export default function App(){
//   return (
//     <div>
//       <Welcome />
//       <Welcome2 />
//       <Todo />
//       <Todo2 />
//     </div>
//   )
// }

// Use React Icon in my project

  // const App = () => {
  //   return (
  //     <div>
  //       <h3>Welcome to react</h3>
  //       <h4>React Icon</h4>
  //       {/* Icon */}
  //       <FaFacebook className="social-icon" />
  //       <FaYoutube className="social-icon" />
  //     </div>
  //   );
  // };

// Use React Bootstrap

  // const App = () => {
  //   return (
  //     <div>
  //       <ReactBootstrap />
  //     </div>
  //   );
  // }


// Use State, setState 
  
  const App = () => {
    return (
      <div>
        <State />
      </div>
    )
  }
  

export default App;

