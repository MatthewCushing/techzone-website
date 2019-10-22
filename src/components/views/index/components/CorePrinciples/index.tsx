import React from 'react';

// import { css } from '@emotion/core';
import Button from 'reusable/Button';
import * as style from './styles';
import Icon from './Icon';

const CorePrinciples: React.FC = () => {
    return (
        <section css={style.container}>
            <div css={style.grid}>
                <article css={style.col1}>
                    <div css={style.iconAlignment}>
                        <Icon name="coding" />
                    </div>
                    <p css={style.p}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Pellentesque eu tincidunt tortor aliquam
                        nulla. Velit ut tortor pretium viverra suspendisse
                        potenti nullam ac tortor. Risus quis varius quam quisque
                        id diam vel quam elementum. Placerat duis ultricies
                        lacus sed turpis tincidunt.
                    </p>
                </article>
                <article css={style.col2}>
                    <div css={style.iconAlignment}>
                        <Icon name="creative" />
                    </div>
                    <p css={style.p}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Pellentesque eu tincidunt tortor aliquam
                        nulla. Velit ut tortor pretium viverra suspendisse
                        potenti nullam ac tortor. Risus quis varius quam quisque
                        id diam vel quam elementum. Placerat duis ultricies
                        lacus sed turpis tincidunt.
                    </p>
                </article>
                <article css={style.col3}>
                    <div css={style.iconAlignment}>
                        <Icon name="social" />
                    </div>
                    <p css={style.p}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Pellentesque eu tincidunt tortor aliquam
                        nulla. Velit ut tortor pretium viverra suspendisse
                        potenti nullam ac tortor. Risus quis varius quam quisque
                        id diam vel quam elementum. Placerat duis ultricies
                        lacus sed turpis tincidunt.
                    </p>
                </article>
                <Button styles={style.buttonStyles}>Learn more about us</Button>
            </div>
        </section>
    );
};

export default CorePrinciples;
