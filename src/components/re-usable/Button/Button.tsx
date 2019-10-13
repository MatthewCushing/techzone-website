//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React, { ReactNode } from 'react';
import { SerializedStyles } from '@emotion/core';

import SubmitButton from './Button-Styles';

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
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

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
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
