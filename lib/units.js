import crypto from 'crypto'
import db from '../db/models/index.js'

/**
* User methods. The example doesn't contain a DB, but for real applications you must use a
* db here, such as MongoDB, Fauna, SQL, etc.
*/

export async function createUnit({ city, endereco, url_img, email, phone }) {
    return await db.units.create({
        createdAt: Date.now(),
        city,
        endereco,
        url_img,
        email,
        phone
    })
}
export async function updateUnit({ id, city, endereco, url_img, email, phone }) {
    // Here you should create the user and save the salt and hashed password (some dbs may have
    // authentication methods that will do it for you so you don't have to worry about it):

    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
        .toString('hex')
    await db.units.update({ city: city, endereco: endereco, url_img: url_img, email: email, phone: phone }, {
        where: {
            id: id
        }
    });
}
export async function activeUnit({ id }) {
    // Here you should create the user and save the salt and hashed password (some dbs may have
    // authentication methods that will do it for you so you don't have to worry about it):
    const unit = await db.units.findOne({ where: { id: id }, raw: true })
    await db.units.update({ status: !unit.status }, {
        where: {
            id: id
        }
    });
}

// Here you should lookup for the user in your DB
export async function findUnit(filter) {
    // This is an in memory store for db.Units, there is no data persistence without a proper DB
    console.log('filter', filter)
    return await db.units.findOne({ where: filter })
}
// Here you should lookup for the user in your DB
export async function findUnits(filter) {
    // This is an in memory store for db.Units, there is no data persistence without a proper DB
    return await db.units.findAll({ where: filter, raw: true })
}

