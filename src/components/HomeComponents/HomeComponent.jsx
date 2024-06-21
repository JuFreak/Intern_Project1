import { IoSquareOutline } from "react-icons/io5";
import { FaPlus, FaSquare } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md"
import "./Home.css";
import { SlCalender } from "react-icons/sl";

export default function HomeComponent() {
    return (
        <section className="homeSection">
            <header>
                <h2>Today</h2>
                <h4>5</h4>
            </header>

            <div className="listContainer">
                <li>
                    <div className="top">
                        <FaPlus />
                        <div>Add New Task</div>
                    </div>
                </li>
                <li>
                    <div className="top">
                        <IoSquareOutline />
                        <div>Research content ideas</div>
                        <MdOutlineArrowForwardIos className="arrowIcon" />
                    </div>
                </li>
                <li>
                    <div className="top">
                        <IoSquareOutline />
                        <div>Create a database of guest authors</div>
                        <MdOutlineArrowForwardIos className="arrowIcon" />
                    </div>
                </li>
                <li>
                    <div className="top">
                        <IoSquareOutline />
                        <div>Renew driver's license</div>
                        <MdOutlineArrowForwardIos className="arrowIcon" />
                    </div>
                    <div className="bottom">
                        <div className="icon">
                            <SlCalender />
                            <p>22-03-22</p>
                        </div>
                        <div className="icon">
                            <div className="number">1</div>
                            <p>Subtasks</p>
                        </div>
                        <div className="icon">
                            <FaSquare className="redSquare" />
                            <p>Personal</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="top">
                        <IoSquareOutline />
                        <div>Consultant accountant</div>
                        <MdOutlineArrowForwardIos className="arrowIcon" />
                    </div>
                    <div className="bottom">
                        <div className="icon">
                            <FaSquare className="yellowSquare" />
                            <p>List</p>
                        </div>
                        <div className="icon">
                            <div className="number">3</div>
                            <p>Subtasks</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="top">
                        <IoSquareOutline />
                        <div>Print business card</div>
                        <MdOutlineArrowForwardIos className="arrowIcon" />
                    </div>
                </li>
            </div>
        </section>
    )
}