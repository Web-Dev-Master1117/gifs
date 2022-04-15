import type {IpcRenderer} from 'electron';

import type {ReactElement} from 'react';
import {useEffect} from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';

declare global {
    // eslint-disable-next-line no-inner-declarations,no-var,vars-on-top
    var ipcRenderer: IpcRenderer;
}

const onSayHiClick = (): void => {
    global.ipcRenderer.send('message', 'hi from next');
};

const IndexPage = (): ReactElement => {
    useEffect(() => {
        // add a listener to 'message' channel
        global.ipcRenderer.addListener('message', (_event, args) => {
            // eslint-disable-next-line no-alert
            alert(args);
        });
    }, []);

    return (
        <Layout title="Home | Next.js + TypeScript + Electron Example">
            <h1>{'Hello Next.js 👋'}</h1>
            <button onClick={onSayHiClick} type="button">
                {'Say hi to electron'}
            </button>
            <p>
                <Link href="/about">
                    <a>{'About'}</a>
                </Link>
            </p>
        </Layout>
    );
};

export default IndexPage;
