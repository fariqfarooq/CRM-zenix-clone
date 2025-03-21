import dbConnect from '@/lib/dbConnect';
import User from '@/app/models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  await dbConnect();
  const { email, password } = await request.json();

  // Check for user existence
  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Sign JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return new Response(JSON.stringify({ token }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
