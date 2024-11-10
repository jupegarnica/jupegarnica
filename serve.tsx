import { Hono } from 'hono';
import { serveStatic } from 'hono/deno';

const app = new Hono();

app.use('/', serveStatic({ root: './v2022/_site' }));
app.use('/v2020/*', serveStatic({ root: './v2020/dist/build' }));
app.use('/v2018/*', serveStatic({ root: './v2018' }));
app.use('/v2022/*', serveStatic({ root: './v2022/_site' }));

app.use('*', serveStatic({ root: '.' }));

app.onError((err, c) => {
  console.error(c.req.url, err);
  return c.text('Not found', 404);
});


Deno.serve(app.fetch)
