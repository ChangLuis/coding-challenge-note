
import { useState, useCallback } from 'react';

const useForm = ({initialValues, validation, onSubmit}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const memoHandleChange = useCallback((e) => { 
    const currentField = e.target;
    setValues(preValues => ({ ...preValues, [currentField.name]: currentField.value }));
   }, [])

  const memoErrorEmptyChecking = useCallback(() => {
    const refreshErrors = validation(values);
    setErrors(refreshErrors);

    return Object.keys(refreshErrors).length === 0
  }, [values, validation]);

  const memoHandleSubmit = useCallback(() => {
    if (memoErrorEmptyChecking()) return onSubmit(values)
  }, [values, onSubmit, memoErrorEmptyChecking]);

  return { handleChange: memoHandleChange, handleSubmit: memoHandleSubmit, values, errors }
};

export default useForm;
