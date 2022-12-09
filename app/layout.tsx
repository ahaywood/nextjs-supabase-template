interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <div>From layout</div>
        <div>
          {children}
        </div>
      </body>
    </html>)
}