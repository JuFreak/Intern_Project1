import { FaPlus, FaSquare } from "react-icons/fa";

export default function ItemsList(){
    return (
        <div className="itemsBox">
            <h3>LISTS</h3>
            <li>
                <FaSquare className="redSquare"/>
                <p>Personal</p>
                <div>3</div>
            </li>
            <li>
                <FaSquare className="blueSquare"/>
                <p>Work</p>
                <div>6</div>
            </li>
            <li>
                <FaSquare className="yellowSquare"/>
                <p>List 1</p>
                <div>3</div>
            </li>
            <li>
                <FaPlus/>
                <p>Add New List</p>
            </li>
        </div>
    )
}