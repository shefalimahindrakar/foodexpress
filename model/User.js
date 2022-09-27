import connection from './MySqlConnection.js';

export const createUser = (name, emailId, phoneNumber) => {
    return new Promise((resolve,reject) => {
        const query = `INSERT INTO user_login(name,email,mobile_no)
        VALUES("${name}","${emailId}","${phoneNumber}");`;
        connection.query(query, (error, rows) => {
            if (error) {
                return reject(new Error("User Already Created"));
            }
            return resolve(null);
        });
    }
    )
}