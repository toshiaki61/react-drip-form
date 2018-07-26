// @flow
import React, { Component } from 'react';
import invariant from 'invariant';
import isEqual from 'lodash.isequal';
import * as dot from 'dot-wild';
import * as arrays from './utils/arrays';
import hasProp from './utils/hasProp';
import makeDisplayName from './utils/makeDisplayName';
import getFieldType from './utils/getFieldType';
import getFieldValue from './utils/getFieldValue';
import formatFieldValue, { defaultFormatter } from './utils/formatFieldValue';
import parseFieldValue from './utils/parseFieldValue';
import createFieldProps from './utils/createFieldProps';
import { DripFormContext, DripFormGroupContext } from './context';

import type {
  $WrappedComponent,
  DFContext,
  ErrorMessage,
  ErrorMessageList,
  FieldType,
  InternalFieldType,
  FieldProps,
  FieldState,
} from './types';

export type FieldOptions = {
  defaultProps?: Object;
};

const normalizeFieldName = (name: string): string => (
  name.replace(/\[\]$/, '')
);

const getPropsValue = (props: FieldProps, defaultValue: any): any => (
  hasProp(props, 'value') ? props.value : defaultValue
);
class DripFormField extends Component<FieldProps, *> {
  props: FieldProps;

  state: FieldState = {};

  name: string;

  initialValue: any;

  constructor(props: FieldProps) {
    super(props);
    const { context } = props;

    invariant(
      hasProp(context, 'dripForm'),
      'Field component must be inside a Drip Form component (`dripForm()` HOC).'
    );

    const name = normalizeFieldName((context.group ? context.group.name : props.name) || '');

    invariant(
      !!name,
      'Field component must be specified name property.'
    );

    this.name = name;
    context.register(this.name, this);

    this.updateMetaData(props, context, false);

    // from componentWillMount
    // @FIXME: Refactoring
    const contextValue = dot.get(this.props.context.values, this.name);
    let value;

    switch (this.props.fieldtype) {
      case 'radio':
      case 'checkbox':
        value = contextValue;
        break;
      default:
        value = getPropsValue(this.props, contextValue);
        break;
    }

    if (!this.props.context.group) {
      this.props.context.updateValue(this.name, value, false, true);
    }

    this.updateMetaData(this.props, this.props.context, false);
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.props) {
      return { props };
    }
    const {
      name: _name,
      value: _value,
      label: _label,
      validations: _validations,
      normalizers: _normalizers,
      messages: _messages,
      context: {
        register,
        unregister,
        updateValue,
        updateLabel,
        updateValidations,
        updateNormalizers,
        updateMessages,
      },
    } = state.props;

    const {
      name,
      value,
      label,
      validations,
      normalizers,
      messages,
    } = props;

    if (name !== _name) {
      this.name = name;
      unregister(_name);
      register(name, this);
    }

    if (!isEqual(value, _value)) {
      // this.initialValue = value;
      updateValue(name, value, true, true);
    }

    if (!state.props.context.group) {
      if (label !== _label) {
        updateLabel(name, label, true);
      }

      if (!isEqual(validations, _validations)) {
        updateValidations(name, validations, true);
      }

      if (!isEqual(normalizers, _normalizers)) {
        updateNormalizers(name, normalizers, true);
      }

      if (!isEqual(messages, _messages)) {
        updateMessages(name, messages, true);
      }
    }
    return { props };
  }

  componentWillUnmount() {
    this.props.context.unregister(this.name);
  }

  updateMetaData(props: FieldProps, context: DFContext, validate: boolean): void {
    const {
      updateValidations,
      updateNormalizers,
      updateMessages,
      updateLabel,
    } = context;

    const {
      validations,
      normalizers,
      label,
      messages,
    } = props;

    // @FIXME: Refactoring
    const contextValue = dot.get(context.values, this.name);

    switch (this.props.fieldtype) {
      case 'radio':
      case 'checkbox':
        this.initialValue = contextValue;
        break;
      default:
        this.initialValue = getPropsValue(props, contextValue);
        break;
    }

    if (context.group) {
      return;
    }

    updateValidations(this.name, validations, validate);
    updateNormalizers(this.name, normalizers, validate);
    updateLabel(this.name, label, validate);
    updateMessages(this.name, messages, validate);
  }

  getValue(): any {
    return dot.get(this.props.context.values, this.name);
  }

  getType(): InternalFieldType {
    return getFieldType(this.props.fieldtype, this.props);
  }

  getErrors(): ?ErrorMessageList {
    const { group, errors } = this.props.context;
    return group ? undefined : errors[this.name];
  }

  getError(): ?ErrorMessage {
    return arrays.first(this.getErrors() || []);
  }

  isInvalid(): boolean {
    return !!this.getError();
  }

  isValid(): boolean {
    return !this.isInvalid();
  }

  isValidating(): boolean {
    const { group, validating } = this.props.context;

    return group ? false : arrays.includes(validating, this.name);
  }

  isTouched(): boolean {
    const { group, touches } = this.props.context;

    return group ? false : arrays.includes(touches, this.name);
  }

  isUntouched(): boolean {
    return !this.isTouched();
  }

  isDirty(): boolean {
    const { group, dirties } = this.props.context;

    return group ? false : arrays.includes(dirties, this.name);
  }

  isPristine(): boolean {
    return !this.isDirty();
  }

  // @FIXME Refactoring
  getChangedValue(e: any) {
    const { group } = this.props.context;
    const contextValue = this.getValue();
    let value = getFieldValue(this.getType(), e);

    if (group && group.multiple) {
      const ctx = contextValue || [];

      if (value === '') {
        value = arrays.remove(ctx, ctx.indexOf(this.props.value));
      } else {
        value = arrays.push(ctx, value);
      }

      value = value.length > 0 ? value : null;
    }

    return value;
  }

  handleChange = (e: any) => {
    const { updateValue, updateDirty, updateTouched } = this.props.context;
    const { parser } = this.props;
    const value = parseFieldValue(
      this.getChangedValue(e),
      this.name,
      parser
    );

    const dirty = !isEqual(this.initialValue, value);

    if (this.props.fieldtype === 'checkbox' || this.props.fieldtype === 'radio') {
      updateTouched(this.name, true, false);
    }

    updateDirty(this.name, dirty);
    updateValue(this.name, value, true, false);

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e);
    }
  };

  handleBlur = (e: any) => {
    if (this.props.fieldtype !== 'checkbox' && this.props.fieldtype !== 'radio') {
      this.props.context.updateTouched(this.name, true, true);
    }

    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(e);
    }
  };

  handleFocus = (e: any) => {
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(e);
    }
  };

  render() {
    const {
      /* eslint-disable no-unused-vars */
      parser,
      validations,
      normalizers,
      messages,
      onChange,
      onFocus,
      onBlur,
      /* eslint-enable no-unused-vars */
      name,
      value,
      label,
      formatter,
      WrappedComponent,
      ...props
    } = this.props;

    const contextValue = formatFieldValue(
      this.getValue(),
      this.name,
      formatter
    );

    return (
      <WrappedComponent
        {...createFieldProps(this.getType(), contextValue, {
          ...props,
          input: {
            name,
            value,
            onChange: this.handleChange,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
          },
          meta: {
            label,
            error: this.getError(),
            errors: this.getErrors(),
            valid: this.isValid(),
            invalid: this.isInvalid(),
            touched: this.isTouched(),
            untouched: this.isUntouched(),
            dirty: this.isDirty(),
            pristine: this.isPristine(),
            validating: this.isValidating(),
          },
        })}
      />
    );
  }
}
const dripFormField = (fieldType: FieldType = 'text', options: FieldOptions = {}) => (
  (WrappedComponent: $WrappedComponent<*, *>) => (
    (wrappedComponentProps) => {
      DripFormField.displayName = makeDisplayName(WrappedComponent, 'dripFormField');
      // DripFormField.contextTypes = DFContextTypes;
      DripFormField.defaultProps = {
        label: null,
        parser: null,
        formatter: defaultFormatter,
        validations: null,
        normalizers: null,
        messages: null,
        onChange: null,
        onBlur: null,
        onFocus: null,
        ...(options.defaultProps || {}),
      };
      return (
        <DripFormContext.Consumer>
          {formValue => (
            <DripFormGroupContext.Consumer>
              {groupValue => (
                <DripFormField
                  context={groupValue.context || formValue.context}
                  WrappedComponent={WrappedComponent}
                  fieldtype={fieldType}
                  {...wrappedComponentProps}
                />
              )}
            </DripFormGroupContext.Consumer>
          )}
        </DripFormContext.Consumer>
      );
    })
);


export default dripFormField;
