// font.ts
import { Italiana  } from 'next/font/google';

export const italian = Italiana({
  weight: '400',           // Itallana only has one weight
  subsets: ['latin'],       // Specify subsets as needed
});

// font.ts
import { Inter } from 'next/font/google';

export const inter = Inter({
  weight: ['400', '500', '700'],  // Specify the weights you need
  subsets: ['latin'],             // Add any subsets as needed
});


// font.ts
import { Abhaya_Libre } from 'next/font/google';

export const abhayaLibre = Abhaya_Libre({
  weight: ['400', '500', '700'],  // Specify the weights you need
  subsets: ['latin'],             // Add any subsets as needed
});

// font.ts
import { Inria_Serif } from 'next/font/google';

export const inriaSerif = Inria_Serif({
  weight: ['400', '700'],  // Specify the weights you need
  subsets: ['latin'],      // Add any subsets as needed
});
