const freezeObject = (...keys) =>
  Object.freeze(
    keys.reduce((obj, key) => {
      obj[key] = Symbol(key);
      return obj;
    }, {})
  );

export default freezeObject;
