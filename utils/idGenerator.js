import { customAlphabet } from "nanoid";

const nanoid = customAlphabet(
  "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  16
);

export function getUniqueId() {
  return nanoid();
}
