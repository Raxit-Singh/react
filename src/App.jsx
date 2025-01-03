
import Accordion from './components/accordion'
import TabTest from './components/customtab/tab-test'
import GithubProfileFinder from './components/githubprofile'
import ImageSlider from './components/image-slider'
import LightDarkMode from './components/light-dark-mode'
import LoadMoreData from './components/loadmoredata'
import PopupTest from './components/popup/popuptest'
import QrCodeGenerator from './components/qrcodegenerator'
import RandomColor from './components/randomcolor'
import ScrollIndicator from './components/scrollindicator'
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
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
      <TabTest/>
      <PopupTest/>
      <GithubProfileFinder/>
    </div>
   
  )
}

export default App
