import GoogleAnalyticsReporter from "@/components/GoogleAnalyticsReporter"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import Script from "next/script"
import * as gtag from "../utils/gtag"
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Head>
        <title>Othman | Frontend Developer</title>
        <meta
          name="description"
          content="Senior React Frontend Web Developer, I like to build beautiful websites and web apps"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta property="og:title" content="Othman | Frontend Developer" />
        <meta name="image" property="og:image" content="/portfolio.JPG" />
        <meta name="author" content="Othman Shareef" />
        <meta
          property="og:description"
          content="I'm a web developer with a demonstrated history of working in the Information Technology & Services industry for more than 6 years. I love working on projects, converting ideas and UI's to functional web applications and enjoy doing the front-end part because of my skills in user interface design. I create websites and web apps using javascript and typescript frameworks. I have skills in Software Engineering, Front-end web development, React JS, UI Design, Graphic Design, Photography, Translation, Blogging, Software Reviewing, and Management. I'm fast learner with, strong media and communication professional with an engineering degree focused in mechanical engineering from University of Mosul."
        />
        <meta property="og:url" content="https://othman.itechnopro.com" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />

        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
      <GoogleAnalyticsReporter />
    </div>
  )
}
