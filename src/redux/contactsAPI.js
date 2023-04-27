export const fetchContacts = async () => {
  const data = await fetch(
    'https://644a562c79279846dce55b22.mockapi.io/contacts'
  );
  return await data.json();
};

export const addContact = async data => {
  const res = await fetch(
    'https://644a562c79279846dce55b22.mockapi.io/contacts',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    }
  );
  return res.json();
};

export const deleteContact = async id => {
  const data = await fetch(
    `https://644a562c79279846dce55b22.mockapi.io/contacts/${id}`,
    {
      method: 'DELETE',
    }
  );
  return await data.json();
};
