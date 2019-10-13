//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import styled from '@emotion/styled';

import { colors } from '../../../../global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const Container = styled.div`
    grid: 3 1 / 4 2;
    justify-self: end;
`;

export const Form = styled.form`
    font-family: Inconsolata;
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 40px;
`;

export const Input = styled.input`
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
// ────────────────────────────────────────────────────────────────────── END ─────
//
