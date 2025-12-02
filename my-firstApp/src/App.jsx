import card from './components/card.jsx'
import user from './components/users.jsx'
import {Savebtn} from './components/button1.jsx'
// import { encodeEntities } from 'mermaid/dist/utils.js'
import { Bookmark } from 'lucide-react';
import './App.css'



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

// const Card = (props) => {
//   return (<>
//     <div className='items'>
//    <img src={props.img}></img>
//    <h2>{props.name}</h2>
//    <p>{props.description}</p>
//     </div>
//     </>
//   )
// }

// export {Card}

const JobCard = () => {

  return (
  <div className='card'>
   <div className='card-top'>
    <img src="https://w7.pngwing.com/pngs/832/502/png-transparent-amazon-logo-text-brand-amazon-text-service-retail-thumbnail.png"></img>
    <button className='saveBtn'>save <Bookmark className='svgBtn' size={16} fill="white"/>  </button>
   </div>

   <div className='card-center'>
    <div className='cenTop'>
      <h3>Amazon</h3> <span>5 days ago</span>
    </div>
    <div className='cenMed'>
      <h2>Senior UI/UX designer</h2>
      <div className='cenBtm'>
        <span>Part-Time</span>
        <span>Senior Level</span>
      </div>
    </div>
   </div>

<div className='card-btm'>
<div className='btm-line'>
  <span>$120/hr</span>
  <span>Mumbai,India</span>
</div>

<button className='aply-btn'>Apply now</button>


</div>
  </div>
  )
}

export {JobCard,Job}


const Job = (props) => {

  return (
  <div className='card'>
   <div className='card-top'>
    <img src={props.img}></img>
    <button className='saveBtn'>save <Savebtn className="svgBtn"/> </button>
   </div>

   <div className='card-center'>
    <div className='cenTop'>
      <h3>{props.companyName}</h3> <span>{props.postAge}</span>
    </div>
    <div className='cenMed'>
      <h2>{props.jobTitle}</h2>
      <div className='cenBtm'>
        <span>{props.schedule}</span>
        <span>{props.experience}</span>
      </div>
    </div>
   </div>

<div className='card-btm'>
<div className='btm-line'>
  <span>{props.wage}</span>
  <span>{props.location}</span>
</div>

<button className='aply-btn'>Apply now</button>


</div>
  </div>
  )
}
