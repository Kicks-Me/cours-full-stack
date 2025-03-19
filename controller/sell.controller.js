import dbExecute from '../db/dbContext.js';


///Arrow function
export const getSellProducts = async (req, res) => {
    try {
        
        const sql = "SELECT a.id, b.name,c.username, a.selled_at FROM tbsell a JOIN tbproducts b ON a.product_id = b.id JOIN tbusers c ON a.user_id = c.id";
        const params = [];

        const data = await dbExecute(sql, params);

        if(!data){
            return res.status(422).json({ message: "Not found data" });
        }

        return res.status(200).json({ data: data });

    } 
    catch (error) {
        console.log(error)
        return res.status(500).json({ message: "server error" });
    }
}

///Arrow function
export const getSellProduct = async (req, res) => {
    const { id } = req.params;

    ///validate id must not null or empty
    if(!id){
        return res.status(422).json({statusCode: 422, message: "Not found Id"})
    }

    try {
        
        const sql = "SELECT a.id, b.name,c.username, a.selled_at FROM tbsell a JOIN tbproducts b ON a.product_id = b.id JOIN tbusers c ON a.user_id = c.id WHERE a.id=?";
        const params = [id];

        const data = await dbExecute(sql, params);

        if(!data){
            return res.status(422).json({ message: "Not found data" });
        }

        return res.status(200).json({ data: data });

    } 
    catch (error) {
        console.log(error)
        return res.status(500).json({ message: "server error" });
    }
}


///Arrow function
export const createSellProduct = async(rq, rs) => {
    const { product_id,qty } = rq.body;

    //// Validate data or validation data
    if(!product_id || !req?.id || !qty){
        return res.status(422).json({statusCode: 422, message: "Parameter empty!" });
    }

    try {

        const sql = "INSERT INTO tbsell(product_id, user_id,qty) VALUES(?,?,?)";
        const params = [product_id, req?.id,qty];

        const data = await dbExecute(sql, params);

        //data = undefined | null | '' | 0 | empty | false

        if(!data){
            return rs.status(422).json({statusCode: 422, message: "Create selll product failed" });
        }

        return rs.status(201).json({statusCode: 201, message: "Create sell product success" });
        
    } catch (error) {
        return rs.status(500).json({ message: "server error" });
    }
}

export const deleteSellProduct = async(request, response) => {
    const id = request.params.id;

    if(!id){
        return rs.status(422).json({statusCode: 422, message: "Data is empty"});
    }

    try {
        const data = await dbExecute(
            'DELETE FROM tbsell WHERE id=?',
            [id]
        );


        if(!data){
            return response.status(422).json({statusCode: 422, message: "Delete sell product failed" });
        }

        if(data?.affectedRows < 1){
            return response.status(422).json({statusCode: 422, message: "Not found sell product to delete" });
        }

        return response.status(200).json({statusCode: 200, message: "Delete sell product success" });

    } catch (error) {
        console.log(error)
        return response.status(500).json({statusCode: 500, message:"Delete data error"});
    }
}

export const updateSellProduct = async (rq, rs) => {
    const {product_id, qty} = rq.body;
    const {id} = rq.params;

    //// Validate data or validation data
    if(!product_id || !req?.id || !qty || !id){
        return res.status(422).json({statusCode: 422, message: "Parameter empty!" });
    }

    try {
        await dbExecute(
            'UPDATE tbsell SET product_id=?, user_id=?,qty=? WHERE id=?',
            [product_id, req?.id, qty, id]
        );
    
        if(!data){
            return rs.status(422).json({statusCode: 422, message:"Can not update data"});
        }

         //data.affectedRows
         if(data?.affectedRows < 1){
            return rs.status(422).json({statusCode: 422, message:"Not found data to update"});
         }
    
        return rs.status(200).json({statusCode: 200, message:'Update success'});

    } catch (error) {
        return rs.status(500).json({statusCode: 500, message:"Update data error"});
    }
}