import { FileText, Brain, Layers, MessageCircle, Globe } from 'lucide-react'
import FeatureCard from './FeatureCard'

function FeatureGrid({ selectedTool, onToolSelect }) {
  const features = [
    {
      id: 'text-suitability',
      icon: FileText,
      title: 'Text Suitability',
      description: 'Determining Text Suitability for your grade level based on Common Core State Standards',
      shade: 'shade1',
    },
    {
      id: 'text-adapter',
      icon: Brain,
      title: 'Text Adapter',
      description: 'Making your lesson inclusive for all learners? Text Adapter for improved clarity',
      shade: 'shade2',
    },
    {
      id: 'organize',
      icon: Layers,
      title: 'Organize',
      description: 'Organize Essential Words based on your text content',
      shade: 'shade5',
    },
    {
      id: 'gist-statements',
      icon: MessageCircle,
      title: 'Gist Statements',
      description: 'Planning your critical reading discussion? Gist Statements and Discussion Questions generator',
      shade: 'shade4',
    },
    {
      id: 'comprehension-canopy',
      icon: Globe,
      title: 'Comprehension Canopy',
      description: 'Launching learning with essential context? Comprehension Canopy image search and generation',
      shade: 'shade3',
    }
  ]

  return (
    <div className="feature-grid">
      {features.slice(0, 3).map((feature) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          shade={feature.shade}
          isSelected={selectedTool === feature.id}
          onClick={() => onToolSelect(feature.id)}
        />
      ))}

      <div className="feature-grid__row-2">
        {features.slice(3).map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            shade={feature.shade}
            isSelected={selectedTool === feature.id}
            onClick={() => onToolSelect(feature.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default FeatureGrid
