
import Accordion from './components/accordion'
import ImageSlider from './components/image-slider'
import LightDarkMode from './components/light-dark-mode'
import LoadMoreData from './components/loadmoredata'
import QrCodeGenerator from './components/qrcodegenerator'
import RandomColor from './components/randomcolor'
import StarRating from './components/starrating'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'

function App() {
  

  return (
    <div>
      <Accordion/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/>
      <LoadMoreData/>
      <TreeView menu={menus}/>
      <QrCodeGenerator/>
      <LightDarkMode/>
    </div>
   
  )
}

export default App
