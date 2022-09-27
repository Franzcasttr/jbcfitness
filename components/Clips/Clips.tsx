const Clips = () => {
  return (
    <div className='mb-32 mt-20'>
      <p className='font-bold text-3xl text-center'>
        Here are some clips of our clients
      </p>
      <div className='video-container neon rounded-xl mt-8'>
        <iframe
          src='https://www.youtube.com/embed/G5xSLbYMr-I'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Clips;

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/G5xSLbYMr-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
