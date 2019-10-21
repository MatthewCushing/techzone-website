//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import styled from '@emotion/styled';

import { colors } from '../../global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const Container = styled.div`
    background-color: ${colors.lightBlue};
    width: 100vw;
    position: relative;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
`;
