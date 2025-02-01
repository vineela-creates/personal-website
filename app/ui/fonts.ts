import { Inter, Lusitana, Poppins, Inconsolata } from "next/font/google";

//export const inter = Inter({ subsets: ["latin"] });

export const inconsolata = Inconsolata({ 
  subsets: ['latin'],
  // Specify the weights you need
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  // Mark it as variable for best performance
  variable: '--font-inconsolata'
})