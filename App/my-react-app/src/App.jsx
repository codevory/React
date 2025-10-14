import logo from './logo.svg';
import './App.css';


// function Card(){
//   return (
//     <div className='card'>
//       <img src="https://react.dev/images/home/community/react_india_sunil.webp"></img>
//       <h1>My first Card</h1>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, illo.</p>
//     </div>
//   )
// }

//  const Pizza = () => {
// return (<>
//   <div className='details'>
//     <div className="thumbN">
//      <img src="https://codevory.github.io/food-ordering-platform/images/pizzahut.avif"></img>
//     </div>
// <h2>Propionee Pizza</h2>
// <p>Marinated cheeze pizza</p>
// <span>1</span>
//   </div>
//   </>
// )
// }

// const Burger = () => {
//   return (
//     <>
//      <div className='details'>
//     <div className="thumbN">
//      <img src="https://codevory.github.io/food-ordering-platform/images/burgerking.avif"></img>
//     </div>
// <h2>Mac Burger combo</h2>
// <p>Burger with coke free</p>
// <span>2</span>
//   </div>
    
    
//     </>
//   )
// }

// export {Pizza,Burger}

const Card = (props) => {
  return (<>
    <div className='parent'>
   <img src={props.img}></img>
   <h2>{props.name}</h2>
   <p>{props.description}</p>
    </div>
    </>
  )
}

export {Card}