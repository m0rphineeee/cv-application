function Input( {label, type, name, value, placeholder, onChange}) {
    return (
        <label>
            {label}
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </label>
    )
}

export default Input