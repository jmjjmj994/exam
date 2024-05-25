import { options } from 'src/api/config/api-options';

export const directLogin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  console.log(email, password);
  fetch('https://v2.api.noroff.dev/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: options.headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      const user = {
        name: responseData.data.name,
        email: responseData.data.email,
        avatar: responseData.data.avatar,
        bio: responseData.data.bio,
      };
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', responseData.data.accessToken);
    })
    .catch((error) => {
      console.error('Error during login:', error);
    });
};
