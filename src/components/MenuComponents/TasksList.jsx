import { MdOutlineDoubleArrow } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { FaStickyNote } from "react-icons/fa";

export default function TasksList(){
    return (
        <div className="taskBox">
            <h3>TASKS</h3>
            <li>
                <MdOutlineDoubleArrow/>
                <p>Upcoming</p>
                <div>12</div>
            </li>
            <li>
                <FcTodoList/>
                <p>Today</p>
                <div>5</div>
            </li>
            <li>
                <SlCalender/>
                <p>Calender</p>
            </li>
            <li>
                <FaStickyNote/>
                <p>Sticky Wall</p>
            </li>
        </div>
    );
}