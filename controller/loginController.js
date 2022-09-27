import * as UserModel from '../model/User.js'

/*
author - Shefali 
request - name, email-id,phone number
{"name":Preeti,"emailId":preeti@gmail.com,"phoneNumber":1234567890}
response - 200 OK
{"message":success,accessToken}

*/


export const signUp = async (req, res) => {
  try {
    console.log(req);
    const { name, emailId, phoneNumber } = req.body; // object destructuring
    if (!name || !emailId || !phoneNumber) {
      res.status(400).send({ message: "Incomplete Information" });
      return;
    }

    await UserModel.createUser(name,emailId,phoneNumber)

    return res.status(200).send({ message: 'Success' });
    
  } catch (error) {
    console.log(`[controller][loginController][Error]  ${error.message}`);
    return res.status(500).send({ message: error.message });
  }
};

export const login = (req,res)=>{

}