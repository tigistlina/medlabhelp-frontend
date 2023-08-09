import React from 'react';
import LabTestList from './LabTestList';
import { AltNameData } from "./AltNameList";

export interface LabTestData {
    id: number,
    panel_id: number,
    organ_id: number,
    name: string,
    description: string,
    info_url: string,
    normal_reference: string,
    unit_of_measure: string,
}

interface TestDetailProps {
    selectedTest: LabTestData | null,
    altNameData: AltNameData[],
    }

    const TestDetail: React.FC<TestDetailProps> = ({ selectedTest, altNameData}) => {

    return (
        <section>
            {selectedTest && (
            <div id="test-detail">
                <h2>Test Details</h2>
                <p>Name: {selectedTest.name}</p>
                <p>Description: {selectedTest.description}</p>
                <p>Learn More:
                <a href={selectedTest.info_url} target="_blank" rel="noopener noreferrer">{selectedTest.info_url}</a>
                </p>
                <p>Normal Reference: {selectedTest.normal_reference}</p>
                <p>Unit of Measure: {selectedTest.unit_of_measure}</p>
                <p>Alternate Name: </p>
                <ul>
                    {altNameData.map((altName)=> (
                        <li key={altName.id}>{altName.name}</li>
                    ))}
                </ul>
            </div>
            )}
        </section>
        );
    };

    export default TestDetail;
