import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Potentia - Bitcoin Mining & Hashrate Trading in Ethiopia</title>
        <meta 
          name="description" 
          content="Potentia is transforming Bitcoin mining in Ethiopia by unlocking hashrate trading, creating a secure, scalable, and profitable future for crypto miners." 
        />
        <meta 
          name="keywords" 
          content="Bitcoin mining, Bitcoin hashrate trading, crypto mining Ethiopia, blockchain, mining investment, Bitcoin mining Ethiopia, cryptocurrency mining Africa, Potentia mining" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Potentia" />
        <link rel="canonical" href="https://potentia.digital/" />

        {/* Open Graph (OG) for Social Media */}
        <meta property="og:title" content="Potentia - Powering Ethiopia’s Bitcoin Mining Revolution" />
        <meta property="og:description" content="Potentia is transforming Bitcoin mining in Ethiopia by unlocking hashrate trading, creating a secure, scalable, and profitable future for crypto miners." />
        
        {/* Primary Image (Color) */}
        <meta property="og:image" content="https://potentia.digital/artboardw.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Alternative Image (Black & White) */}
        <meta property="og:image" content="https://potentia.digital/artboardb.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://potentia.digital/" />

        {/* Twitter Card for Better Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Potentia - Bitcoin Mining Revolution in Ethiopia" />
        <meta name="twitter:description" content="Unlock the power of Bitcoin mining in Ethiopia with Potentia. Scalable, profitable, and secure hashrate trading solutions." />
        <meta name="twitter:image" content="https://potentia.digital/artboardw.jpg" />

        {/* Schema Markup for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Potentia",
            "url": "https://potentia.digital/",
            "logo": "https://potentia.digital/Artboardw.png",
            "description": "Potentia specializes in Bitcoin mining, hashrate trading, and unlocking Ethiopia's potential in cryptocurrency.",
            "sameAs": [
              "https://x.com/potentiapower",
              "https://www.instagram.com/potentia.digital",
              "https://www.facebook.com/potentia.digital"
            ]
          })}
        </script>
      </Head>
    </>
  );
}
