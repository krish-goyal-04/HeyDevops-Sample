import { useState } from "react";
import { CheckCircle } from "lucide-react"; // Swap with your preferred icons if needed

const learningPoints = [
  "Linux fundamentals /Networking /Administration   ",
  "Git in-depth features and commands",
  "Jenkins CICD DevSecOps pipelines",
  "Jenkins Internals, Jenkins Setup, and Starter Projects",
  "Jenkins integrations with devops tools",
  "Setting up Docker with Linux systems",
  "Docker Volumes/Networking/Architecture",
  "Docker images to containers debugging",
  "Kubernetes Networking/Setup and Architecture",
  "Kubernetes troubleshooting Handling with Spring Boot Application",
  "Istio / Kiali / Jaeger - Keep track of everything in Kubernetes",
  "3 tier app deployment in Kubernetes - Catch those endpoints in dashboard",
  "Publish charts with HELM on Kubernetes",
  "Security issues on Application [ DDOS/XXE/CSS ]",
  "Building K8 Real time manifest file scenarios and troubleshooting",
  "AWS Web Services - Test your skills with Mega Project",
  "Master Terraform Infra creation/Deployment with Provisioners",
  "Create Playbooks with Ansible",
  "Python Real-time Automations",
  "Master BOTO3 by creating infra in AWS",
  "Monitor your applications with Grafana and Prometheus",
  "Splunk integration with Java Spring Boot",
  "Supercharge your development with Visual Studio",
  "Jfrog - Keep track of App's version history",
  "Postman - Hit APIs with ease",
  "Secure/Analyze your project with SonarQube",
  "Shell Scripting Real-time Automations",
  "Learn how to troubleshoot with AI AI concepts with DevOps/SRE stack Code with AI",
  "Red Hat Certified System Admin Scenarios hands-on",
  "Implement role-based access control with Kubernetes",
  "Fine-tune roles and permissions, secure methods, and customize Pods",
  "Secure passwords with Ansible Vault",
  "Azure infra setup with Terraform",
  "Core understanding of CIDR/Linux networking",
  "Jenkins Master-Slave setup",
  "Jenkins webhook setup",
  "Kubernetes Custom Resource Definitions",
  "Master ECS for unit deployments",
  "API Gateway/Load Balancers/Route 53 in AWS",
  "Learn to create JARs with the help of Maven",
  "Create Pipelines for CI/CD using Jenkinsfile shared libraries",
  "Linux Networking - iptables/traceroute/dig/dns/dhcp/ethernet device",
  "Scenario-Oriented troubleshooting questions and answers",
  "Kubernetes webhooks and admission controllers",
  "Python OOP concepts with automations",
  "Using Apache Kafka in Spring Boot",
  "Understanding Grafana Query Language",
  "Prometheus exporters and queries",
  "10 addon real-time Kubernetes scenarios",
  "15 addon Dockerfile scenarios",
  "10 addon Jenkinsfile scenarios",
  "Monolithic vs. Microservice Architecture",
  "Creating REST APIs in Microservice Architecture",
  "Create ATS-friendly Resumes",
  "Get ready for a job with LinkedIn Profile Optimization",
  "Hunt for a job with confidence of 400 interview questions",
];

export default function CourseLearning() {
  const [expanded, setExpanded] = useState(false);

  const visibleItemsCount = expanded ? learningPoints.length : 10;
  const visibleItems = learningPoints.slice(0, visibleItemsCount);

  return (
    <div>
        <h2 className="text-3xl ml-4 font-bold mb-6 text-gray-900 dark:text-gray-100">
        What you'll <span className="text-blue-600 dark:text-blue-400">Learn</span>
      </h2>
       <section className="w-full mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item, index) => (
         <div
            key={index}
            className="
              flex items-start gap-3 text-gray-700 dark:text-gray-300
              dark:hover:bg-white dark:hover:text-gray-900
              hover:bg-gray-200 hover:text-gray-900
              transition-colors duration-300 ease-in-out
              rounded-md p-2
              cursor-pointer
              overflow-hidden
            "
            >
            <CheckCircle className="w-7 h-7 text-green-500 mt-1 flex-shrink-0" />
            <p className="text-lg leading-relaxed font-semibold ">{item}</p>
          </div>
        ))}
      </div>
      {learningPoints.length > 10 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          {expanded ? "Read Less..." : "Read More..."}
        </button>
      )}
    </section>
    </div>
   
  );
}
