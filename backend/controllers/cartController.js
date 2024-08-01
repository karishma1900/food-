import userModel from "../models/userModel.js";

// Add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cart;
        if(!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cart: cartData});
        res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

const removeFromCart = async(req, res) => { 
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData =  userData.cart;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cart: cartData});
        res.json({success:true,message:"Removed from cart"})
    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:"Error"})
        
    }
}
const getCart = async(req, res) => {
try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cart;
    res.json({success:true, cartData})
} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
}
 }


export { addToCart, removeFromCart, getCart }
