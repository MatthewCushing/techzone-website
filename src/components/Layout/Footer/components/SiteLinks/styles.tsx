//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { css } from '@emotion/core';

import { colors, fonts } from '../../../../global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const container = css`
    display: flex;
    flex-direction: column;
    grid: 1 1 / 2 2;
`;

export const links = css`
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
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }
`;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
