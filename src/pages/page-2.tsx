//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

import React from 'react';
import { Link } from 'gatsby';

import SEO from 'global/Seo';
import Layout from 'src/components/Layout';

//
// ────────────────────────────────────────────────────────── II ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

const SecondPage: React.FC = () => (
    <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default SecondPage;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
