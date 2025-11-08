interface ServiceCardProps {
  title: string
  description: string
  icon?: JSX.Element
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group rounded-lg border border-gray-800 bg-gray-900/40 p-5 hover:border-accent transition-colors">
      <div className="flex items-start gap-4">
        {icon && <div className="text-accent mt-1">{icon}</div>}
        <div>
          <h3 className="font-semibold text-lg mb-2 tracking-tight">{title}</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
