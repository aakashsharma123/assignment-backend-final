import JWT from "jsonwebtoken"

export function verifyToken (req , res , next) {
    const header = req.headers

    if (header.authorization && header.authorization.split(" ")[0] === "JWT") {
        const token = header.authorization.split(" ")[1]

        const verifyToken = JWT.verify (token , "secret" , (err , verifyedToken) => {
            if (err) {
                return res.status (404).json ({message : "verfication token invalid"})
            }

            req.user = verifyedToken

            next ()
        })
    }else {
        return res.status(500).json ({message : "something is wrong"})
    }
}

export default verifyToken