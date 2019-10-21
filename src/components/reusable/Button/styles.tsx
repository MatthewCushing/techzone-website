import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

import { colors, fonts } from '../../global/Theme';

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

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
// ─── STYLES ─────────────────────────────────────────────────────────────────────
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
    padding: 10px 20px;
    font-weight: 400;
    font-size: 18px;
    ${secondaryButton};
    ${smallButton};
`;

export default SubmitButton;
