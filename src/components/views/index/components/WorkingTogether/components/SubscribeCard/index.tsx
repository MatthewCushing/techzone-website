//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';

import { Card, Header, H3, P, Input, Button } from './styles';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const SubscribeCard: React.FC = () => {
    return (
        <Card>
            <Header>
                <H3>Subscribe to our mailing list</H3>
            </Header>
            <P>
                Join the mailing list to get the latest updates on the club as
                well as notices for newly scheduled events and schedule changes.
            </P>
            <Input type="email" placeholder="example@example.com" />
            <Button type="button">Submit</Button>
        </Card>
    );
};

export default SubscribeCard;
