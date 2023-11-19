/* eslint-disable no-console */

const COLORS = {
  Reset: '\x1b[0m',
  Bright: '\x1b[1m',

  Red: '\x1b[31m',
  Green: '\x1b[32m',
  Yellow: '\x1b[33m',
  Blue: '\x1b[34m',
  Magenta: '\x1b[35m',
  Cyan: '\x1b[36m',

};

const MARKER = '****************************************************************************************************';

const log = (message: any, ...args: any) => {
  const color = `${COLORS.Bright}${COLORS.Blue}`;
  console.log(`${color}%s`, message, ...args);
  console.log(`${COLORS.Reset}`);
};

const info = (message: any, ...args: any) => {
  const color = (`${COLORS.Bright}${COLORS.Green}`);
  if (message === MARKER) {
    console.info(`${color}%s`, message, ...args);
  } else {
    console.info(`✅${color}%s`, message, ...args);
  }

  console.info(`${COLORS.Reset}`);
};

const debug = (message: any, ...args: any) => {
  const color = `${COLORS.Bright}${COLORS.Magenta}`;
  console.debug(`${color}%s`, message, ...args);
  console.debug(`${COLORS.Reset}`);
};

const warn = (message: any, ...args: any) => {
  const color = (`${COLORS.Bright}${COLORS.Yellow}`);
  if (message === MARKER) {
    console.warn(`${color}%s`, message, ...args);
  } else {
    console.warn(`❕${color}%s`, message, ...args);
  }
  console.warn(`${COLORS.Reset}`);
};

const error = (message: any, ...args: any) => {
  const color = `${COLORS.Bright}${COLORS.Red}`;

  if (message === MARKER) {
    console.error('$ {color}%s', message, ...args);
  } else {
    console.error(`❌ ${color}%s`, message, ...args);
  }

  console.error(`${COLORS.Reset}`);
};

/**
 * prints object, array in tabular form
 */
const table = (arg: any) => {
  console.table(arg);
};

/**
 * recognizes the object just as an object and output its properties.
 * console.log() expects its parameters to be string
 */
const dir = (arg: any) => {
  console.dir(arg);
};

const logWithMarker = (message: any, ...args: any) => {
  log(MARKER);
  log(message, ...args);
};

const infoWithMarker = (message: any, ...args: any) => {
  info(MARKER);
  info(message, ...args);
};

const debugWithMarker = (message: any, ...args: any) => {
  debug(MARKER);
  debug(message, ...args);
};

const warnWithMarker = (message: any, ...args: any) => {
  warn(MARKER);
  warn(message, ...args);
};

const errorWithMarker = (message: any, ...args: any) => {
  error(MARKER);
  error(message, ...args);
};

const tableWithMarker = (arg: any) => {
  log(MARKER);
  table(arg);
};

const dirWithMarker = (arg: any) => {
  log(MARKER);
  dir(arg);
};

export const logger = {
  log,
  info,
  debug,
  warn,
  error,
  table,
  dir,
  logWithMarker,
  infoWithMarker,
  debugWithMarker,
  warnWithMarker,
  errorWithMarker,
  tableWithMarker,
  dirWithMarker,
};
