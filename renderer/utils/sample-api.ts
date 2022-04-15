import type {User} from '../interfaces';

/** Dummy user data. */
const dataArray: User[] = [
    {
        id: 101,
        name: 'Alice',
    },
    {
        id: 102,
        name: 'Bob',
    },
    {
        id: 103,
        name: 'Caroline',
    },
    {
        id: 104,
        name: 'Dave',
    },
];

/**
 * Calls a mock API which finds a user by ID from the list above.
 *
 * Throws an error if not found.
 */
const findData = (id: number | string): User => {
    const selected = dataArray.find((data) => data.id === Number(id));

    if (!selected) {
        throw new Error('Cannot find user');
    }

    return selected;
};

/** Calls a mock API which returns the above array to simulate "get all". */
const findAll = (): User[] => {
    // Throw an error, just for example.
    if (!Array.isArray(dataArray)) {
        throw new TypeError('Cannot find users');
    }

    return dataArray;
};

export {dataArray, findAll, findData};
