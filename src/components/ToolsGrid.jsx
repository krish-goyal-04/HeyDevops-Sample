import {
  Cloud, Server, Database, Code, GitBranch, Shield,
  Monitor, Cpu, Network, Container, Settings, Zap,
  Terminal, FileCode, Layers, Globe, Lock, Activity,
  Workflow, Package, HardDrive, CloudCog, Gauge,
  Bot, Brain, Rocket, Target
} from "lucide-react";

const tools = [
  {
    name: "AWS",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-orange-400 to-orange-600",
    description: "Amazon Web Services"
  },
  {
    name: "Terraform",
    icon: <Settings className="w-8 h-8" />,
    color: "from-purple-400 to-purple-600",
    description: "Infrastructure as Code"
  },
  {
    name: "Kubernetes",
    icon: <Container className="w-8 h-8" />,
    color: "from-blue-400 to-blue-600",
    description: "Container Orchestration"
  },
  {
    name: "Docker",
    icon: <Package className="w-8 h-8" />,
    color: "from-cyan-400 to-cyan-600",
    description: "Containerization Platform"
  },
  {
    name: "Jenkins",
    icon: <Workflow className="w-8 h-8" />,
    color: "from-red-400 to-red-600",
    description: "CI/CD Automation"
  },
  {
    name: "Prometheus",
    icon: <Gauge className="w-8 h-8" />,
    color: "from-orange-400 to-red-500",
    description: "Monitoring & Alerting"
  },
  {
    name: "Grafana",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-orange-500 to-yellow-500",
    description: "Data Visualization"
  },
  {
    name: "Ansible",
    icon: <Terminal className="w-8 h-8" />,
    color: "from-red-500 to-red-700",
    description: "Configuration Management"
  },
  {
    name: "Git",
    icon: <GitBranch className="w-8 h-8" />,
    color: "from-gray-600 to-gray-800",
    description: "Version Control"
  },
  {
    name: "Linux",
    icon: <Server className="w-8 h-8" />,
    color: "from-yellow-400 to-yellow-600",
    description: "Operating System"
  },
  {
    name: "MySQL",
    icon: <Database className="w-8 h-8" />,
    color: "from-blue-500 to-blue-700",
    description: "Relational Database"
  },
  {
    name: "Java",
    icon: <Code className="w-8 h-8" />,
    color: "from-red-500 to-orange-500",
    description: "Programming Language"
  },
  {
    name: "Python",
    icon: <FileCode className="w-8 h-8" />,
    color: "from-blue-400 to-yellow-400",
    description: "Programming Language"
  },
  {
    name: "Helm",
    icon: <Layers className="w-8 h-8" />,
    color: "from-blue-600 to-indigo-600",
    description: "Kubernetes Package Manager"
  },
  {
    name: "Istio",
    icon: <Network className="w-8 h-8" />,
    color: "from-blue-500 to-purple-500",
    description: "Service Mesh"
  },
  {
    name: "Vault",
    icon: <Lock className="w-8 h-8" />,
    color: "from-yellow-400 to-orange-500",
    description: "Secrets Management"
  },
  {
    name: "Jaeger",
    icon: <Activity className="w-8 h-8" />,
    color: "from-purple-400 to-pink-500",
    description: "Distributed Tracing"
  },
  {
    name: "Maven",
    icon: <Package className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    description: "Build Automation"
  },
  {
    name: "Nginx",
    icon: <Globe className="w-8 h-8" />,
    color: "from-green-500 to-green-700",
    description: "Web Server"
  },
  {
    name: "Redis",
    icon: <HardDrive className="w-8 h-8" />,
    color: "from-red-500 to-red-700",
    description: "In-Memory Database"
  },
  {
    name: "ElasticSearch",
    icon: <Zap className="w-8 h-8" />,
    color: "from-yellow-400 to-yellow-600",
    description: "Search Engine"
  },
  {
    name: "Azure",
    icon: <CloudCog className="w-8 h-8" />,
    color: "from-blue-500 to-blue-700",
    description: "Microsoft Cloud"
  },
  {
    name: "AI/ML",
    icon: <Brain className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    description: "Artificial Intelligence"
  },
  {
    name: "DevOps",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-green-400 to-blue-500",
    description: "Development Operations"
  }
];

export default function ToolsGrid() {
  return (
    <section className="w-full mx-auto py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Tools & Technologies You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Master</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn industry-standard tools and technologies used by top DevOps engineers and SRE professionals worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-8">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative p-4 md:p-6 flex flex-col items-center justify-center min-h-[120px] md:min-h-[140px]">
                  {/* Icon Container */}
                  <div className={`mb-3 p-3 rounded-xl bg-gradient-to-br ${tool.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    {tool.icon}
                  </div>
                  
                  {/* Tool Name */}
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white text-center leading-tight">
                    {tool.name}
                  </h3>
                  
                  {/* Description - Hidden on mobile, shown on hover for larger screens */}
                  <p className="hidden md:block text-xs text-gray-500 dark:text-gray-400 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tool.description}
                  </p>
                </div>
                
                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
              </div>
              
              {/* Tooltip for mobile */}
              <div className="md:hidden absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                {tool.description}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Target className="w-5 h-5" />
            <span>24+ Industry-Standard Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
}
