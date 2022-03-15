import BigNumber from 'bignumber.js'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export function web3BNToFloatString(
  bn:any,
  divideBy:any,
  decimals:any,
  roundingMode = BigNumber.ROUND_DOWN
) {
  const fmt = {
    prefix: '',
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 0,
    fractionGroupSeparator: ' ',
    fractionGroupSize: 0,
    suffix: ''
  }

  BigNumber.config({ FORMAT: fmt });
  const converted = new BigNumber(bn.toString());
  const divided = converted.div(divideBy);
  const toFix = divided.toFixed(decimals, roundingMode);
  return toFix;
}
