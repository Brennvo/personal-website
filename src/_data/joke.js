const EleventyFetch = require('@11ty/eleventy-fetch');
const WORKER_URL = 'https://daily-joke.catherby.workers.dev/';

async function getJoke() {
  try {
    const { setup, delivery } = await EleventyFetch(WORKER_URL, {
      duration: '1d',
      type: 'json',
    });
    return { setup, delivery };
  } catch (e) {
    console.error(e);
    return null;
  }
}

module.exports = async () => {
  return await getJoke();
};
