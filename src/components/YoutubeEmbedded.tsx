interface YoutubeEmbedProps {
  tailwind?: string;
}
function YoutubeEmbed(props: YoutubeEmbedProps) {
  return (
    <div className={props.tailwind}>
      <iframe
        src="https://www.youtube.com/embed/videoseries?si=ZdcYMTR_GgBA6pDZ&amp;list=PLx5X60wri2oaVrVsFNttC6JPh21JVIH1m"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full rounded-2xl"
      ></iframe>
    </div>
  );
}

export default YoutubeEmbed;
