import type { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Visual TenX | Digital Marketing & Software Development",
    template: "%s | Visual TenX",
  },
  description: "Visual TenX is a premier IT agency specializing in Digital Marketing, Web Development, SEO, and Custom Software Solutions. We transform businesses with technology.",
  keywords: ["Digital Marketing", "Web Development", "Software Development", "SEO", "App Development", "IT Agency"],
  authors: [{ name: "Visual TenX Team" }],
  creator: "Visual TenX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visualtenx.com",
    title: "Visual TenX | Digital Marketing & Software Development",
    description: "Transform your business with cutting-edge digital solutions. From high-performance websites to strategic marketing campaigns.",
    siteName: "Visual TenX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual TenX | Digital Marketing & Software Development",
    description: "Transform your business with cutting-edge digital solutions.",
    creator: "@visualtenx",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased bg-background text-foreground scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
