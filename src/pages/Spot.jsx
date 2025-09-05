import SpotManager from "../components/SpotManager";
import SpotAdd from "../components/SpotAdd";
import SpotEdit from "../components/SpotEdit";
import SpotDelete from "../components/SpotDelete";

function Spot(){
    return(
        <div>
            <div className="d-flex gap-1">
                <SpotAdd />
                <SpotEdit />
                <SpotDelete />
            </div>
            <SpotManager />
        </div>
    )
}

export default Spot;