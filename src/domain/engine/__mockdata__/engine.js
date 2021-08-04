export const MOCK_ENGINE_RESPONSE = {
  type: 'redlayout',
  data: { title: 'safe !' },
  items: [
    { type: 'hello', data: { foo: 123 } }, // bad
    { type: 'hello', data: { foo: 123, bar: '456' } }, // ok
    {
      type: 'redlayout',
      data: { title: 'nested layout' },
      items: [
        { type: 'hello', data: {} }, // bad
        {
          type: 'redlayout',
          data: { title: 'more nesting' },
          items: [
            { type: 'hello', data: { foo: 123, bar: 'yoyolo' } },
            { type: 'hello', data: { bar: 1 } }, // bad
          ],
        },
        {
          type: 'redlayout',
          data: { bad: 'bad' },
          items: [
            // bad
            { type: 'hello', data: { foo: 123, bar: 'yoyolo' } },
            { type: 'hello', data: { bar: 1 } }, // bad
          ],
        },
        { type: 'hello', data: { foo: 123, bar: 'yoyolo' } },
      ],
    }, // ok
    { type: 'userlisting', data: { users: 'bad' } }, // bad (would break the app)
    {
      type: 'userlisting',
      data: {
        users: [
          { id: '1', name: 'Xavier' },
          { id: '2', name: 'Bertrand', email: 'example@ex.org' },
        ],
      },
    }, // ok
  ],
};
