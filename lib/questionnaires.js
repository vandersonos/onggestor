import db from '../db/models/index.js'

/**
* User methods. The example doesn't contain a DB, but for real applications you must use a
* db here, such as MongoDB, Fauna, SQL, etc.
*/

export async function createQuestionnaires({ name, descrption, order }) {
    return await db.units.create({
        createdAt: Date.now(),
        name, descrption, order
    })
}
export async function updateQuestionnaires({ id, name, descrption, order }) {
    // Here you should create the user and save the salt and hashed password (some dbs may have
    // authentication methods that will do it for you so you don't have to worry about it):
    await db.units.update({ name: name, descrption: descrption, order: order }, {
        where: {
            id: id
        }
    });
}

// Here you should lookup for the user in your DB
export async function findQuestionnaires(id) {
    // This is an in memory store for db.Questionnairess, there is no data persistence without a proper DB
    return await db.units.findOne({ where: { id: id } })
}
// Here you should lookup for the user in your DB
export async function findQuestionnairess(filter) {
    // This is an in memory store for db.Questionnairess, there is no data persistence without a proper DB
    return await db.units.findAll({ where: filter, raw: true })
}

