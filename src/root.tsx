import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import NavBar from "./components/NavBar";
import "../css/animate.css";
import "../css/bootstrap.min.css";
import "../css/fontawesome.min.css";
import "./index.css";
import "./App.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/new-favicon-32x32.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (<><NavBar /><Outlet /></>);
}
