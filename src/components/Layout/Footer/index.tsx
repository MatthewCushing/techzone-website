//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';

import SiteLinks from './components/SiteLinks';
import SocialMedia from './components/SocialMedia';
import QuestionForm from './components/QuestionForm';
import * as style from './styles';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Footer: React.SFC = () => {
    const date = new Date();

    return (
        <footer css={style.container}>
            <SiteLinks styles={style.heading} />
            <SocialMedia styles={style.heading} />
            <QuestionForm styles={[style.heading, style.center]} />
            <div css={style.copyright}>
                Copyright &copy; {date.getFullYear()} Matthew Cushing
            </div>
        </footer>
    );
};

export default Footer;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
