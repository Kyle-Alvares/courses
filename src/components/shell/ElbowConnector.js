export default function ElbowConnector({
    isLast = false,
    height = '16px',
    width = '16px',
    borderWidth = '1px',
    color = 'var(--gray-60)'
}) {
    return (
        <div className="elbow-connector">
            <div className="top"
                style={{
                    height,
                    width,
                    borderLeft: `${borderWidth} solid ${color}`,
                    borderBottom: `${borderWidth} solid ${color}`
                }}>
            </div>
            <div className="bottom"
                style={{
                    height,
                    width,
                    borderLeft: `${borderWidth} solid ${isLast ? 'transparent' : color}`
                }}>
            </div>
        </div>
    )
}
