import { getUserDb , getUserIDDb , deleteUserDb , updateUserDb } from "../model/userDb.js";
// import { hash } from "bcrypt";

const getUser =  async(req,res)=> {
    res.json(await getUserDb());
}

const getUserId =  async(req,res)=> {
    console.log(req.params.id);
    res.json(await getUserIDDb(req.params.id))
}

const deleteUser = async (req,res) => {
    let {id} = req.body
    await deleteUserDb(req.params.id)
    res.send('Data has been deleted')
}

const updateUser =  async(req,res)=>{
    let {firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile} = req.body
    let user = await getUserDb(req.params.id)
    firstName?firstName = firstName:firstName = user.firstName;
    lastName?lastName = lastName:lastName = user.lastName;
    userAge?userAge = userAge:userAge = user.userAge;
    Gender?Gender = Gender:Gender = user.Gender;
    userRole?userRole = userRole:userRole = user.userRole;
    emailAdd?emailAdd = emailAdd:emailAdd = user.emailAdd;
    userPass?userPass = userPass:userPass = user.userPass;
    userProfile?userProfile = userProfile:userProfile = user.userProfile;

    await updateUserDb(firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile,req.params.id);
    res.send('Data has been updated successfully.')
}

export {getUser , getUserId , deleteUser , updateUser }