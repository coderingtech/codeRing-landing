const CookiesAgreementTypes = {
  ALL: "all",
  ONLY_NECESSARY: "onlyNecessary",
} as const;

export type CookiesAgreementType =
  (typeof CookiesAgreementTypes)[keyof typeof CookiesAgreementTypes];

export default CookiesAgreementTypes;
