//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { css } from '@emotion/core';

import { colors } from 'global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const container = css`
    background-color: ${colors.lightBlue};
    width: 100vw;
    position: relative;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
`;
