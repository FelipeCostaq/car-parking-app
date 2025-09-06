import AssignmentManager from "../components/AssignmentManager";
import AssignmentAdd from "../components/AssignmentAdd";
import AssignmentEdit from "../components/AssignmentEdit";

function Assignment(){
    return(
        <div>
            <div className="d-flex gap-1">
                <AssignmentAdd />
                <AssignmentEdit />
            </div>
            <AssignmentManager />
        </div>
    )
}

export default Assignment;