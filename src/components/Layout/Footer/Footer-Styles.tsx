//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';
import { Link } from 'gatsby';

import { colors, fonts } from '../../global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const styles: SerializedStyles = css`
    margin-right: 40px;
`;

export const Grid = styled.div`
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

export const Row1Col1 = styled.div`
    display: flex;
    flex-direction: column;
    grid: 1 1 / 2 2;
`;

export const Row1Col2 = styled.div`
    grid: 2 1 / 3 2;
`;

export const Row1Col3 = styled.div`
    grid: 3 1 / 4 2;
    justify-self: end;
`;

export const Row2 = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    font-size: 14px;
    font-family: ${fonts.primary};
    justify-self: center;
`;

export const H1 = styled.h1`
    font-size: 1.5em;
    text-shadow: 0px 3px 6px #00000029;
    font-weight: 400;
    margin-bottom: 30px;

    &.center {
        text-align: center;
    }
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
