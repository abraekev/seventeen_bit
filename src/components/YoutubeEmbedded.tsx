interface YoutubeEmbeddedProps {
  width?: string;
  height?: number;
}
function YoutubeEmbedded({ width, height }: YoutubeEmbeddedProps) {
  const classNameValue: string = `${width} max-w-full rounded-2xl`;
  return (
    <iframe
      height={height && height > 0 ? height : -1}
      src="https://www.youtube.com/embed/videoseries?si=ZdcYMTR_GgBA6pDZ&amp;list=PLx5X60wri2oaVrVsFNttC6JPh21JVIH1m"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className={classNameValue}
    ></iframe>
  );
}

export default YoutubeEmbedded;
