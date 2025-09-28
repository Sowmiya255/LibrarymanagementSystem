
export const authorize = roles => (req, res, next) => {
  if (!roles.includes(req.body.role)) 
    return res.status(403).json({ message: "Access Denied" });
  next();
};
