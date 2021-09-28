import { useState } from 'react';

const useForm = ({initialValues, validation, onSubmit}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const currentField = e.target;
    setValues(preValues => ({...preValues, [currentField.name]: currentField.value}));
  };

  const errorEmptyChecking = () => {
    const refreshErrors = validation(values);
    setErrors(refreshErrors);

    return Object.keys(refreshErrors).length === 0
  };

  const handleSubmit = () => {
    if (errorEmptyChecking()) return onSubmit(values)
  };

  return { handleChange, handleSubmit, values, errors }
};

export default useForm;
