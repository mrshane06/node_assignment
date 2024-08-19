import { pool } from "../config/config.js";

const  getUserDb = async () =>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserIDDb = async (id) =>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE user_id = ?', [id])
    return data
}


const deleteUserDb = async(id) => {
    await pool.query('DELETE FROM users WHERE user_id =?', [id])
}

const updateUserDb = async ( id)=>{
    await pool.query('UPDATE users SET firstName = ? , lastName = ? , userAge = ? , Gender = ? , userRole = ? , emailAdd = ?  , userPass = ? , userProfile = ? WHERE user_id = ? ', [firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile,id])
}

export {getUserDb , getUserIDDb , deleteUserDb , updateUserDb} 