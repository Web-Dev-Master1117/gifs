import Link from 'next/link';
import type {GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import type {ReactElement} from 'react';

import Layout from '../components/Layout';
import List from '../components/List';
import type {User} from '../interfaces';
import {findAll} from '../utils/sample-api';

type Props = {
    items: User[];
};

const WithInitialProps = ({items}: Props): ReactElement => {
    const router = useRouter();

    return (
        <Layout title="List Example (as Function Component) | Next.js + TypeScript + Electron Example">
            <h1>{'List Example (as Function Component)'}</h1>
            <p>{`You are currently on: ${router.pathname}`}</p>
            <List items={items} />
            <p>
                <Link href="/">
                    <a>{'Go home'}</a>
                </Link>
            </p>
        </Layout>
    );
};

const getStaticProps: GetStaticProps<Props> = () => {
    const items: User[] = findAll();

    return {props: {items}};
};

export default WithInitialProps;
export {getStaticProps};
