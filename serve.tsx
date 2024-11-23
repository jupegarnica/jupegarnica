import { Hono } from 'hono';
import { serveStatic } from 'hono/deno';

const app = new Hono();

app.use('/', serveStatic({ root: './v2022/_site' }));
app.use('/v2024', serveStatic({ root: './v2024/_site' }));
app.use('/v2020/*', serveStatic({ root: './v2020/dist/build' }));
app.use('/v2018/*', serveStatic({ root: './v2018' }));
app.use('/v2022', c => c.redirect('/', 301));

app.use('*', serveStatic({ root: '.' }));

app.onError((err, c) => {
  console.error(c.req.url, err);
  return c.redirect('/', 301);
});


Deno.serve(app.fetch)
