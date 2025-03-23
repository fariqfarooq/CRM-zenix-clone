"use client";
import React, { useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle, // Added toggle import
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import Image from "next/image";
import NextLink from "next/link";
import clsx from "clsx";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

import { siteConfig } from "@/config/site";
import { useUser } from "@/contexts/UserContexts";

export const Navbar = () => {
  const { userLoggedIn, logout } = useUser();
  const router = useRouter();

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/login"); 
  };

 
  return (
    <HeroUINavbar
      className="my-2"
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="ACME"
              height={25}
              src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/crm-logo-dark.svg"
              width={150}
            />
          </NextLink>
        </NavbarBrand>
        {/*  visible on lg and above */}
        <ul className="hidden lg:flex gap-4 justify-start ml-6 ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium text-sm font-semibold",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <ThemeSwitch /> */}
        </NavbarItem>
        
        {userLoggedIn ? (
          <>
            <Button
              as={Link}
              className="font-semibold text-sm"
              href="/profile"
              radius="sm"
              size="lg"
              startContent={<Icon icon="solar:user-linear" />}
            >
              Profile
            </Button>
            <Button
              className="font-semibold text-sm text-white"
              color="danger"
              radius="sm"
              size="lg"
              variant="solid"
              onPress={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              as={Link}
              className="font-semibold text-sm"
              href="/login"
              radius="sm"
              size="lg"
              startContent={<Icon icon="solar:user-linear" />}
            >
              Login
            </Button>
            <Button
              className="font-semibold text-sm text-white"
              color="success"
              radius="sm"
              size="lg"
              variant="solid"
            >
              Get Started
            </Button>
          </>
        )}
      </NavbarContent>

      {/* Hamburger menu toggle for small and md screens */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          {userLoggedIn ? (
            <>
              <Button
                as={Link}
                className="font-semibold text-sm"
                href="/profile"
                radius="sm"
                size="lg"
                startContent={<Icon icon="solar:user-linear" />}
              >
                Profile
              </Button>
              <Button
                className="font-semibold text-sm text-white"
                color="danger"
                radius="sm"
                size="lg"
                variant="solid"
                onPress={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                as={Link}
                className="font-semibold text-sm"
                href="/login"
                radius="sm"
                size="lg"
                startContent={<Icon icon="solar:user-linear" />}
              >
                Login
              </Button>
              <Button
                className="font-semibold text-sm text-white"
                color="success"
                radius="sm"
                size="lg"
                variant="solid"
              >
                Get Started
              </Button>
            </>
          )}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
