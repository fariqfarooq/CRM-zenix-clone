import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // You can use a .env file to store the secret key securely

// Function to verify JWT token
export function verifyToken(token) {
  if (!token) {
    throw new Error('Token is required');
  }

  try {
    // Remove 'Bearer ' from token if it's prefixed
    if (token.startsWith('Bearer ')) {
      token = token.substring(7, token.length);
    }

    // Verify the token and decode the payload
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded; // { userId, ... } or other payload you included when signing the token
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}

// Function to generate a new JWT token
export function generateToken(user) {
  const payload = { userId: user._id }; // You can include more user info here if needed
  const options = { expiresIn: '1h' }; // Token expires in 1 hour
  const token = jwt.sign(payload, JWT_SECRET, options);
  return token;
}
