import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /**
   * Porcentagem do elemento que deve estar visível para disparar (0–1).
   * @default 0.15
   */
  threshold?: number;
  /**
   * Se verdadeiro, anima apenas na primeira vez que o elemento entra no viewport.
   * @default true
   */
  triggerOnce?: boolean;
  /**
   * Margem extra ao redor do root (ex.: '0px 0px -80px 0px' para disparar um
   * pouco antes do elemento chegar totalmente ao viewport).
   * @default '0px 0px -60px 0px'
   */
  rootMargin?: string;
}

/**
 * Hook que retorna [ref, isVisible].
 * Aplique `ref` ao elemento que deseja observar e use `isVisible` para
 * condicionar classes de animação.
 *
 * @example
 * const [ref, isVisible] = useInView();
 * <div ref={ref} className={`will-animate ${isVisible ? 'is-visible' : ''}`} />
 */
export function useInView<T extends Element = HTMLDivElement>(
  options: UseInViewOptions = {},
): [React.RefObject<T | null>, boolean] {
  const {
    threshold = 0.15,
    triggerOnce = true,
    rootMargin = '0px 0px -60px 0px',
  } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin]);

  return [ref, isVisible];
}
