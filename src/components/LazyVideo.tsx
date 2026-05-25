import { useRef, useEffect, type VideoHTMLAttributes } from 'react'

interface LazyVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, 'autoPlay' | 'preload'> {
  src: string
}

export default function LazyVideo({ src, className, ...props }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (el.src !== src) el.src = src
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.1 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [src])

  return (
    <video
      ref={ref}
      className={className}
      preload="none"
      muted
      loop
      playsInline
      {...props}
    />
  )
}
