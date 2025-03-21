import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent model overwrite upon hot-reload in development
export default mongoose.models.User || mongoose.model('User', UserSchema);
