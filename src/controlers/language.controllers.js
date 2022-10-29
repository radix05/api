import { getConnection } from "./../database/database";

const getLanguages= async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id_factura,cantidad_producto,id_producto,nombre_producto,precio_producto,total FROM facturas");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

};

const addLanguages= async (req, res) => {
    try{
        const { nombre_producto, cantidad_producto,  precio_producto, id_producto, total } = req.body;

        if(nombre_producto == undefined || cantidad_producto == undefined || precio_producto == undefined || id_producto == undefined || total == undefined){
                res.status(400).json({ message: "error, llene los campos para completar"});
        }

        const language={ cantidad_producto,id_producto,nombre_producto,precio_producto,total };
        const connection = await getConnection();
        const result=await connection.query("INSERT INTO facturas SET ?", language)
        res.json({message: "factura proccesada", result});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

};


const deleteLanguage= async (req, res) => {
    try{
        const {id_producto} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM facturas WHERE id_producto = ?", id_producto);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

};

const updateLanguage= async (req, res) => {
    try{
        const {id_factura} = req.params;
        const { nombre_producto, cantidad_producto,  precio_producto, id_producto, total } = req.body;

        if(nombre_producto == undefined || cantidad_producto == undefined || precio_producto == undefined || id_producto == undefined || total == undefined){
            res.status(400).json({ message: "error, llene los campos para completar"});
        }

        const language = { id_factura,cantidad_producto,id_producto,nombre_producto,precio_producto,total }
        const connection = await getConnection();
        const result = await connection.query("UPDATE facturas SET ? WHERE id_factura = ?", [language, id_factura]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

};

export const methods = { 
    getLanguages, 
    addLanguages,
    deleteLanguage,
    updateLanguage
};