/**
 * logoCache.ts
 *
 * Utilitário para cache de logos (PesqBrasil e entidade) no localStorage.
 * Armazena imagens como base64 data URLs para reutilização entre sessões.
 */

const PESQBRASIL_KEY = 'reap-pesqbrasil-logo';
const ENTITY_KEY = 'reap-entity-logo';

// ─── Leitura / Escrita ──────────────────────────────────────────────

export function getCachedLogo(key: 'pesqbrasil' | 'entity'): string | null {
  const storageKey = key === 'pesqbrasil' ? PESQBRASIL_KEY : ENTITY_KEY;
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

export function setCachedLogo(key: 'pesqbrasil' | 'entity', base64DataUrl: string): void {
  const storageKey = key === 'pesqbrasil' ? PESQBRASIL_KEY : ENTITY_KEY;
  try {
    localStorage.setItem(storageKey, base64DataUrl);
  } catch {
    // localStorage cheio ou indisponível — silencioso
  }
}

export function clearCachedLogo(key: 'pesqbrasil' | 'entity'): void {
  const storageKey = key === 'pesqbrasil' ? PESQBRASIL_KEY : ENTITY_KEY;
  try {
    localStorage.removeItem(storageKey);
  } catch {
    // silencioso
  }
}

// ─── Conversores ────────────────────────────────────────────────────

/**
 * Converte um File (upload) para base64 data URL.
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('FileReader não retornou string'));
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

/**
 * Carrega uma imagem de uma URL e converte para base64 data URL.
 * Usa fetch + blob + FileReader.
 */
export async function urlToBase64(url: string): Promise<string> {
  const response = await fetch(url, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(`Falha ao carregar imagem: ${response.status} ${response.statusText}`);
  }
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('FileReader não retornou string'));
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

/**
 * Carrega o logo do PesqBrasil: tenta o cache primeiro,
 * depois o asset local, e faz cache do resultado.
 */
export async function loadPesqBrasilLogo(): Promise<string> {
  const cached = getCachedLogo('pesqbrasil');
  if (cached) return cached;

  // Carrega do asset local embutido no projeto
  const base64 = await urlToBase64('/images/pesqbrasil-logo.png');
  setCachedLogo('pesqbrasil', base64);
  return base64;
}
