import prisma from "../../prisma/client/index.js"


export const getUser = async (req, res) => {
   const user = await prisma.user.findMany()
   return res.status(200).json({ status: "Success", message: 'Get User', data: user })
}
