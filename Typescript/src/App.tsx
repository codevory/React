import './App.css'
import ProcessOrderForm from './components/ProcessOrderForm'

function App() {

  return (
    <>
      <div>
       <h2>App</h2>
       <ProcessOrderForm onSubmit={(order) => {
        console.log("order placed",order);
       }
       } />
      </div>
    </>
  )
}

export default App
