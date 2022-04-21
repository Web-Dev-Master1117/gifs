import type {ReactElement} from 'react';

import type {User} from '../interfaces';

import ListItem from './ListItem';

type Props = {
    items: User[];
};

const List = ({items}: Props): ReactElement => (
    <ul>
        {items.map((item) => (
            <li key={item.id}>
                <ListItem data={item} />
            </li>
        ))}
    </ul>
);

export default List;
