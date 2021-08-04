const userSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string' },
  },
  required: ['id', 'name'],
};

export const schema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      items: { $ref: '#/$defs/user' },
    },
  },
  required: ['users'],
  $defs: {
    user: userSchema,
  },
};
