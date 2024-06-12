import Topbar from "../App/Top-bar/Top-bar"
import Btc from "./Btc/Btc";
import CoinsMenu from "./CoinsMenu/CoinsMenu";
import Eth from "./Eth/Eth";
const App = () => {
    return ( 
        <>
        <div className="w-full p-0 bg-[#0D1421] pt-8">

          <Topbar/>
          
        <div className="max-w-[1250px] mx-auto mt-3">
           <CoinsMenu/>
           <Btc/>
           <Eth/>
           <Btc/>
           <Eth/>
           <Btc/>
           <Eth/>
           <Btc/>
           <Eth/>
           <Btc/>
           <Eth/>
           <Btc/>
           <Eth/>
           <Btc/>
           <Eth/>
           <Btc/>
           <Eth/>
           <Btc/>
           <Eth/>
        </div>
        </div>
        </>
     );
}
 
export default App;