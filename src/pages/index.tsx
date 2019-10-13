//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React, { FC } from 'react';
import { Global } from '@emotion/core';

import Layout from '../components/Layout';
import { Wrapper, global } from '../components/pages/index/styles';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const IndexPage: FC = () => {
    return (
        <>
            <Global styles={global} />
            <Layout>
                <p>Testing</p>
            </Layout>
        </>
    );
};

export default IndexPage;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//