"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Languages, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Navigation");
  const local: string = useLocale();
  const [showSticky, setShowSticky] = useState(false);

  const onselectionchange = (locale: string) => {
    const currentPath = window.location.pathname.split("/").slice(2).join("/");
    const newPath = currentPath ? `/${currentPath}` : "";
    window.location.href = `/${locale}${newPath}`;
  };

  const getLanguageLabel = (locale: string) => {
    switch (locale) {
      case "en":
        return "English";
      case "de":
        return "Deutsch";
      case "ru":
        return "Русский";
      default:
        return locale;
    }
  };

  const getLanguageCode = (locale: string) => {
    return locale.toUpperCase();
  };

  // Handle resize for mobile menu reset
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Detect scroll to toggle sticky navbar on desktop
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems: Array<
    | { name: string; href: string }
    | { name: string; children: { name: string; href: string }[] }
  > = [
    { name: t("home"), href: "/" },
    { name: t("aboutUs"), href: "/about" },
    {
      name: t("ourCollections"),
      children: [
        { name: t("aidaHotelBentota"), href: "/aida-hotel" },
        // { name: t("aidaHotelInduruwa"), href: "/" },
      ],
    },
    {
      name: t("Experience"),
      children: [
        { name: "Ayurveda", href: "/aida-ayurveda" },
        { name: "YOGA", href: "/aida-yoga" },
        { name: t("Accommodation"), href: "/accommodation" },
        { name: t("ThingsTodo"), href: "/experience" },
      ],
    },
    { name: t("Gallery"), href: "/gallery" },
    { name: t("Blog"), href: "/blog" },
    { name: t("contact"), href: "/contact" },
  ];

  // Split items for left/right blocks (desktop)
  const midIndex = Math.ceil(menuItems.length / 2);
  const leftItems = menuItems.slice(0, midIndex);
  const rightItems = menuItems.slice(midIndex);

  // Mobile submenu toggle
  const [mobileOpenSections, setMobileOpenSections] = useState<
    Record<string, boolean>
  >({});
  const toggleMobileSection = (key: string) =>
    setMobileOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <header className="w-full">
      {/* Sticky desktop navbar on scroll */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 xl:flex xl:items-center xl:justify-center",
          showSticky
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="hidden xl:block m-2 rounded-lg w-[80%] 2xl:w-[60%] bg-black/95 backdrop-blur border-1  shadow-lg border-orange-500">
          <div className="mx-auto w-full px-6">
            <div className="flex h-14  items-center justify-center gap-6">
              {/* Left items */}
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex space-x-4">
                  {leftItems.map((item) => {
                    if ("href" in item) {
                      return (
                        <NavigationMenuItem key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "bg-transparent text-white hover:text-orange-600 hover:underline font-medium"
                            )}
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuItem>
                      );
                    }
                    return (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuTrigger className="bg-transparent text-white hover:text-orange-600 font-medium">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-2 p-3 w-[260px] bg-white shadow-lg rounded-xl mt-">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className="block rounded-md px-3 py-2 text-sm text-gray-700 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-orange-600 transition"
                                  >
                                    {child.name}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Center logo */}
              {/* <Link href="/" className="shrink-0 flex items-center">
                <Image
                  src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758117037/aida-hotel-logo_exd8jx.png"
                  alt="Logo"
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              </Link> */}

              {/* Right items */}
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex space-x-4">
                  {rightItems.map((item) => {
                    if ("href" in item) {
                      return (
                        <NavigationMenuItem key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "bg-transparent text-white hover:text-orange-600 hover:underline font-medium"
                            )}
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuItem>
                      );
                    }
                    return (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuTrigger className="bg-transparent text-white hover:text-orange-600 font-medium">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-2 p-3 w-[260px] bg-white shadow-lg rounded-xl">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className="block rounded-md px-3 py-2 text-sm text-white bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-orange-600 transition"
                                  >
                                    {child.name}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Top bar with centered logo */}
      <div className="relative flex items-center justify-start md:justify-center px-4 py-3 md:px-8 bg-white border-b">
        {/* Left side: Google reviews */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
          <Link
            href="https://search.google.com/local/writereview?placeid=ChIJyVOoo54u4joRv1EipPoN8OM"
            target="_blank"
          >
            <Image
              src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758087703/629382e030fb025780ee2963_1_ydwtso.png"
              alt="Google Review Icon"
              width={170}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>
        {/* Center logo */}
        <Link href="/" className="inline-block">
          <Image
            src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758026594/aida-hotel-logo_g9vdxd.png"
            alt="Logo"
            width={220}
            height={200}
            className="h-16 w-auto mx-auto"
          />
        </Link>

        {/* Right side: Language only (removed Book Now) */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                <Languages className="h-5 w-5" />
                <span>{getLanguageCode(local)}</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {routing.locales.map((locale) => (
                <DropdownMenuItem
                  key={locale}
                  onClick={() => onselectionchange(locale)}
                >
                  {getLanguageLabel(locale)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="https://booking.aidaayurveda.com" target="_blank">
            <Button size="lg" className="ml-4 rounded-full text-white">
              {t("BookNow")}
            </Button>
          </Link>
        </div>
      </div>

      {/* Desktop nav with centered logo and items around */}
      <nav className="hidden xl:block bg-black px-6 py-3 text-white border-b-3 border-orange-500">
        <div className="flex items-center justify-center gap-6">
          {/* Left items */}
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex space-x-6">
              {leftItems.map((item) => {
                if ("href" in item) {
                  return (
                    <NavigationMenuItem key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-transparent text-white hover:underline hover:text-white font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="bg-transparent text-white font-medium">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-4 w-[240px] bg-white shadow-lg rounded-xl">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block rounded-md px-3 py-2 text-sm text-gray-700 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent data-[active=true]:bg-transparent hover:text-orange-600 transition"
                              >
                                {child.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Right items */}
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex space-x-6">
              {rightItems.map((item) => {
                if ("href" in item) {
                  return (
                    <NavigationMenuItem key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-transparent text-white hover:underline hover:text-white font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="bg-transparent text-white font-medium">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-4 w-[240px] bg-white shadow-lg rounded-xl">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block rounded-md px-3 py-2 text-sm text-gray-700 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent data-[active=true]:bg-transparent hover:text-orange-600 transition"
                              >
                                {child.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Mobile nav trigger */}
      <div className="flex items-center justify-between bg-orange-500 px-4 py-3 text-white xl:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-white transition-all duration-500 ease-in-out xl:hidden",
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {/* Mobile top with centered logo */}
        <div className="flex items-center justify-between p-4 border-b border-orange-500">
          <div className="flex-1 text-center">
            <Link href="/" className="inline-block">
              <Image
                src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758026594/aida-hotel-logo_g9vdxd.png"
                alt="Logo"
                width={200}
                height={200}
                className="h-20 w-auto mx-auto"
              />
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
            className="text-orange-600"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        {/* Mobile links */}
        <div className="flex-1 overflow-auto px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              if ("href" in item) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-3 text-lg font-medium text-orange-600 hover:bg-orange-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              }
              const open = mobileOpenSections[item.name];
              return (
                <li key={item.name}>
                  <button
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-lg font-medium text-orange-600 hover:bg-orange-50"
                    onClick={() => toggleMobileSection(item.name)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        open ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
                      open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <ul className="mt-1 space-y-1 rounded-md bg-orange-50 p-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-base text-orange-700 hover:bg-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile CTA */}
        <div className="p-6">
          <Link href="https://booking.aidaayurveda.com" target="_blank">
            <Button
              className="w-full bg-orange-500 text-white font-medium hover:bg-orange-600 rounded-full py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("BookNow")}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
