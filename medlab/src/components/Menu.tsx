import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import PanelList, { PanelData } from './PanelList';
import OrganList, { OrganData } from './OrganList';
import { LabTestData } from './TestDetail';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface MenuProps {
    onAboutClick: () => void;
    onTestClick: () => void;
    handlePanelSelection: (panelID: number) => void;
    panelData: PanelData[],
    handleOrganSelection: (organID: number) => void;
    organData: OrganData[],
}

const Menu: React.FC<MenuProps> = ({ onAboutClick, handlePanelSelection, panelData ,handleOrganSelection, organData, onTestClick }) => {

    const onOrgansClick = () => {setOrganVisibility(!organVisibility)};

    const [labTestData, setlabTestData] = useState<LabTestData[]>([]);
    const [panelVisibility, setPanelVisibility] = useState(false)
    const [organVisibility, setOrganVisibility] = useState(false)

    const togglePanelVisibility = () => {
        setPanelVisibility(!panelVisibility)};
    const toggleOrganVisibility = () => setOrganVisibility(!organVisibility);

    function handleOrganClick(organ: OrganData): void {
        throw new Error('Function not implemented.');
    }
    
    const [show, setShow] = useState(false);
    const showDropdown = ()=>{
        setShow(!show);
    }
    const hideDropdown = () => {
        setShow(false);
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand" id="site-name">MEDLAB HELP</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Nav className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a href =" " className="nav-link" onClick={onAboutClick}>About</a>
            </li>
            <li className="nav-item">
                <a href =" " className="nav-link" onClick={onTestClick}>Tests</a>
            </li>
        <NavDropdown title="Panels" id="nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                    <NavDropdown.Item>
                        <PanelList panelData={panelData} handlePanelSelection={handlePanelSelection} setPanelVisibility={setPanelVisibility}/>
                    </NavDropdown.Item>
        </NavDropdown>
        <li className="nav-item">
                <div className="nav-link dropdown-toggle" onClick={toggleOrganVisibility}>
                    Organs
                </div>
                {organVisibility && (
                    <div className="dropdown-item">
                        <OrganList organData={organData} handleOrganSelection={handleOrganSelection} />
                    </div>
                )}
        </li>
            </ul>
        </Nav>
        </nav>
)};


export default Menu;