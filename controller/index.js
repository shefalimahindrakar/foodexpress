export const greetController = (req,res)=>{
    const name = req.query.name;
    res.status(200).send({"message":`hello ${name}`});
}