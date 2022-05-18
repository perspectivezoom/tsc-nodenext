// ESM module w/ default export broken
import isPlainObject from "is-plain-object";

// CJS module w/ default export broken
import Decimal from "decimal.js";

// CJS modules with separate @types broken
import colors from "colors";

console.log(isPlainObject({}));
console.log(new Decimal(123.4567));
console.log(colors.green("hello"));
