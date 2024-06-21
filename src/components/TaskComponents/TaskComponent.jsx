import { FaPlus } from "react-icons/fa";
import "./Task.css";
import { IoSquareOutline } from "react-icons/io5";

export default function TaskComponent() {
    return (
        <section className="taskSection">
            <h2>Task:</h2>
            <p>Renew driver's license</p>
            <p>Description</p>

            <form>
                <div className="row">
                    <label>List</label>
                    <select>
                        <option value="personal">Personal</option>
                    </select>
                </div>
                <div className="row">
                    <label>Due date</label>
                    <select>
                        <option value="11-03-22">11-03-22</option>
                    </select>
                </div>
                <div className="row">
                    <label>Tags</label>
                    <div className="tagsList">
                        <div>Tag 1</div>
                        <div className="greyTag">+ Add Tag</div>
                    </div>
                </div>
            </form>

            <h2>Subtasks:</h2>
            <div className="subTasks">
                <li>
                    <FaPlus /> 
                    <p>Add New Subtask</p>
                </li>
                <li>
                    <IoSquareOutline />
                    <p>Subtask</p>
                </li>
            </div>

            <div className="buttonBox">
                <button>Delete Task</button>
                <button>Save Changes</button>
            </div>
        </section>
    )
}