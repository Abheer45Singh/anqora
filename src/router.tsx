import { useEffect, useSyncExternalStore, type AnchorHTMLAttributes, type MouseEvent } from 'react';

/** Minimal dependency-free History API router. */
const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  window.addEventListener('popstate', cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener('popstate', cb);
  };
};
const getPath = () => window.location.pathname.replace(/\/+$/, '') || '/';

export function navigate(to: string) {
  if (to === getPath()) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  window.history.pushState({}, '', to);
  window.scrollTo({ top: 0 });
  listeners.forEach((l) => l());
}

export function usePath() {
  return useSyncExternalStore(subscribe, getPath, () => '/');
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const path = usePath();
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handle} aria-current={path === to ? 'page' : undefined} {...rest}>
      {children}
    </a>
  );
}

/** Sets document title + meta description per route. */
export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | Anqora`;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description]);
}
