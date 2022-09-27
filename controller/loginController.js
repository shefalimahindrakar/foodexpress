import connection from "../model/MySqlConnection.js"

/*
author - Shefali 
request - name, email-id,phone number
{"name":Preeti,"emailId":preeti@gmail.com,"phoneNumber":1234567890}
response - 200 OK
{"message":success,accessToken}

*/


export const signUp = (req, res) => {
  try {
    console.log(req);
    const { name, emailId, phoneNumber } = req.body; // object destructuring
    if (!name || !emailId || !phoneNumber) {
      res.status(400).send({ message: "Incomplete Information" });
      return;
    }
    const query = `INSERT INTO user_login(name,email,mobile_no)
        VALUES("${name}","${emailId}","${phoneNumber}");`;
    connection.query(query, (error, rows) => {
      if (error) {
        return res.status(500).send({ message: error.message });
      }
      console.log(rows);
     // const obj = rows[0];
      //const id = obj.user_id;
      return res.status(200).send({ message: "Success" });
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const login = (req,res)=>{

}