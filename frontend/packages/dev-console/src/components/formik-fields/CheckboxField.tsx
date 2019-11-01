/* eslint-disable no-unused-vars, no-undef */
import * as React from 'react';
import { useField } from 'formik';
import { FormGroup, Checkbox } from '@patternfly/react-core';
import { CheckboxFieldProps } from './field-types';
import { getCheckboxFieldId } from './field-utils';

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  formLabel,
  helpText,
  required,
  value,
  name,
  ...props
}) => {
  const [field, { touched, error }] = useField({ value, name, type: 'checkbox' });
  const fieldId = getCheckboxFieldId(name, value);
  const isValid = !(touched && error);
  const errorMessage = !isValid ? error : '';
  const { checked, ...restField } = field;
  return (
    <FormGroup
      fieldId={fieldId}
      label={formLabel}
      helperText={helpText}
      helperTextInvalid={errorMessage}
      isValid={isValid}
      isRequired={required}
    >
      <Checkbox
        {...restField}
        {...props}
        // TODO(jtomasek): value shoule be used from restField once the type is fixed on Formik side
        // https://github.com/jaredpalmer/formik/issues/1961#issuecomment-555186737
        value={(restField.value as unknown) as string}
        id={fieldId}
        label={label}
        isChecked={checked}
        isValid={isValid}
        aria-describedby={`${fieldId}-helper`}
        onChange={(val, event) => field.onChange(event)}
      />
    </FormGroup>
  );
};

export default CheckboxField;
