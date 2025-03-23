'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { useUser } from '@/contexts/UserContexts';
import { Card } from '@heroui/card';
import { Icon } from '@iconify/react';



export default function ProfilePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const router = useRouter();

  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/auth/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setName(data.user.name);
          setEmail(data.user.email);
        } else {
          toast.error(data.message || 'Failed to load profile');
        }
      } catch (error) {
        toast.error('Error fetching profile');
      }
    };
    fetchProfile();
  }, []);

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);
  const toggleConfirmVisibility = () => setIsConfirmVisible((prev) => !prev);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

   
    if (password && password !== confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }
    //  new password with regex 
    if (password) {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
      if (!passwordRegex.test(password)) {
        toast.error("Password must be at least 8 characters long, include a letter and a number");
        setLoading(false);
        return;
      }
    }

    try {
      const res = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('Profile updated successfully');
      } else {
        toast.error(data.message || 'Update failed');
      }
    } catch (error) {
      toast.error('Error updating profile');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Toaster />
      <Card className='w-full max-w-md'>
      <Form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        validationBehavior="aria"
      >
        <h1 className="text-2xl mb-6 text-center">Profile</h1>
        <Input
          isRequired
          label="Name"
          name="name"
          placeholder="Enter your name"
          labelPlacement="outside"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          isRequired
          label="Email"
          name="email"
          placeholder="Enter your email"
          type="email"
          labelPlacement="outside"
          errorMessage="Please enter a valid email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          validate={(value) => {
            if (!value) return null;
            const emailRegex = /^\S+@\S+\.\S+$/;
            if (!emailRegex.test(value)) {
              return "Please enter a valid email";
            }
            return null;
          }}
        />
        <Input
          label="New Password (leave blank to keep current)"
          name="password"
          placeholder="Enter new password"
          type={isPasswordVisible ? "text" : "password"}
          variant="bordered"
          labelPlacement="outside"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage="Password must be at least 8 characters long, include a letter and a number"
          validate={(value) => {
            if (!value) return null;
            const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
            if (!regex.test(value)) {
              return "Password must be at least 8 characters long, include a letter and a number";
            }
            return null;
          }}
          endContent={
            <button
              aria-label="toggle password visibility"
              type="button"
              onClick={togglePasswordVisibility}
              className="focus:outline-none"
            >
              {isPasswordVisible ? (
                <Icon icon="formkit:eyeclosed" className="text-green-500" />
              ) : (
                <Icon icon="mdi:eye" className="text-gray-500" />
              )}
            </button>
          }
        />
        <Input
        
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm new password"
          type={isConfirmVisible ? "text" : "password"}
          variant="bordered"
          labelPlacement="outside"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          errorMessage="Passwords do not match"
          validate={(value) => {
           
            if (!password) return null;
            if (value !== password) return "Passwords do not match";
            return null;
          }}
          endContent={
            <button
              aria-label="toggle confirm password visibility"
              type="button"
              onClick={toggleConfirmVisibility}
              className="focus:outline-none"
            >
              {isConfirmVisible ? (
                <Icon icon="formkit:eyeclosed" className="text-green-500" />
              ) : (
                <Icon icon="mdi:eye" className="text-gray-500" />
              )}
            </button>
          }
        />
        <Button color='success' type="submit" variant="ghost" className="mt-4 w-full" disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </Button>
      </Form>
      </Card>
    </div>
  );
}
