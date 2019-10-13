//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '../../global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const Wrapper = styled.div`
    max-width: 300px;
    margin-bottom: 1.45rem;
`;

export const global = css`
    html {
        font-size: 16px;
        background-color: ${colors.darkBlue};
    }
`;
