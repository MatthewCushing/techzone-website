import React from 'react';
import Layout from '../components/Layout';

export interface TestProps {}

const Test: React.SFC<TestProps> = () => {
    return (
        <div>
            <ul>
                <li>This</li>
                <li>Is</li>
                Add some text here
                <h1>Some more text</h1>
                <li>Html</li>
                <li>Here</li>
            </ul>
        </div>
    );
};

export default Test;
