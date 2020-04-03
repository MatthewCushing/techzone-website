import { css } from '@emotion/core';

import { colors } from 'global/Theme';

export const svg = css`
    fill: ${colors.lightGray};
    transition: all 0.3s ease 0s;

    &:hover {
        fill: #fff;
        transform: translateY(-5px);
    }
`;