// @flow
import React, { Component } from 'react';
import invariant from 'invariant';
import isEqual from 'lodash.isequal';
import * as dot from 'dot-wild';
import * as arrays from './utils/arrays';
import hasProp from './utils/hasProp';
import makeDisplayName from './utils/makeDisplayName';
import { DripFormContext, DripFormGroupContext } from './context';

import type {
  $WrappedComponent,
  DFContext,
  ErrorMessageList,
  ErrorMessage,
  Validations,
  Normalizers,
  MessageList,
} from './types';

export type Props = {
  context: DFContext;
  WrappedComponent: React$Node;
  name: string;
  value?: any;
  label?: string;
  multiple?: boolean;
  validations?: Validations;
  normalizers?: Normalizers;
  messages?: MessageList;
};

export type State = {
};

export type GroupOptions = {
  defaultProps?: Object;
};

class DripFormGroup extends Component<*, *> {
  props: Props;

  state: State;

  initialValue: any;

  constructor(props: Props) {
    super(props);
    const { context } = props;

    invariant(
      hasProp(context, 'dripForm'),
      'FieldGroup component must be inside a Drip Form component (`dripForm()` HOC).'
    );

    invariant(
      !!props.name,
      'FieldGroup component must be specified name property.'
    );

    this.updateMetaData(props, context, false);
  }

  componentWillMount() {
    const { name } = this.props;
    const value = this.props.value !== null
      ? this.props.value
      : dot.get(this.props.context.values, name);

    this.props.context.updateValue(name, value, false, true);
    this.updateMetaData(this.props, this.props.context, false);
  }

  componentWillReceiveProps(nextProps: Props): void {
    const {
      updateValue,
      updateLabel,
      updateValidations,
      updateNormalizers,
      updateMessages,
    } = this.props.context;

    const {
      value: _value,
      label: _label,
      validations: _validations,
      normalizers: _normalizers,
      messages: _messages,
    } = this.props;

    const {
      name,
      value,
      label,
      validations,
      normalizers,
      messages,
    } = nextProps;

    if (!isEqual(value, _value)) {
      this.initialValue = value;
      updateValue(name, value, true, true);
    }

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

  updateMetaData(props: Props, context: DFContext, validate: boolean): void {
    const {
      updateValidations,
      updateNormalizers,
      updateMessages,
      updateLabel,
    } = context;

    const {
      name,
      validations,
      normalizers,
      label,
      messages,
    } = props;

    this.initialValue = dot.get(context.values, name);

    updateValidations(name, validations, validate);
    updateNormalizers(name, normalizers, validate);
    updateLabel(name, label, validate);
    updateMessages(name, messages, validate);
  }

  getValue(): any {
    return dot.get(this.props.context.values, this.props.name);
  }

  getErrors(): ?ErrorMessageList {
    const { errors } = this.props.context;
    const { name } = this.props;

    return hasProp(errors, name) ? errors[name] : undefined;
  }

  getError(): ?ErrorMessage {
    const errors = this.getErrors();
    return errors ? errors[0] : undefined;
  }

  isInvalid(): boolean {
    return !!this.getError();
  }

  isValid(): boolean {
    return !this.isInvalid();
  }

  isValidating(): boolean {
    return arrays.includes(this.props.context.validating, this.props.name);
  }

  isTouched(): boolean {
    return arrays.includes(this.props.context.touches, this.props.name);
  }

  isUntouched(): boolean {
    return !this.isTouched();
  }

  isDirty(): boolean {
    return arrays.includes(this.props.context.dirties, this.props.name);
  }

  isPristine(): boolean {
    return !this.isDirty();
  }

  render() {
    const {
      /* eslint-disable no-unused-vars */
      multiple,
      validations,
      normalizers,
      messages,
      /* eslint-enable no-unused-vars */
      name,
      label,
      WrappedComponent,
      ...props
    } = this.props;

    const context = {
      ...this.props.context,
      group: {
        name,
        multiple,
      },
    };
    return (
      <DripFormGroupContext.Provider value={{ context }}>
        <WrappedComponent
          {...props}
          meta={{
            name,
            label,
            value: this.getValue(),
            error: this.getError(),
            errors: this.getErrors(),
            valid: this.isValid(),
            invalid: this.isInvalid(),
            touched: this.isTouched(),
            untouched: this.isUntouched(),
            dirty: this.isDirty(),
            pristine: this.isPristine(),
            validating: this.isValidating(),
          }}
        />
      </DripFormGroupContext.Provider>
    );
  }
}

const dripFormGroup = (options: GroupOptions = {}) => (
  (WrappedComponent: $WrappedComponent<*, *>) => (
    (wrappedComponentProps) => {
      DripFormGroup.displayName = makeDisplayName(WrappedComponent, 'dripFormGroup');
      DripFormGroup.defaultProps = {
        multiple: false,
        value: null,
        label: null,
        validations: null,
        normalizers: null,
        messages: null,
        ...(options.defaultProps || {}),
      };
      return (
        <DripFormContext.Consumer>
          {({ context }) => (
            <DripFormGroup
              context={context}
              WrappedComponent={WrappedComponent}
              {...wrappedComponentProps}
            />
          )}
        </DripFormContext.Consumer>
      );
    })
);


export default dripFormGroup;
