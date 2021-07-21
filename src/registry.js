import Ajv from "ajv";
const ajv = new Ajv();

const registry = {};

export const register = (nfsengineid, propsschema, sveltecomponent) => {
  registry[nfsengineid] = {
    schema: propsschema,
    component: sveltecomponent,
  };
};

export const get = (nfsengineid, properties) => {
  if (!registry[nfsengineid]) {
    return { ok: false };
  }
  const schema = registry[nfsengineid].schema;
  const valid = ajv.validate(schema, properties);

  if (!valid) {
    return { ok: true, valid: false, errors: ajv.errors };
  }
  return {
    ok: true,
    valid: true,
    component: registry[nfsengineid].component,
    properties,
  };
};