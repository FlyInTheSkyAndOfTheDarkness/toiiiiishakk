// Переиспользуемая «почтовая марка»: перфорированный край + внутренняя
// рамка + опциональное гашение (postmark).
export default function Stamp({ children, postmark, className = '' }) {
  return (
    <div className={`stamp ${className}`}>
      <div className="stamp__inner">
        {children}
        {postmark && (
          <div className="postmark" style={postmark.style}>
            <span>{postmark.label}</span>
          </div>
        )}
      </div>
    </div>
  )
}
