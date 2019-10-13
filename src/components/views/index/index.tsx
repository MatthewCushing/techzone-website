//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';

import Layout from '../../Layout';
import WorkingTogether from './components/WorkingTogether';
import { Container } from './styles';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Index: React.FC = () => {
    return (
        <Layout>
            <Container>
                <WorkingTogether />
            </Container>
        </Layout>
    );
};

export default Index;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
