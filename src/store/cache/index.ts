import localforage from 'localforage';

const getTimeKey = (key: string) => key + 'Time';

const get = async (
  key: string,
  dispatchApi: () => void,
  dispatchSetCache: (item: unknown) => void
): Promise<void> => {
  const time: number | null = await localforage.getItem(getTimeKey(key));
  if (!time || time < new Date().getTime()) {
    dispatchApi();
  } else {
    const item = await localforage.getItem(key);
    dispatchSetCache(item);
  }
};

const set = async (
  key: string,
  val: unknown,
  expireDays: number = 3
): Promise<void> => {
  const now = new Date().getTime();
  const expiry = new Date(now + expireDays * 24 * 60 * 60 * 1000);
  await localforage.setItem(key, val);
  await localforage.setItem(getTimeKey(key), expiry);
};

const clear = async (): Promise<void> => {
  await localforage.clear();
};

const remove = async (key: string): Promise<void> => {
  await localforage.removeItem(key);
};

export default {
  get,
  set,
  remove,
  clear,
};
