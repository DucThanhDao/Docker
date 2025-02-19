/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_PORT: number
    readonly VITE_EXPRESS_BE_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}