//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { Link } from 'gatsby';

import { H1 } from '../../styles';
import { styles, Container } from './styles';
import Icon from '../Icon';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const SocialMedia: React.FC = () => {
    return (
        <Container>
            <H1>Social Media</H1>
            <Link to="https://www.facebook.com">
                <Icon name="facebook" styles={styles} />
            </Link>
            <Link to="https://www.linkedin.com">
                <Icon name="linkedIn" styles={styles} />
            </Link>
            <Link to="https://www.tumblr.com">
                <Icon name="tumblr" styles={styles} />
            </Link>
            <Link to="https://www.twitter.com">
                <Icon name="twitter" styles={styles} />
            </Link>
            <Link to="https://www.youtube.com">
                <Icon name="youtube" />
            </Link>
        </Container>
    );
};

export default SocialMedia;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
