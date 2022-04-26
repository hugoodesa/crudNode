export const InputField = ({label,type,setter}) => {
  return (
    <div className="mb-3">
      <input type={type} className="form-control" id={label.trim()} aria-describedby={label} placeholder={label} onChange={e=>setter(e.target.value)}/>
    </div>
  )
}