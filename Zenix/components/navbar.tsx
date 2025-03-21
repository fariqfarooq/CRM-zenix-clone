'use client';
import { useState, useEffect } from 'react';
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import Image from "next/image";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Icon } from "@iconify/react";
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); // This will hold the user's name if needed
  const router = useRouter();
  // Check if user is logged in when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserLoggedIn(true);
      // Optionally, you can use a library to decode the token and extract user info (like username)
      // Example: const decoded = jwtDecode(token);
      setUserName("John Doe"); // This can be dynamically fetched from the token or API
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserLoggedIn(false);
    setUserName("");
    router.push("/"); // Clear the username when logging out
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <Icon icon="solar:search" className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="mt-2">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/crm-logo-dark.svg" alt="ACME" width={150} height={25} />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
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
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        {/* Conditionally render login/logout/profile buttons */}
        {userLoggedIn ? (
          <>
            <Button
            as={Link}
            href='/profile'
              className="font-semibold text-sm"
              startContent={<Icon icon="solar:user-linear" />}
              size="lg"
              radius="sm"
            >
              {userName}&nbsp;s Profile
            </Button>
            <Button
              className="font-semibold text-sm text-white"
              size="lg"
              radius="sm"
              variant="solid"
              color="danger"
              onPress={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
            as={Link}
            href='/login'
              className="font-semibold text-sm"
              startContent={<Icon icon="solar:user-linear" />}
              size="lg"
              radius="sm"
            >
              Login
            </Button>
            <Button
              className="font-semibold text-sm text-white"
              size="lg"
              radius="sm"
              variant="solid"
              color="success"
            >
              Get Started
            </Button>
          </>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <Icon icon="akar-icons:github-fill" className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
