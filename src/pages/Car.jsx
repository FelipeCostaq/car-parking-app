import CarList from "../components/CarList";
import CarAdd from "../components/CarAdd";
import CarEdit from "../components/CarEdit";


function Car(){
    return(
        <div>
            <div className="d-flex gap-1">
                <CarAdd />
                <CarEdit />
            </div>
            <CarList  />
        </div>
    )
}

export default Car;