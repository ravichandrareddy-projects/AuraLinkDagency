export default function HoverText({ text, className = "", highlightHover = true }) {
  return (
    <span className="inline-block">
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-300 hover:-translate-y-2 hover:scale-110 cursor-default ${
            highlightHover ? 'hover:text-indigo-400 hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]' : ''
          } ${className}`}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  )
}
