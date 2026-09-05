export type Photo = {
  /**
   * Path to a file in public/photos/, e.g. "/photos/brisket.jpg".
   * Leave null and the tile renders as an empty slot until there's a real one.
   */
  src: string | null;
  /** What's in the shot, for screen readers. Fill in with the photo. */
  alt: string;
  /** Shown under the photo, and inside the empty slot as a hint. */
  caption: string;
};

/**
 * Photo slots for the menu page.
 *
 * To fill one in: drop the file in public/photos/, set `src` to its path and
 * write a real `alt`. Order here is the order on the page.
 */
export const PHOTOS: Photo[] = [
  { src: null, alt: "", caption: "Brisket, sliced" },
  { src: null, alt: "", caption: "Bark, up close" },
  { src: null, alt: "", caption: "Burnt ends" },
  { src: null, alt: "", caption: "Ribs coming off" },
  { src: null, alt: "", caption: "The offset at sunrise" },
  { src: null, alt: "", caption: "A full tray" },
];
