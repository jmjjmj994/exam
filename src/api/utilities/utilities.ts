export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const parseStorage = () => {
  const user = JSON.parse(localStorage.getItem('user') || '');
  return user;
};

export const getStorage = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  if (token && user) {
    return true;
  } else {
    return false;
  }
};

export const clearStorage = (callback: () => void) => {
  localStorage.clear();
  callback();
};

export const checkUrlValid = async (url: string) => {
  return fetch(url, { method: 'HEAD' })
    .then((res) => {
      const contentType = res.headers.get('Content-Type');
      if (!contentType) {
        return false;
      }
      return contentType.startsWith('image');
    })
    .catch((error) => {
      console.error('Error fetching URL:', error);
      return false;
    });
};
