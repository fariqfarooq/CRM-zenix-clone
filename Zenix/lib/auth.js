import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; 

// Function to verify JWT token
export function verifyToken(token) {
  if (!token) {
    throw new Error('Token is required');
  }

  try {
  
    if (token.startsWith('Bearer ')) {
      token = token.substring(7, token.length);
    }

    
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded; 
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}

// Function to generate a new JWT token
export function generateToken(user) {
  const payload = { userId: user._id }; // You can include more user info here if needed
  const options = { expiresIn: '23h' }; // Token expires in 1 hour
  const token = jwt.sign(payload, JWT_SECRET, options);
  return token;
}
