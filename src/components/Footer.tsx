//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

import React from 'react';
import { Link } from 'gatsby';
import { css, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';
import Icon from './Icon';
import { colors, fonts } from './Theme';
import Button from './pieces/Button';

//
// ──────────────────────────────────────────────────── II ──────────
//   :::::: S T Y L E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

const styles: SerializedStyles = css`
    margin-right: 40px;
`;

const Grid = styled.div`
    display: grid;
    max-height: 500px;
    min-height: 500px;
    padding-right: 140px;
    grid-template-columns: 20% 30% 50%;
    font-family: ${fonts.primary};
    grid-template-rows: 1fr auto;
    background-color: ${colors.darkGray};
    color: ${colors.lightGray};
    padding: 48px 140px 0 140px;
`;

const Row1Col1 = styled.div`
    display: flex;
    flex-direction: column;
    grid: 1 1 / 2 2;
`;

const Row1Col2 = styled.div`
    grid: 2 1 / 3 2;
`;

const Row1Col3 = styled.div`
    grid: 3 1 / 4 2;
    justify-self: end;
`;

const Row2 = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    font-size: 14px;
    font-family: ${fonts.primary};
    justify-self: center;
`;

const H1 = styled.h1`
    font-size: 1.5em;
    text-shadow: 0px 3px 6px #00000029;
    font-weight: 400;
    margin-bottom: 30px;

    &.center {
        text-align: center;
    }
`;

const A = styled(Link)`
    text-decoration: none;
    font-family: ${fonts.primary};
    font-size: 18px;
    margin-bottom: 30px;
    overflow: hidden;
    align-self: flex-start;
    transition: all 0.5s ease 0s;

    &:link {
        color: ${colors.lightGray};
    }

    &:visited {
        color: inherit;
    }

    &:hover {
        transform: translateY(-5px) translateX(5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }
`;

const Form = styled.form`
    font-family: Inconsolata;
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 40px;
`;

const Input = styled.input`
    border: none;
    border-bottom: 4px solid ${colors.lightGreen};
    background-color: transparent;
    outline: none;
    box-shadow: none;
    color: ${colors.lightGray};
    text-align: center;
    margin: 20px 10px;
    transition: all 0.3s ease 0s;

    &:focus {
        outline: none;
        border-bottom-color: #fff;
        transform: translateY(-5px);
    }

    &.name {
        width: 175px;
    }

    &.full {
        width: 600px;
    }
`;

//
// ────────────────────────────────────────────────────────── II ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
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
