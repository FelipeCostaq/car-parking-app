import SpotManager from "../components/SpotManager";
import SpotAdd from "../components/SpotAdd";

function Spot(){
    return(
        <div>
            <div className="d-flex gap-1">
                <SpotAdd />
            </div>
            <SpotManager />
        </div>
    )
}

export default Spot;