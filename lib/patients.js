import db from '../db/models/index.js'

/**
* User methods. The example doesn't contain a DB, but for real applications you must use a
* db here, such as MongoDB, Fauna, SQL, etc.
*/

export async function createPatients({ city, addres, district, cep, email, phone }) {
    return await db.patients.create({
        createdAt: Date.now(),
        city,
        addres,
        district,
        cep,
        email,
        phone
    })
}
export async function updatePatients({ id, city, addres, district, cep, email, phone, uf, url_img }) {
    // Here you should create the user and save the salt and hashed password (some dbs may have
    // authentication methods that will do it for you so you don't have to worry about it):

    await db.patients.update({ city: city, addres: addres, district: district, cep: cep, email: email, phone: phone, uf: uf, url_img: url_img }, {
        where: {
            id: id
        }
    });
}

// Here you should lookup for the user in your DB
export async function findPatients(id) {
    // This is an in memory store for db.Patientss, there is no data persistence without a proper DB
    return await db.patients.findOne({ where: { id: id } })
}
// Here you should lookup for the user in your DB
export async function findPatientss(filter) {
    // This is an in memory store for db.Patientss, there is no data persistence without a proper DB
    return await db.patients.findAll({ where: filter, raw: true })
}

