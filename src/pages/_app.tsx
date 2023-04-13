import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
