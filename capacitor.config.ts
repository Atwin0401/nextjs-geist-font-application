import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pawly.app',
  appName: 'PAWLY1',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      keystorePath: 'release.keystore',
      keystoreAlias: 'pawly',
      keystorePassword: 'pawly123',
      keystoreAliasPassword: 'pawly123'  // Changed from keyPassword to keystoreAliasPassword
    }
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#FFFFFF",
      androidSplashResourceName: "splash",
      showSpinner: false
    }
  }
};

export default config;
