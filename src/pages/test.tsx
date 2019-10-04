import React from 'react';
import Layout from '../components/Layout';

export interface TestProps {}

const Test: React.SFC<TestProps> = () => {
    return (
        <div>
            <ul>
                <li>This</li>
                <li>Is</li>
                <li>Html</li>
                <li>Here</li>
            </ul>
        </div>
    );
};

export default Test;
