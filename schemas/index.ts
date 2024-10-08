import * as  z from "zod"


export const LoginSchema=z.object({
    email:z.string().email(),
    password:z.string().min(1,{
            message:"Password  must be 1 character"
    })

})

export const RegisterSchema=z.object({
    email:z.string().email(),
    password:z.string().min(6,{
            message:"Minimum 6 characters required"
    }),
    name:z.string().min(3,{
        message:"name is required"
    })

})