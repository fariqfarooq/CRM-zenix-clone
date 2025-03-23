"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
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
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { useUser } from "@/contexts/UserContexts";

export const Navbar = () => {
  const { userLoggedIn, userName, logout } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/"); // Redirect after logout
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
        <Icon
          className="text-base text-default-400 pointer-events-none flex-shrink-0"
          icon="solar:search"
        />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar className="mt-2" maxWidth="xl" position="sticky">
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

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        {/* Conditionally render login/logout/profile buttons */}
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

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
      
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
