export default function Label({
    children, 
    name
}) {
  return (
    <label htmlFor={name} 
        style={{ 
            fontSize: '12px',
            marginBottom: '4px',
            color: 'var(--cool-gray-40)'
        }}>
            {children}
    </label>
  )
}
