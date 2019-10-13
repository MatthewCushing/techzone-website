import styled from '@emotion/styled';

import { colors } from '../../../../../global/Theme';

const SVG = styled('svg')`
    fill: ${colors.lightGray};
    transition: all 0.3s ease 0s;

    &:hover {
        fill: #fff;
        transform: translateY(-5px);
    }
`;

export default SVG;