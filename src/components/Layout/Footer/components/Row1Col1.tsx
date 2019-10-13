//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React, { useState } from 'react';

import { A, H1 } from '..';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Row1Col1: React.FC = () => {
    const [hover, setHover] = useState(false);
    // const raise = useSpring({
    //     from: {
    //         transform: 'translate3d(0, 0, 0)',
    //     },
    //     transform: 'translate3d(0, 200px, 0)',
    //     color: '#ff00ff',
    // });
    // const Links = animated(A);

    return (
        <Row1Col1>
            <H1>Site Links</H1>
            <A onMouseEnter={() => setHover(true)} to="/">
                HOME
            </A>
            <A onMouseEnter={() => setHover(true)} to="/">
                ABOUT
            </A>
            <A onMouseEnter={() => setHover(true)} to="/">
                BLOGS
            </A>
            <A onMouseEnter={() => setHover(true)} to="/">
                TEAMS
            </A>
            <A onMouseEnter={() => setHover(true)} to="/">
                CONTACT
            </A>
        </Row1Col1>
    );
};
