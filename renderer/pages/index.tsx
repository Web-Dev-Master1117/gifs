import type {IpcRenderer, IpcRendererEvent} from 'electron';

import type {EffectCallback, ReactElement} from 'react';
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
    useEffect((): ReturnType<EffectCallback> => {
        const onMessage = (_event: IpcRendererEvent, args: string): void => {
            // eslint-disable-next-line no-alert
            alert(args);
        };

        // add a listener to 'message' channel
        global.ipcRenderer.addListener('message', onMessage);

        return (): void => {
            global.ipcRenderer.removeListener('message', onMessage);
        };
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
