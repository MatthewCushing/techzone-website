//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { css } from '@emotion/core';

import { H1 } from '../../styles';
import { Container, Form, Input } from './styles';
import Button from '../../../../re-usable/Button';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const QuestionForm: React.FC = () => {
    return (
        <Container>
            <H1 className="center">Have A Question?</H1>
            <Form
                action="https://formspree.io/cushing.matt@gmail.com"
                method="POST"
            >
                <label htmlFor="name">
                    My name is
                    <Input className="name" type="text" name="name" required />
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
        </Container>
    );
};

export default QuestionForm;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
