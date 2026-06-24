// POST: /voters/register
// UNPROTECTED ROUTE
export const registerVoter = (req, res, next) => {
    res.json({ message: "Voter registered successfully" });
}

// POST: /voters/login
// UNPROTECTED ROUTE
export const loginVoter = (req, res, next) => {
    res.json({ message: "Voter logged in successfully" });
}

// GET: /voters/:id
// PROTECTED ROUTE
export const getVoter = (req, res, next) => {
    res.json({ message: "Voter retrieved successfully" });
}
