import CookiesNotificationCookieKeys from "@/Widgets/CookiesNotification/Types/CookiesNotificationCookieKeys.ts";

const CookieKeys = {
  ...CookiesNotificationCookieKeys,
} as const;

export type CookieKey = (typeof CookieKeys)[keyof typeof CookieKeys];

export default CookieKeys;
