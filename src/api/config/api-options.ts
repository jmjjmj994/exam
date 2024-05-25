export const options = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    'X-Noroff-API-Key': '820c799a-e066-4ae6-96bc-408539c12589',
  },
  body: (data: unknown) => JSON.stringify(data),
};
