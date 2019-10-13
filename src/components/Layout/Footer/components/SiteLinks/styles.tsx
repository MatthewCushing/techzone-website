//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { colors, fonts } from '../../../../global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    grid: 1 1 / 2 2;
`;

export const A = styled(Link)`
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
