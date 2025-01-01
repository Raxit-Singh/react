
import Accordion from './components/accordion'
import ImageSlider from './components/image-slider'
import RandomColor from './components/randomcolor'
import StarRating from './components/starrating'

function App() {
  

  return (
    <div>
      <Accordion/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/>
    </div>
   
  )
}

export default App
