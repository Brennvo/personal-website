const WORKER_URL = 'https://daily-joke.catherby.workers.dev/';

async function getJoke() {
  try {
    const res = await fetch(WORKER_URL);
    const data = await res.json();
    const { setup, delivery } = data;
    return { setup, delivery };
  } catch (e) {
    console.error(e);
    return null;
  }
}

module.exports = async () => {
  return await getJoke();
};
