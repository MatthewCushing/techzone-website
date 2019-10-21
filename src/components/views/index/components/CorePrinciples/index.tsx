import React from 'react';
import { css } from '@emotion/core';

// import { css } from '@emotion/core';
import Button from 'reusable/Button';
import {
    Container,
    Grid,
    P,
    Col1,
    Col2,
    Col3,
    IconAlignment,
    iconAlignment,
    buttonStyles,
} from './styles';
import Icon from './Icon';

const CorePrinciples: React.FC = () => {
    return (
        <Container>
            <Grid>
                <Col1>
                    <div css={iconAlignment}>
                        <Icon name="coding" />
                    </div>
                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Pellentesque eu tincidunt tortor aliquam
                        nulla. Velit ut tortor pretium viverra suspendisse
                        potenti nullam ac tortor. Risus quis varius quam quisque
                        id diam vel quam elementum. Placerat duis ultricies
                        lacus sed turpis tincidunt.
                    </P>
                </Col1>
                <Col2>
                    <IconAlignment>
                        <Icon name="creative" />
                    </IconAlignment>
                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Pellentesque eu tincidunt tortor aliquam
                        nulla. Velit ut tortor pretium viverra suspendisse
                        potenti nullam ac tortor. Risus quis varius quam quisque
                        id diam vel quam elementum. Placerat duis ultricies
                        lacus sed turpis tincidunt.
                    </P>
                </Col2>
                <Col3>
                    <IconAlignment>
                        <Icon name="social" />
                    </IconAlignment>
                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Pellentesque eu tincidunt tortor aliquam
                        nulla. Velit ut tortor pretium viverra suspendisse
                        potenti nullam ac tortor. Risus quis varius quam quisque
                        id diam vel quam elementum. Placerat duis ultricies
                        lacus sed turpis tincidunt.
                    </P>
                </Col3>
                <Button styles={buttonStyles}>Learn more about us</Button>
            </Grid>
        </Container>
    );
};

export default CorePrinciples;
