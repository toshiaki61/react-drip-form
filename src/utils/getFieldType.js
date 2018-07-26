// @flow
import hasProp from './hasProp';
import type { FieldProps, FieldType, InternalFieldType } from '../types';

const getFieldType = (type: FieldType, props: FieldProps): InternalFieldType => {
  if (type === 'select' && hasProp(props, 'multiple') && props.multiple === true) {
    return 'select-multiple';
  }

  return type;
};

export default getFieldType;
