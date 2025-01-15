export default function Layout({ content }: { content: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>garn.dev</title>
        <link rel="stylesheet" type="text/css" href="./fonts.css" />
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <link rel="shortcut icon" href="favicon.svg" type="image/svg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{content}</body>
        <script src="./script.js"></script>
    </html>
  );
}
