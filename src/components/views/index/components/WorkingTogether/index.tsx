//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import * as style from './styles';
import SubscribeCard from './components/SubscribeCard';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//
const WorkingTogether: React.FC = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "index/working-together.jpg" }) {
                childImageSharp {
                    fixed(height: 237) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <section css={style.container}>
            <Img css={style.image} fixed={data.file.childImageSharp.fixed} />
            <article css={style.article}>
                <h2 css={style.heading}>Working Together</h2>
                <p css={style.p}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque sequi, dolorum recusandae nihil sed dolor sapiente
                    maiores explicabo, aliquid quod possimus earum ea fugiat
                    distinctio consequuntur ex delectus molestiae autem
                    reprehenderit id quia!
                </p>
            </article>
            <SubscribeCard />
        </section>
    );
};

export default WorkingTogether;
