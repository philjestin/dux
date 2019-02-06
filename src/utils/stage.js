import freezeObject from './freezeObject';

const STAGE = freezeObject(
  'READY',
  'LOADING',
  'ERROR',
  'LOAD_ERROR',
  'DONE'
);

export default STAGE;
