// Extend the Window interface to include animationsReady
export {};
declare global {
  interface Window {
    animationsReady?: boolean;
  }
}
