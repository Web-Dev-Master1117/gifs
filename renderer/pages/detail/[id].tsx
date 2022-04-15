import type {ReactElement} from 'react';
import type {GetStaticPaths, GetStaticProps} from 'next';

import Layout from '../../components/Layout';
import type {User} from '../../interfaces';
import {findAll, findData} from '../../utils/sample-api';
import ListDetail from '../../components/ListDetail';

type Params = {
    id: string;
};

type Props = {
    item?: User;
    errors?: string;
};

const InitialPropsDetail = ({item, errors}: Props): ReactElement => {
    if (errors) {
        return (
            <Layout title="Error | Next.js + TypeScript + Electron Example">
                <p>
                    <span style={{color: 'red'}}>{'Error:'}</span> {errors}
                </p>
            </Layout>
        );
    }

    return (
        <Layout title={`${item ? item.name : 'Detail'} | Next.js + TypeScript Example`}>
            {item && <ListDetail item={item} />}
        </Layout>
    );
};

const getStaticPaths: GetStaticPaths = () => {
    const items: User[] = findAll();
    const paths = items.map((item) => `/detail/${item.id}`);

    return {
        fallback: false,
        paths,
    };
};

const getStaticProps: GetStaticProps = ({params}) => {
    const {id} = params as Params;

    try {
        const item = findData(id);

        return {
            props: {
                item,
            },
        };
    } catch (error) {
        return {
            props: {
                errors: error instanceof Error ? error.message : '`getStaticProps` error',
            },
        };
    }
};

export default InitialPropsDetail;
export {getStaticPaths, getStaticProps};
