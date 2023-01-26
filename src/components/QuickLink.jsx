import './QuickLink.css';
import Tag from './Tag';

export default function QuickLink({
    text,
    color,
    icon,
    href,
    link,
    onClick,
}) {
    return (
        <Tag
            href={href}
            onClick={onClick}
            link={link}
            text={text}
            backgroundColor={`var(--${color}-100)`}
            borderColor={`var(--${color}-50)`}
            color={`var(--${color}-10)`}
            fontSize="13px"
            leftIcon={<div className={`stroke-${color} vertical-align`}>{icon}</div>} >
        </Tag>
    )
}
