import User from '@/app/models/User';
import dbConnect from '@/lib/dbConnect';
import { verifyToken } from '@/lib/auth';
import bcrypt from 'bcrypt'; 

export async function GET(request) {
  await dbConnect();
  
  const token = request.headers.get('Authorization');
  const decoded = await verifyToken(token); 

  if (!decoded) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const user = await User.findById(decoded.userId);
  if (!user) {
    return new Response(JSON.stringify({ message: 'User not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ user }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(request) {
  await dbConnect();
  
  const { name, email, password } = await request.json();
  const token = request.headers.get('Authorization');
  const decoded = await verifyToken(token);

  if (!decoded) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const user = await User.findById(decoded.userId);
  if (!user) {
    return new Response(JSON.stringify({ message: 'User not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
  }

  user.name = name || user.name;
  user.email = email || user.email;

  await user.save();

  return new Response(JSON.stringify({ message: 'Profile updated successfully' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
