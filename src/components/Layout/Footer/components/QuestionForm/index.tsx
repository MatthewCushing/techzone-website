//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { css, SerializedStyles } from '@emotion/core';

import Button from 'reusable/Button';
import * as style from './styles';

interface Props {
    styles: SerializedStyles[];
}

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const QuestionForm: React.FC<Props> = ({ styles }) => {
    return (
        <div>
            <h2 css={styles} className="center">
                Have A Question?
            </h2>
            <form
                action="https://formspree.io/cushing.matt@gmail.com"
                method="POST"
                css={style.form}
            >
                <label htmlFor="name">
                    My name is
                    <input
                        css={[style.input, style.name]}
                        type="text"
                        name="name"
                        required
                    />
                </label>
                <label htmlFor="question">
                    and I would like to ask
                    <br />
                    <input
                        css={[style.input, style.full]}
                        type="text"
                        name="question"
                        required
                    />
                    <br />
                </label>
                <label htmlFor="email">
                    Please contact me by my email:
                    <br />
                    <input
                        css={[style.input, style.full]}
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
            </form>
        </div>
    );
};

export default QuestionForm;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
