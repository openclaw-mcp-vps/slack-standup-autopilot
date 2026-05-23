import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Slack Standup Autopilot – Auto-generate daily standups from your commits",
  description: "Connects to GitHub/GitLab and automatically posts formatted standup updates to Slack based on commits and PR activity. Save time, stay aligned."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4bef9d84-104a-4a48-8a70-c6db83539807"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
