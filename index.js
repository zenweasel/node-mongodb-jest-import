import mongodb from "mongodb";
import { ensure } from "simplecheck";
import accounting from "accounting-js";

const { Decimal128 } = mongodb;

function toDecimal128(numberToConvert) {
  ensure(numberToConvert, Number);
  return Decimal128.fromString(numberToConvert.toString());
}

function toDecimal(amount) {
  const asFixed = accounting.toFixed(amount);
  const asDecimal = parseFloat(asFixed);
  return asDecimal;
}

function decimal128ToDecimal(numberToConvert) {
  if (!numberToConvert.toString || !numberToConvert._bsontype) {
    throw new TypeError("Not a Decimal128 type");
  }
  const asString = numberToConvert.toString();
  const asDecimal = parseFloat(asString);
  return toDecimal(asDecimal);
}

export default function main(convertVal = 12) {
  const asDecimal128 = toDecimal128(convertVal);
  const asDecimalAgain = decimal128ToDecimal(asDecimal128);
  console.log("asDecimalAgain", asDecimalAgain);
  return asDecimalAgain;
}

main();
