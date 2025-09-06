import AssignmentManager from "../components/AssignmentManager";
import AssignmentAdd from "../components/AssignmentAdd";

function Assignment(){
    return(
        <div>
            <div className="d-flex gap-1">
                <AssignmentAdd />
            </div>
            <AssignmentManager />
        </div>
    )
}

export default Assignment;