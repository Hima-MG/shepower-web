import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  loading?: 'eager' | 'lazy';
  fallbackTitle?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  aspectClassName = '',
  loading = 'lazy',
  fallbackTitle,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#193D66] via-[#234B78] to-[#193D66] text-[#F7F4ED] p-6 text-center ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-6 h-6 text-[#A9C5DF] mb-3 opacity-80" strokeWidth={1.5} />
        {fallbackTitle ? (
          <span className="font-editorial text-xl tracking-wide text-[#F7F4ED]">{fallbackTitle}</span>
        ) : null}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`${aspectClassName} ${className}`}
    />
  );
}
