export const competitions = [
  {
    id: 'vulnhunt-gpt',
    title: 'VulnHunt-GPT: Smart Contract Vulnerability Detection',
    description:
      'An AI-powered security analysis system for detecting vulnerabilities in Solidity smart contracts. Combines a fine-tuned CodeBERT detector with RAG-based context retrieval and GPT-4 semantic reasoning for accurate vulnerability classification, line-level analysis, and automated fix suggestions.',
    technologies: [
      'Python',
      'PyTorch',
      'CodeBERT',
      'Transformers',
      'OpenAI GPT-4',
      'Scikit-learn',
      'Streamlit',
      'FAISS',
    ],
    skills: [
      'AI/ML Security',
      'Smart Contract Security',
      'NLP',
      'Deep Learning',
      'RAG Systems',
    ],
    images: ['/images/competitions/vulnhunt/architecture.png'],
    highlights: [
      'Fine-tuned CodeBERT model for multi-label vulnerability classification',
      'RAG system for retrieving semantically similar vulnerable code examples',
      'GPT-4 semantic reasoning with error correction over ML predictions',
      'Line-level vulnerability detection with severity ratings and fix suggestions',
      'Trained on SmartBugs curated dataset covering reentrancy, integer overflow, unchecked calls, and more',
    ],
    pipeline: [
      { step: 'Input', detail: 'Solidity Smart Contract Source Code' },
      { step: 'Detection', detail: 'CodeBERT fine-tuned classifier predicts vulnerability types' },
      { step: 'Retrieval', detail: 'RAG retrieves similar vulnerable code from knowledge base' },
      { step: 'Reasoning', detail: 'GPT-4 performs semantic analysis with error correction' },
      { step: 'Output', detail: 'Security report with line-level findings, severity, and fixes' },
    ],
  },
];
