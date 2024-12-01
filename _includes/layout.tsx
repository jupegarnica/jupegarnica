export default function Layout({ content }: { content: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>garn.dev</title>
        <link rel="stylesheet" type="text/css" href="./fonts.css" />
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <link rel="shortcut icon" href="favicon.svg" type="image/svg"/>
      </head>
      <body>{content}</body>
        <script src="./script.js"></script>
    </html>
  );
}
