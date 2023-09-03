import { EncryptStorage } from "encrypt-storage";

export const encryptedLocalStorage = new EncryptStorage(
  import.meta.env.VITE_REACT_APP_STORAGE_ENCRYPTION_KEY
);
