import CarList from "../components/CarList";
import CarAdd from "../components/CarAdd";
import CarEdit from "../components/CarEdit";
import CarDelete from "../components/CarDelete";
import CarManager from "../components/CarManager";


function Car(){
    return(
        <div>
            <div className="d-flex gap-1">
                <CarAdd />
                <CarEdit />
                <CarDelete />
            </div>
            <CarManager />
        </div>
    )
}

export default Car;