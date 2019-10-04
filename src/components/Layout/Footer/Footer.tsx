//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

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

const Footer: React.SFC = () => {
    const date = new Date();

    return (
        <Grid>
            <Row1Col1>
                <H1>Site Links</H1>
                <A to="/">HOME</A>
                <A to="/">ABOUT</A>
                <A to="/">BLOGS</A>
                <A to="/">TEAMS</A>
                <A to="/">CONTACT</A>
            </Row1Col1>
            <Row1Col2>
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
