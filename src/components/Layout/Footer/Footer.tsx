//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { useSpring, animated } from 'react-spring';

import Icon from '../../Icon';
import Button from '../../reusable/Button';
import {
    A,
    Form,
    Grid,
    H1,
    Input,
    Row1Col1,
    Row1Col2,
    Row1Col3,
    Row2,
    styles,
} from '.';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

// &:hover {
//     transform: translateY(-5px) translateX(5px);
//     box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
// }

const Footer: React.SFC = () => {
    const SocialMedia = animated(Link);
    const Links = animated(A);
    const date = new Date();
    const raise = useSpring({
        from: {
            transform: 'translate3d(0, 0, 0)',
        },
        transform: 'translate3d(0, 200px, 0)',
        color: '#ff00ff',
    });

    return (
        <Grid>
            <Row1Col1>
                <H1>Site Links</H1>
                <Links style={raise} to="/">
                    HOME
                </Links>
                <Links style={raise} to="/">
                    ABOUT
                </Links>
                <Links style={raise} to="/">
                    BLOGS
                </Links>
                <Links style={raise} to="/">
                    TEAMS
                </Links>
                <Links style={raise} to="/">
                    CONTACT
                </Links>
            </Row1Col1>
            <Row1Col2>
                <H1>Social Media</H1>
                <SocialMedia style={raise} to="https://www.facebook.com">
                    <Icon name="facebook" styles={styles} />
                </SocialMedia>
                <SocialMedia style={raise} to="https://www.linkedin.com">
                    <Icon name="linkedIn" styles={styles} />
                </SocialMedia>
                <SocialMedia style={raise} to="https://www.tumblr.com">
                    <Icon name="tumblr" styles={styles} />
                </SocialMedia>
                <SocialMedia style={raise} to="https://www.twitter.com">
                    <Icon name="twitter" styles={styles} />
                </SocialMedia>
                <SocialMedia style={raise} to="https://www.youtube.com">
                    <Icon name="youtube" />
                </SocialMedia>
            </Row1Col2>
            <Row1Col3>
                <H1 className="center">Have A Question?</H1>
                <Form
                    action="https://formspree.io/cushing.matt@gmail.com"
                    method="POST"
                >
                    <label htmlFor="name">
                        My name is
                        <Input
                            className="name"
                            type="text"
                            name="name"
                            required
                        />
                    </label>
                    <label htmlFor="question">
                        and I would like to ask
                        <br />
                        <Input
                            className="full"
                            type="text"
                            name="question"
                            required
                        />
                        <br />
                    </label>
                    <label htmlFor="email">
                        Please contact me by my email:
                        <br />
                        <Input
                            className="full"
                            type="email"
                            name="_replyto"
                            required
                        />
                    </label>
                    <br />
                    <Button
                        styles={css`
                            margin-top: 20px;
                        `}
                        small
                    >
                        Submit
                    </Button>
                </Form>
            </Row1Col3>
            <Row2>Copyright &copy; {date.getFullYear()} Matthew Cushing</Row2>
        </Grid>
    );
};

export default Footer;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
