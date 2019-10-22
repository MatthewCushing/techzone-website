//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';

import SiteLinks from './components/SiteLinks';
import SocialMedia from './components/SocialMedia';
import QuestionForm from './components/QuestionForm';
import * as cssProps from './styles';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Footer: React.SFC = () => {
    const date = new Date();

    return (
        <footer css={cssProps.container}>
            <SiteLinks styles={cssProps.heading} />
            <SocialMedia styles={cssProps.heading} />
            <QuestionForm styles={[cssProps.heading, cssProps.center]} />
            <div css={cssProps.copyright}>
                Copyright &copy; {date.getFullYear()} Matthew Cushing
            </div>
        </footer>
    );
};

export default Footer;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
