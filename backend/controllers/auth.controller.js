import bcrypt from 'bcrypt';

export const register = async(req, res) => {
  const { username, email, password } = req.body;
  //hash the password
  const hashPassword = await bcrypt.hash(password,10);
  
  //create a new account and save it in the database
};
export const login = (req, res) => {
  //DB operations
};
export const logout = (req, res) => {
  //DB operations
};
