import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import {  FaSignOutAlt } from "react-icons/fa";
import { RiListSettingsFill } from "react-icons/ri";
import TasksList from "./TasksList";
import ItemsList from "./ItemsList";
import "./Menu.css";

export default function MenuComponent(){
    return (
        <section className="menuSection">
            <div className="header">
                <h2>Menu</h2>
                <GiHamburgerMenu  className="hamburger"/>
            </div>

            <div className="searchBox">
                <input type="text" placeholder="Search"/>
                <FaSearch className="searchIcon"/>
            </div>
        
            <TasksList/>
            <ItemsList/>
            
            <div className="tags">
                <h3>TAGS</h3>
                <div className="tagsList">
                    <div>Tag 1</div>
                    <div>Tag 2</div>
                    <div>+ Add Tag</div>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <RiListSettingsFill/>
                    <p>Settings</p>
                </div>
                <div>
                    <FaSignOutAlt/>
                    <p>Sign out</p>
                </div>
            </div>
        </section>
    );
}