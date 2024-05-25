export { capitalizeFirstLetter, getToken, checkUrlValid };

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const getToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  } else {
    return '';
  }
};

const checkUrlValid = async (url: string) => {
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
