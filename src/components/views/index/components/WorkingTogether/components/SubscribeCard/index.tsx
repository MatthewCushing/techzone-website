//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';

import * as style from './styles';

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const SubscribeCard: React.FC = () => {
    return (
        <aside css={style.card}>
            <div css={style.headerContainer}>
                <h2 css={style.header}>Subscribe to our mailing list</h2>
            </div>
            <p css={style.p}>
                Join the mailing list to get the latest updates on the club as
                well as notices for newly scheduled events and schedule changes.
            </p>
            <input
                css={style.input}
                type="email"
                placeholder="example@example.com"
            />
            <button css={style.button} type="button">
                Submit
            </button>
        </aside>
    );
};

export default SubscribeCard;
