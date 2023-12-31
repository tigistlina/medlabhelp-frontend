import React, {useState} from "react";
import Panel from "./Panel";
import { Link } from "react-router-dom";


export interface PanelData {
    id: number,
    name: string,
    organ_id: number,
}

interface PanelListProps {
    panelData: PanelData[],
    handlePanelSelection: (panelID: number) => void,
    setPanelVisibility: React.Dispatch<React.SetStateAction<boolean>>
}


const PanelList: React.FC<PanelListProps> = ({ panelData, handlePanelSelection, setPanelVisibility }) => {

    const [inputText, setInputText] = useState<string>('');

    if (panelData.length === 0) {
        return <div>No data available.</div>;
    }
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setInputText(newValue);
    }


    return (
        <section>
            <input type="text" id="search" placeholder="Search..." onChange={onChange}/>
        <ul>
            {panelData.filter((panel) => {
                return panel.name.toLowerCase().includes(inputText.toLowerCase());
            }).map((panel) => (

            <div><Panel
                id={panel.id}
                name={panel.name}
                organ_id={panel.organ_id}
                key={panel.id}
                handlePanelSelection={handlePanelSelection}
            />
            <Link onClick={() => {setPanelVisibility(false)}}to={`paneldetails/${panel.id}`}>{panel.name} </Link>
            </div>
            ))}
        </ul>
        </section>
    );
};

export default PanelList;