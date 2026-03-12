import { useState } from 'react'
import type { ProcessOrderInterface } from './types';
const ProcessOrderForm = ({onSubmit} : ProcessOrderInterface) => {
    const [name, setName] = useState<string>("Masala Chai")
    const [pin, setPin] = useState<number>(0);

    function handleSubmit(e:React.SyntheticEvent<HTMLFormElement>){
      e.preventDefault();
      onSubmit({name,pin,id:1})
    }

  return (
    <form onSubmit={handleSubmit}>
     <label htmlFor='name'>Enter name</label>
     <input type="text" id='name' value={name} 
     onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
     <label htmlFor='pin'>Enter Pin</label>
     <input type="number" id='pin' value={pin} 
      onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPin(Number(e.target.value) | 0)} />
      <button type='submit'>submit</button>
    </form>
  )
}

export default ProcessOrderForm
