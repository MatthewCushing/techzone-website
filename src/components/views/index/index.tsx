//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';

import Layout from 'src/components/Layout/index';
import WorkingTogether from './components/WorkingTogether';
import CorePrinciples from './components/CorePrinciples';
import { Container } from './styles';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Index: React.FC = () => {
    return (
        <Layout>
            <Container>
                <WorkingTogether />
                <CorePrinciples />
            </Container>
        </Layout>
    );
};

export default Index;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
