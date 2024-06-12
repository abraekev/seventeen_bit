function YoutubeEmbedded() {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/videoseries?si=ZdcYMTR_GgBA6pDZ&amp;list=PLx5X60wri2oaVrVsFNttC6JPh21JVIH1m"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="flex px-4 py-4 rounded-xl  bg-black shadow-md border-0"
    ></iframe>
  );
}

export default YoutubeEmbedded;
