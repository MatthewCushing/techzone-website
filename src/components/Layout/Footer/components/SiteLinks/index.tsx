//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';

import { A, Container } from './styles';
import { H1 } from '../../styles';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const SiteLinks: React.FC = () => {
    return (
        <Container>
            <H1>Site Links</H1>
            <A to="/">HOME</A>
            <A to="/">ABOUT</A>
            <A to="/">BLOGS</A>
            <A to="/">TEAMS</A>
            <A to="/">CONTACT</A>
        </Container>
    );
};

export default SiteLinks;
