import { pool } from "../config/config.js";

const  getProductsDb = async () =>{
    let [data] = await pool.query('SELECT * FROM products')
    return data
}

const getProductsIDDb = async (id) =>{
    let [[data]] = await pool.query('SELECT * FROM products WHERE product_id = ?', [id])
    return data
}
 
const insertProductsDb = async( prodName , quantity , amount , category , prodUrl) => {
    let [data] = await pool.query(`
        INSERT INTO products (prodName , quantity , amount , category , prodUrl)
        VALUES(?,?,?,?,?)
        `, [prodName , quantity , amount , category , prodUrl]
    )
    return data
}

const deleteProductsDb = async(id) => {
    await pool.query('DELETE FROM products WHERE products_id =?', [id])
}

const updateProductsDb = async (prodName , quantity , amount , category , prodUrl,  id)=>{
    await pool.query('UPDATE products SET prodName = ? , quantity = ? , amount = ? , category = ? , prodUrl = ? WHERE products_id = ?', [prodName , quantity , amount , category , prodUrl, id])
}

export {getProductsDb , getProductsIDDb , insertProductsDb , deleteProductsDb , updateProductsDb} 