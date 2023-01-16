export default function SizedBox({
    height = '0px',
    width = '0px'
}) {
  return (
    <div style={{ height, width }}></div>
  )
}
