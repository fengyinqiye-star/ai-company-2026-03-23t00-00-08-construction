interface GoogleMapProps {
  embedUrl?: string;
}

export default function GoogleMap({ embedUrl }: GoogleMapProps) {
  if (embedUrl) {
    return (
      <div className="w-full aspect-video rounded-lg overflow-hidden border border-border/30">
        <iframe
          src={embedUrl}
          className="w-full h-full"
          loading="lazy"
          title="小林建設株式会社 所在地"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    );
  }

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden border border-border/30 bg-secondary/30 flex items-center justify-center">
      <div className="text-center text-text-secondary">
        <svg
          className="w-12 h-12 mx-auto mb-2 text-primary/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p className="font-medium">Google Maps</p>
        <p className="text-sm mt-1">埼玉県さいたま市大宮区桜木町1-2-3</p>
      </div>
    </div>
  );
}
