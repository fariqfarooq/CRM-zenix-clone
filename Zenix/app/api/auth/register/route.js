import User from '@/app/models/User';
import dbConnect from '@/lib/dbConnect';
import bcrypt from 'bcrypt';

export async function POST(request) {
  await dbConnect();
  const { name, email, password } = await request.json();

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: 'User already exists' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Hash password and create user
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  await User.create({ name, email, password: hashedPassword });

  return new Response(JSON.stringify({ message: 'User registered successfully' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
