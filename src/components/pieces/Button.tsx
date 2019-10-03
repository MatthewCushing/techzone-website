//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import { css, SerializedStyles } from '@emotion/core';
import { colors, fonts, hexToRgb } from '../Theme';

//
// ────────────────────────────────────────────────── II ──────────
//   :::::: T Y P E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

type Props = {
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    secondary?: boolean;
    small?: boolean;
    arrow?: boolean;
    styles?: SerializedStyles;
};

type ButtonProps = {
    secondary: boolean;
    small: boolean;
    arrow?: boolean;
};

type Option = {
    secondary?: boolean;
    small?: boolean;
};

//
// ──────────────────────────────────────────────────── III ──────────
//   :::::: S T Y L E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

const secondaryButton = (props: Option): SerializedStyles =>
    props.secondary
        ? css`
              background-color: ${colors.blueButton};
              color: ${colors.blueButtonText};
          `
        : css``;

const smallButton = (props: Option): SerializedStyles =>
    props.small
        ? css`
              padding: 3px 30px;
              font-size: 14px;

              &:hover {
                  transform: translateY(-5px);
                  ${props.secondary
                      ? 'box-shadow: 0px 15px 20px rgba(35, 83, 108, 0.4)'
                      : 'box-shadow: 0px 15px 20px rgba(79, 163, 106, 0.2)'};
              }
          `
        : css``;

const SubmitButton = styled.button<ButtonProps>`
    border: none;
    font-family: ${fonts.primary};
    color: #fff;
    background-color: ${colors.lightGreen};
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    letter-spacing: 1.2px;
    border-radius: 5px;
    transition: all 0.3s ease 0s;
    padding: auto;
    font-size: 18px;
    ${secondaryButton};
    ${smallButton};
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
