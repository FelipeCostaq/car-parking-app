import AssignmentManager from "../components/AssignmentManager";
import AssignmentAdd from "../components/AssignmentAdd";
import AssignmentEdit from "../components/AssignmentEdit";
import AssignmentDelete from "../components/AssignmentDelete";

function Assignment(){
    return(
        <div>
            <div className="d-flex gap-1">
                <AssignmentAdd />
                <AssignmentEdit />
                <AssignmentDelete />
            </div>
            <AssignmentManager />
        </div>
    )
}

export default Assignment;