import jwt from "jsonwebtoken";

const generateToken = (id: string, role: "admin" | "user") => {
  const jwtSecretKey: string | undefined = process.env.JWT_SECRET_KEY;
  if (!jwtSecretKey) {
    console.warn("Environment Variable - JWT Secret Key Value Missing.");
    return;
  }
  const token = jwt.sign({ id, role }, jwtSecretKey, { expiresIn: "7d" });
  return token;
};

export default generateToken;
