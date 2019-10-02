//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

import React from 'react';
import styled from '@emotion/styled';

import { SerializedStyles } from '@emotion/core';
import { colors, fonts } from '../Theme';

//
// ────────────────────────────────────────────────── II ──────────
//   :::::: T Y P E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

interface Props {
    children: string;
    disabled?: boolean;
    secondary?: boolean;
    small?: boolean;
    arrow?: boolean;
    styles: SerializedStyles;
    onClick?: () => void;
}

type ButtonProps = {
    secondary: boolean;
    small: boolean;
    arrow?: boolean;
};

//
// ──────────────────────────────────────────────────── III ──────────
//   :::::: S T Y L E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

const SubmitButton = styled.button<ButtonProps>`
    border: none;
    font-family: ${fonts.primary};
    color: #fff;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    letter-spacing: 1.2px;
    border-radius: 5px;
    padding: ${(props): number | string => (props.small ? '3px 30px' : 'auto')};
    background-color: ${(props): string =>
        props.secondary ? colors.blueButton : colors.lightGreen};
    font-size: ${(props): number => (props.small ? 14 : 18)}px;
`;

//
// ────────────────────────────────────────────────────────── IV ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

const Button: React.FunctionComponent<Props> = ({
    children,
    onClick,
    disabled,
    secondary = false,
    small = false,
    arrow = false,
    styles,
}) => {
    return (
        <SubmitButton
            type="submit"
            disabled={disabled}
            onClick={onClick}
            secondary={secondary}
            small={small}
            arrow={arrow}
            css={styles}
        >
            {children}
        </SubmitButton>
    );
};

export default Button;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
