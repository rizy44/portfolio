export const projects = [
  {
    id: 'secops-platform',
    title: 'SecOps Infrastructure Compliance & Monitoring Platform',
    description:
      'A comprehensive SOAR platform for OpenStack cloud environments. Provides automated security scanning with continuous detection of misconfigurations, AI-powered remediation suggestions using GPT-4, and a complete observability stack with Prometheus, Grafana, and Loki.',
    technologies: [
      'OpenStack',
      'Terraform',
      'Ansible',
      'Python',
      'FastAPI',
      'Docker',
      'Prometheus',
      'Grafana',
      'Loki',
      'Checkov',
    ],
    skills: [
      'DevSecOps',
      'Infrastructure Security',
      'Automation',
      'Cloud Security',
      'SOAR',
    ],
    githubUrl: 'https://github.com/rizy44/secops-misconfig-detection-and-remediation',
    images: ['/images/projects/secops/architecture.png'],
    highlights: [
      'Automated scans every 60s across Security Groups, API Endpoints, and OS Baselines',
      'Pre-deploy IaC scanning pipeline with Checkov, Trivy, and ansible-lint',
      'Full observability stack: Prometheus + Grafana + Loki + Alertmanager',
      'Web dashboard with real-time findings display and approval workflow',
      'CLI tool (secops-cli) for managing findings and triggering remediations',
    ],
    architecture: {
      overview: 'OpenStack Cloud → SecOps Scanner API → SQLite DB + Prometheus Metrics → Grafana Dashboards',
      components: [
        { name: 'SecOps App', detail: 'FastAPI backend with APScheduler, OpenStack SDK scanners' },
        { name: 'Observability', detail: 'Prometheus (metrics) + Loki (logs) + Grafana (dashboards)' },
        { name: 'Pre-deploy', detail: 'GitHub Actions CI with Checkov, Trivy, yamllint, ansible-lint' },
      ],
    },
  },
  {
    id: 'juiceshop-deployment',
    title: 'OWASP Juice Shop Cloud Deployment Pipeline',
    description:
      'End-to-end automated deployment pipeline for OWASP Juice Shop on OpenStack cloud using Infrastructure as Code. Implements a Gateway → Edge architecture with HAProxy load balancing, private Docker registry, and APT proxy for efficient container management.',
    technologies: [
      'Terraform',
      'Ansible',
      'OpenStack',
      'HAProxy',
      'Docker',
      'Kolla-Ansible',
    ],
    skills: [
      'Cloud Infrastructure',
      'IaC',
      'Load Balancing',
      'Container Orchestration',
      'CI/CD',
    ],
    images: ['/images/projects/juiceshop/scoreboard.png'],
    githubUrl: 'https://github.com/rizy44/Deploy-JuiceShop-with-ansible-and-terraform-on-Openstack',
    highlights: [
      'Gateway → Edge deployment model with network isolation',
      'HAProxy load balancing across multiple edge nodes',
      'Private Docker registry for secure image management',
      'APT proxy for efficient package caching',
    ],
    architecture: {
      overview: 'Browser → Gateway (HAProxy + Registry + APT Proxy) → Edge Nodes (Docker + Juice Shop)',
      components: [
        { name: 'Gateway', detail: 'Public-facing node with HAProxy, Docker Registry, apt-cacher-ng' },
        { name: 'Edge Nodes', detail: 'Private nodes running Juice Shop containers' },
        { name: 'IaC Pipeline', detail: 'Terraform provisions infra, generates inventory for Ansible' },
      ],
    },
  },
  {
    id: 'hybrid-cloud-iac',
    title: 'Hybrid Cloud IaC Anomaly Detection System',
    description:
      'Infrastructure as Code anomaly detection system for hybrid cloud environments. Monitors and detects configuration drift and security anomalies across cloud infrastructure deployments, providing early warning of potential misconfigurations.',
    technologies: ['Python', 'Terraform', 'Cloud APIs', 'Machine Learning'],
    skills: [
      'Cloud Security',
      'Anomaly Detection',
      'IaC',
      'Hybrid Cloud',
      'Threat Analysis',
    ],
    githubUrl: 'https://github.com/rizy44/Hybrid-Cloud-IaC-Anomaly-Detection-System',
    images: ['/images/projects/misconfig/topo.png'],
    highlights: [
      'Real-time Infrastructure as Code anomaly detection',
      'Hybrid cloud environment support',
      'Configuration drift monitoring and alerting',
    ],
  },
];
