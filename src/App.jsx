
import Accordion from './components/accordion'
import RandomColor from './components/randomcolor'
import StarRating from './components/starrating'

function App() {
  

  return (
    <div>
      <Accordion/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
    </div>
   
  )
}

export default App
