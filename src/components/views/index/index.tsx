//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';

import Layout from 'src/components/Layout/index';
import WorkingTogether from './components/WorkingTogether';
import CorePrinciples from './components/CorePrinciples';
import * as style from './styles';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Index: React.FC = () => {
    return (
        <Layout>
            <div css={style.container}>
                <WorkingTogether />
                <CorePrinciples />
            </div>
        </Layout>
    );
};

export default Index;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
