export const post = async (url: string, body: Record<string, unknown>) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ ...body }),
    headers: { 'Content-Type': 'application/json' }
  });
};
export const get = async (url: string) => {
  return fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export const URL = process.env.NEXT_PUBLIC_URL_BACKEND;
