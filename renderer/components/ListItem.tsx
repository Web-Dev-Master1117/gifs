import Link from 'next/link';
import type {ReactElement} from 'react';

import type {User} from '../interfaces';

type Props = {
    data: User;
};

const ListItem = ({data}: Props): ReactElement => (
    <Link as={`/detail/${data.id}`} href="/detail/[id]">
        <a>{`${data.id}: ${data.name}`}</a>
    </Link>
);

export default ListItem;
