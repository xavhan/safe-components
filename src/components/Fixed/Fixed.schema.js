export const schema = {
  type: "object",
  properties: {
    nested: {
      type: "object",
      properties: {
        num: {type: "integer"},
      },
      required: ["num"],
    }
  },
}