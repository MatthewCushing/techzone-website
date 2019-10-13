//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Container, Image, Article, H3, P } from './styles';
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
        <Container>
            <Image fixed={data.file.childImageSharp.fixed} />
            <Article>
                <H3>Working Together</H3>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque sequi, dolorum recusandae nihil sed dolor sapiente
                    maiores explicabo, aliquid quod possimus earum ea fugiat
                    distinctio consequuntur ex delectus molestiae autem
                    reprehenderit id quia!
                </P>
            </Article>
            <SubscribeCard />
        </Container>
    );
};

export default WorkingTogether;
