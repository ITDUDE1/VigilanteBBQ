import Image from "next/image";
import { PHOTOS } from "@/lib/photos";

export function Photos() {
  const hasAnyPhoto = PHOTOS.some((photo) => photo.src !== null);

  return (
    <section
      id="photos"
      className="grain bg-charcoal px-5 py-14 text-bone mob:px-6 mob:py-22"
    >
      <div className="mx-auto max-w-[760px]">
        <h2 className="text-[clamp(2.2rem,6vw,3rem)] text-bone">
          From the pit
        </h2>
        <p className="mt-2 mb-12 max-w-[50ch] text-[1.05rem] text-smoke">
          Cook days, start to finish.
        </p>

        <ul className="grid list-none grid-cols-2 gap-3 mob:grid-cols-3 mob:gap-4">
          {PHOTOS.map((photo) => (
            <li key={photo.caption}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden border border-ticket-edge bg-ticket">
                  {photo.src ? (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 600px) 50vw, 240px"
                      className="object-cover"
                    />
                  ) : (
                    <span className="placeholder absolute inset-0 flex items-center justify-center p-3 text-center text-[0.9rem]">
                      {photo.caption}
                    </span>
                  )}
                </div>
                {photo.src && (
                  <figcaption className="mt-2 text-[0.85rem] italic text-smoke">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>

        {!hasAnyPhoto && (
          <p className="placeholder mt-8 text-[0.95rem]">
            Empty slots — real photos to come.
          </p>
        )}
      </div>
    </section>
  );
}
