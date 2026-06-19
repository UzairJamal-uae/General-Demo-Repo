export default function Map() {
  return (
    <section className="h-[500px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
      <iframe
        src="https://maps.google.com/maps?q=310%20SHERMAN%20AVE,%20GOODLAND,%20KS,%2067735&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="JWFB Freight Brokerage LLC Location"
      ></iframe>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
    </section>
  );
}
