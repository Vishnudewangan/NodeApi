import {User} from "../models/user.js";

export const getAllUsers = async (req,res) =>{
  
    const users= await User.find({});
   
    // params - url me ? ke baad wala
    console.log(req.query);
    const keyword = req.query.keyword;
  
    console.log(keyword);
      res.json({
         success:true,
         users:users,
      });
  };

 export const registerNewUser= async (req,res) =>{
    const {name,email,password} = req.body;

     await User.create({
        name,
        email,
        password,
       });
        res.status(201).cookie("tempi", "lol").json({
            success: true,
            message: "Registered Successfully",
        });
    
  };

  export const specialFunc = (req, res) =>{
     res.json({
        success: true,
        message: "Just joking",
     });
  };

  export const getUserById = async (req,res) =>{ // dynamc route ko hamesha last me rakhna
    const  {id} =req.params;
     const user = await User.findById(id);
   
    res.json({
        success: true,
        user,
    })
};

export const updateUserById = async (req,res) =>{ // dynamc route ko hamesha last me rakhna
   const  {id} =req.params;
    const user = await User.findById(id);
  
   res.json({
       success: true,
       message:"updated"
   })
};

export const deleteUserById = async (req,res) =>{ // dynamc route ko hamesha last me rakhna
   const  {id} =req.params;
    const user = await User.findById(id);
     
    
   res.json({
       success: true,
       user: "deleted"
   })
};