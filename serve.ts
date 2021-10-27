import { listenAndServe } from 'https://deno.land/std@0.112.0/http/server.ts';
import {
  parse,
  join,
} from 'https://deno.land/std@0.112.0/path/mod.ts';

import {
  underline,
  blue,
  red,
  green,
  yellow,
} from 'https://deno.land/std@0.113.0/fmt/colors.ts';
// from https://deno.land/std/http/file_server.ts
export const MEDIA_TYPES: Record<string, string> = {
  '.md': 'text/markdown',
  '.html': 'text/html',
  '.htm': 'text/html',
  '.json': 'application/json',
  '.map': 'application/json',
  '.txt': 'text/plain',
  '.ts': 'text/typescript',
  '.tsx': 'text/tsx',
  '.js': 'application/javascript',
  '.jsx': 'text/jsx',
  '.gz': 'application/gzip',
  '.css': 'text/css',
  '.wasm': 'application/wasm',
  '.mjs': 'application/javascript',
  '.otf': 'font/otf',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.conf': 'text/plain',
  '.list': 'text/plain',
  '.log': 'text/plain',
  '.ini': 'text/plain',
  '.vtt': 'text/vtt',
  '.yaml': 'text/yaml',
  '.yml': 'text/yaml',
  '.mid': 'audio/midi',
  '.midi': 'audio/midi',
  '.mp3': 'audio/mp3',
  '.mp4a': 'audio/mp4',
  '.m4a': 'audio/mp4',
  '.ogg': 'audio/ogg',
  '.spx': 'audio/ogg',
  '.opus': 'audio/ogg',
  '.wav': 'audio/wav',
  '.webm': 'audio/webm',
  '.aac': 'audio/x-aac',
  '.flac': 'audio/x-flac',
  '.mp4': 'video/mp4',
  '.mp4v': 'video/mp4',
  '.mkv': 'video/x-matroska',
  '.mov': 'video/quicktime',
  '.svg': 'image/svg+xml',
  '.avif': 'image/avif',
  '.bmp': 'image/bmp',
  '.gif': 'image/gif',
  '.heic': 'image/heic',
  '.heif': 'image/heif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.tiff': 'image/tiff',
  '.psd': 'image/vnd.adobe.photoshop',
  '.ico': 'image/vnd.microsoft.icon',
  '.webp': 'image/webp',
  '.es': 'application/ecmascript',
  '.epub': 'application/epub+zip',
  '.jar': 'application/java-archive',
  '.war': 'application/java-archive',
  '.webmanifest': 'application/manifest+json',
  '.doc': 'application/msword',
  '.dot': 'application/msword',
  '.docx':
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.dotx':
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  '.cjs': 'application/node',
  '.bin': 'application/octet-stream',
  '.pkg': 'application/octet-stream',
  '.dump': 'application/octet-stream',
  '.exe': 'application/octet-stream',
  '.deploy': 'application/octet-stream',
  '.img': 'application/octet-stream',
  '.msi': 'application/octet-stream',
  '.pdf': 'application/pdf',
  '.pgp': 'application/pgp-encrypted',
  '.asc': 'application/pgp-signature',
  '.sig': 'application/pgp-signature',
  '.ai': 'application/postscript',
  '.eps': 'application/postscript',
  '.ps': 'application/postscript',
  '.rdf': 'application/rdf+xml',
  '.rss': 'application/rss+xml',
  '.rtf': 'application/rtf',
  '.apk': 'application/vnd.android.package-archive',
  '.key': 'application/vnd.apple.keynote',
  '.numbers': 'application/vnd.apple.keynote',
  '.pages': 'application/vnd.apple.pages',
  '.geo': 'application/vnd.dynageo',
  '.gdoc': 'application/vnd.google-apps.document',
  '.gslides': 'application/vnd.google-apps.presentation',
  '.gsheet': 'application/vnd.google-apps.spreadsheet',
  '.kml': 'application/vnd.google-earth.kml+xml',
  '.mkz': 'application/vnd.google-earth.kmz',
  '.icc': 'application/vnd.iccprofile',
  '.icm': 'application/vnd.iccprofile',
  '.xls': 'application/vnd.ms-excel',
  '.xlsx':
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.xlm': 'application/vnd.ms-excel',
  '.ppt': 'application/vnd.ms-powerpoint',
  '.pot': 'application/vnd.ms-powerpoint',
  '.pptx':
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.potx':
    'application/vnd.openxmlformats-officedocument.presentationml.template',
  '.xps': 'application/vnd.ms-xpsdocument',
  '.odc': 'application/vnd.oasis.opendocument.chart',
  '.odb': 'application/vnd.oasis.opendocument.database',
  '.odf': 'application/vnd.oasis.opendocument.formula',
  '.odg': 'application/vnd.oasis.opendocument.graphics',
  '.odp': 'application/vnd.oasis.opendocument.presentation',
  '.ods': 'application/vnd.oasis.opendocument.spreadsheet',
  '.odt': 'application/vnd.oasis.opendocument.text',
  '.rar': 'application/vnd.rar',
  '.unityweb': 'application/vnd.unity',
  '.dmg': 'application/x-apple-diskimage',
  '.bz': 'application/x-bzip',
  '.crx': 'application/x-chrome-extension',
  '.deb': 'application/x-debian-package',
  '.php': 'application/x-httpd-php',
  '.iso': 'application/x-iso9660-image',
  '.sh': 'application/x-sh',
  '.sql': 'application/x-sql',
  '.srt': 'application/x-subrip',
  '.xml': 'application/xml',
  '.zip': 'application/zip',
};

const handleRequest = (folder: string) =>
  async function (request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);
    console.info(
      green(`${request.method}`.padStart(5)),
      underline(blue(`${pathname}`)),
    );
    try {
      let { ext, dir, root, base } = parse(pathname);
      if (!ext) {
        ext = '.html';
        base = join(base, 'index.html');
      }
      const path = join(folder, root, dir, base);
      const file = await Deno.readFile(path);

      return new Response(file, {
        headers: {
          'content-type': MEDIA_TYPES[ext],
          'Content-Location': '/' + path,
        },
      });
    } catch (error) {
      console.error(red(error?.message));
      return new Response(
        `<html>
        <body style="padding:2em; font-family:sans;">
          <h1>404</h1>
          <h2>${error?.message}</h2>
          <p><pre>${error?.stack}</pre></p>
        </body>
      </html>`,
        {
          status: 404,
          headers: {
            'content-type': 'text/html; charset=utf-8',
          },
        },
      );
    }
  };

async function main(folder = './', port = 8080) {
  const absoluteFolderPath = join(
    parse(import.meta.url).dir,
    folder,
  );
  console.info(`Serving folder ${yellow(absoluteFolderPath)}`,
    'at',underline(blue(`http://localhost:${port}`))
  )
  await listenAndServe(':' + port, handleRequest(folder));
}
if (import.meta.main) {
  if (Deno.args?.length) {
    await main(Deno.args[0]);
  } else {
    await main();
  }
}
