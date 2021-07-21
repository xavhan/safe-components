## Runtime safe components idea

### Context:

Currently we have a widespread issue on our codebase, our frontend components do not expose interfaces to express the nature of what they expect as input.
This prevents us from having a centralized input validation mechanism shared by our components, which makes them extremely fragile, if the data received is not the one initially expected.
We have therefore taken the bad habit of being overly defensive by default in the templates to avoid breaking errors at rendering time.
Indeed today a small payload change in a third party api, transmitted as is by our back-for-front to the rendering engine could break the whole app.

### Notes

To avoid confusion please note the following differences:

- `componentId` refers to the so-called "engine" components
- `component` refers to the (svelte) frontend implementation

The registry maps engine components to their implementation in the app.

### Explanations

The idea is to store in a centralized registry a mapping between engine identifiers and their associated implementation / input validation schema.
If you want to add a component in the app, you must absolutely register it and declare a schema that will be used to validate at runtime that the data passed are valid, it is therefore to define a contract at registration. If the data entered do not respect the contract then the component will not be rendered.

To force this centralized validation, we introduce a `Safe` component whose mission is to take an engine input (componentid / data) and to render it **if possible** using the implementations at our disposal via the centralized registry.

- `App` represents a fictitious application
- `registry` is the service that exposes the engine-implem mapping (get/register)
- `registration` is the place where we register one by one our implementation (creation of the mapping)
- we use the JSONSchema specification to express properties contracts and we use ajv to validate the resolved data against components properties schemas. Ajv is also able to output possible errors.

To display a registered component you can now do

```svelte
<Safe engineId="xxx" data={ { prop: 'val' } } />
```


### Play with it

```bash
git clone repo
npm install
npm run dev
```


