//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { css } from '@emotion/core';

import { colors } from '../../../../global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const container = css`
    grid: 3 1 / 4 2;
    justify-self: end;
`;

export const form = css`
    font-family: Inconsolata;
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 40px;
`;

export const input = css`
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
`;

export const name = css`
    width: 175px;
`;

export const full = css`
    width: 600px;
`;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
