import crypto from 'crypto'
import db from '../db/models/index.js'

/**
* User methods. The example doesn't contain a DB, but for real applications you must use a
* db here, such as MongoDB, Fauna, SQL, etc.
*/

export async function createUser({ name, username, password, email }) {
    // Here you should create the user and save the salt and hashed password (some dbs may have
    // authentication methods that will do it for you so you don't have to worry about it):

    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
        .toString('hex')
    return await db.users.create({
        createdAt: Date.now(),
        username,
        name,
        email,
        hash,
        salt,
    })
}
export async function updateUser({ username, password, email }) {
    // Here you should create the user and save the salt and hashed password (some dbs may have
    // authentication methods that will do it for you so you don't have to worry about it):

    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
        .toString('hex')
    await db.users.update({ email: email, password: password }, {
        where: {
            username: username
        }
    });
}
export async function activeUser({ id }) {
    // Here you should create the user and save the salt and hashed password (some dbs may have
    // authentication methods that will do it for you so you don't have to worry about it):
    const user = await db.users.findOne({ where: { id: id }, raw: true })
    await db.users.update({ status: !user.status }, {
        where: {
            id: id
        }
    });
}

// Here you should lookup for the user in your DB
export async function findUser(filter) {
    // This is an in memory store for db.Users, there is no data persistence without a proper DB
    console.log('filter', filter)
    return await db.users.findOne({ where: filter })
}
// Here you should lookup for the user in your DB
export async function findUsers(filtros) {
    // This is an in memory store for db.Users, there is no data persistence without a proper DB
    return await db.users.findAll({ raw: true })
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {

    const inputHash = crypto
        .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
        .toString('hex')
    const passwordsMatch = user.hash === inputHash
    return passwordsMatch
}