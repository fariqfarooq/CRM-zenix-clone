'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "@/contexts/UserContexts";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Icon } from "@iconify/react";


export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const { login } = useUser();

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Login successful");
        login(data.token, data.userName);
        router.push("/profile");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      toast.error("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Toaster />
      <Card className=" w-full max-w-md">
      <Form
        onSubmit={handleLogin}
        className="bg-white p-8  w-full max-w-md"
        validationBehavior="aria"
      >
        <h1 className="text-2xl mb-6 text-center">Login</h1>
        <Input
          isRequired
          label="Email"
          name="email"
          placeholder="Enter your email"
          type="email"
          labelPlacement="outside"
          errorMessage="Please enter a valid email"
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
          isRequired
          label="Password"
          name="password"
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          variant="bordered"
          labelPlacement="outside"
          endContent={
            <button
              aria-label="toggle password visibility"
              type="button"
              onClick={toggleVisibility}
              className="focus:outline-none"
            >
              {isVisible ? (
                <Icon icon="formkit:eyeclosed" className="text-green-500" />
              ) : (
                <Icon icon="mdi:eye" className="text-gray-500" />
              )}
            </button>
          }
        />
        <Button type="submit" color="success" variant="solid" className="mt-4 w-full font-semibold text-white"> 
          Login
        </Button>
        <p className="mt-4 text-center">Don&apos;t have an account? Sign up below</p>
        <Button
          onPress={() => router.push("/register")}
          variant="ghost"

          className="mt-2 w-full"
        >
          Sign Up
        </Button>
      </Form>
      </Card>
    </div>
  );
}
