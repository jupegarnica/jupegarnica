export default function Layout({ content }) {
  return (
    <html>
      <head>
        <title>garn.dev</title>
        <link rel="stylesheet" type="text/css" href="./fonts.css" />
        <link rel="stylesheet" type="text/css" href="./style.css" />
      </head>
      <body>{content}</body>
        <script src="./script.js"></script>
    </html>
  );
}
