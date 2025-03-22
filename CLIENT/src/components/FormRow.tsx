
import { type FormRowProps } from '../types/types'
const FormRow = ({type,name,labelText,defaultValue}:FormRowProps) => {
  return (
    <div className="form-row">
    <label htmlFor={name} className="form-label">
      {labelText}
    </label>
    <input type={type} name={name} id="name" defaultValue={defaultValue} required />
  </div>
  )
}

export default FormRow