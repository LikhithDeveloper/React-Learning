// if the export is not default then we have to export it like this
import {Hello} from "./Hello";  //here hello component is exported normllly
import KgButton from "./KgButton";
import {Random} from "./Random";

function App() {
  return <div>
    <h1>
    Hello
  </h1>
  {/* <Hello></Hello> we can define the components like this and */}
  <Hello />
  {/* <button>Hit me</button> */}
  <KgButton></KgButton>
  <Random/>
  <Random/>
  <Random/>
  <Random/>

  </div>
}
export default App;