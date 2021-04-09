import db from '../db/models/index.js'

/**
* User methods. The example doesn't contain a DB, but for real applications you must use a
* db here, such as MongoDB, Fauna, SQL, etc.
*/

export async function createQuestion({ label, description, type, alternatives }) {
    if (!alternatives) {
        alternatives = [];
    }
    return await db.units.create({
        createdAt: Date.now(),
        label, description, type, alternatives
    })
}
export async function updateQuestion({ id, label, description, type, alternatives }) {
    // Here you should create the user and save the salt and hashed password (some dbs may have
    // authentication methods that will do it for you so you don't have to worry about it):
    let atributtes = { label: label, description: description, type: type };
    if (!alternatives) {
        atributtes.alternatives = [];
    } else {
        atributtes.alternatives = alternatives;

    }
    await db.units.update(atributes, {
        where: {
            id: id
        }
    });
}

// Here you should lookup for the user in your DB
export async function findQuestion(id) {
    // This is an in memory store for db.Questions, there is no data persistence without a proper DB
    return await db.units.findOne({ where: { id: id } })
}
// Here you should lookup for the user in your DB
export async function findQuestions(filter) {
    // This is an in memory store for db.Questions, there is no data persistence without a proper DB
    return await db.units.findAll({ where: filter, raw: true })
}

