import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

const routes = ['/', '/termos-uso', '/privacidade'];
const root = process.cwd();
const template = await readFile(`${root}/dist/index.html`, 'utf8');
const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { AppContent } = await vite.ssrLoadModule('/src/App.tsx');
  const { PAGE_META } = await vite.ssrLoadModule('/src/config/pageMeta.ts');

  for (const route of routes) {
    const body = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: [route], initialIndex: 0 },
        React.createElement(AppContent),
      ),
    );
    const meta = PAGE_META[route];
    const document = template
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
      .replace(/<title[^>]*>.*?<\/title>/s, `<title>${meta.title}</title>`)
      .replace(/(<meta id="meta-description"[^>]*content=")[^"]*(")/, `$1${meta.description}$2`)
      .replace(/(<link id="canonical"[^>]*href=")[^"]*(")/, `$1https://sigess.com.br${route}$2`)
      .replace(/(<meta id="og-url"[^>]*content=")[^"]*(")/, `$1https://sigess.com.br${route}$2`)
      .replace(/(<meta id="og-title"[^>]*content=")[^"]*(")/, `$1${meta.title}$2`)
      .replace(/(<meta id="og-description"[^>]*content=")[^"]*(")/, `$1${meta.description}$2`)
      .replace(/(<meta id="twitter-title"[^>]*content=")[^"]*(")/, `$1${meta.title}$2`)
      .replace(/(<meta id="twitter-description"[^>]*content=")[^"]*(")/, `$1${meta.description}$2`)
      .replaceAll('src="./assets/', 'src="../assets/')
      .replaceAll('href="./assets/', 'href="../assets/');

    await mkdir(`${root}/dist${route}`, { recursive: true });
    await writeFile(`${root}/dist${route}/index.html`, document, 'utf8');
  }
} finally {
  await vite.close();
}
