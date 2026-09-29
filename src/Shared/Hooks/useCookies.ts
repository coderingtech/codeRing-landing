import { type CookieKey } from "@/Shared/Types/CookieKeys.ts";

const COOKIE_MAX_AGE_DAYS = 365;

const useCookies = () => {
  const read = (key: CookieKey): string | null => {
    if (typeof document === "undefined") return null;

    const encodedKey = `${encodeURIComponent(key)}=`;
    const cookie = document.cookie
      .split("; ")
      .find((item) => item.startsWith(encodedKey));

    if (!cookie) return null;

    return decodeURIComponent(cookie.slice(encodedKey.length));
  };

  const write = (
    key: CookieKey,
    value: string,
    days = COOKIE_MAX_AGE_DAYS,
  ): void => {
    if (typeof document === "undefined") return;

    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000,
    ).toUTCString();

    document.cookie = `${encodeURIComponent(
      key,
    )}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  };

  return { read, write };
};

export default useCookies;
