//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';

import SiteLinks from './components/SiteLinks';
import SocialMedia from './components/SocialMedia';
import QuestionForm from './components/QuestionForm';
import { Grid, Row2 } from './styles';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Footer: React.SFC = () => {
    const date = new Date();

    return (
        <Grid>
            <SiteLinks />
            <SocialMedia />
            <QuestionForm />
            <Row2>Copyright &copy; {date.getFullYear()} Matthew Cushing</Row2>
        </Grid>
    );
};

export default Footer;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
