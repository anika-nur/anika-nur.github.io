/* ══════════════════════════════════════════
   Computational Projects — add one entry per project.
   - id: unique, URL-safe slug — used in the "View project" link
   - type: category label, e.g. "Bioinformatics", "Web App", "NLP", "Data Analysis"
   - title: project title
   - excerpt: 1–2 sentence teaser shown on Home and the archive page
   - tags: array of tech/language tags shown as chips
   - github: full GitHub repo URL, or null if not yet public
   - live: full URL to deployed web app, or null if not deployed
   - files: array of { name, url } for individual files (code, README, report, etc.)
     URLs can be GitHub raw links, blob view links, Google Drive, or any direct URL.
     Leave as [] if you have no individual files to link, or just set github above.
     Examples:
       { name: "README.md",  url: "https://github.com/you/repo/blob/main/README.md" }
       { name: "main.py",    url: "https://raw.githubusercontent.com/you/repo/main/main.py" }
       { name: "report.pdf", url: "https://drive.google.com/..." }
   - readme: your description of the project, as an array of paragraphs
     (each array item becomes its own <p> on the project page)
   ══════════════════════════════════════════ */

const projectsData = [
  {
    id: "parkinsons",
    type: "Bioinformatics",
    title: "Parkinson's Detection with Machine Learning",
    excerpt: `A supervised machine-learning project that detects Parkinson's Disease from voice recordings — a low-cost, non-invasive path toward early screening. 
    This work was peer-reviewed and published in Neurology.`,
    tags: ["Python", "Pandas", "Seaborn", "Scikit-learn"],
    github: "https://github.com/anika-nur/Parkinson-s-Detection-with-Machine-Learning.git",
    live: null,
    files: [],
    readme: [
      `A supervised machine-learning project that detects Parkinson's Disease from voice recordings — a low-cost, non-invasive path toward early screening. Because roughly 90% of people with Parkinson's develop measurable voice impairment (dysphonia) early on, subtle acoustic changes in a sustained vowel can serve as a biomarker for the disease.`,
      `Using the Oxford Parkinson's Disease Detection Dataset (195 recordings from 31 people, 22 biomedical voice measures each), I ran a full exploratory analysis of the vocal features, then trained and compared five classifiers — Logistic Regression, K-Nearest Neighbors, Support Vector Machine, Decision Tree, and Random Forest — evaluating each on accuracy, precision, recall, F1, and confusion matrices. The Random Forest performed best at separating healthy subjects from those with Parkinson's.`,
      `This work was peer-reviewed and published in Neurology.`,
      `Built with: Python · pandas · scikit-learn · matplotlib · seaborn · Jupyter`
    ]
  },
  {
    id: "genome-assembly",
    type: "Bioinformatics",
    title: "CiFi + Hifiasm — Phased Diploid Genome Assembly",
    excerpt: "A bioinformatics project reproducing the de novo, haplotype-resolved genome assembly of the Mediterranean fruit fly (Ceratitis capitata, ~600 Mbp) from a single individual.",
    tags: ["Hifiasm Software", "Python", "Genomics"],
    github: "https://github.com/anika-nur/Hifiasm.git",
    live: null,
    files: [],
    readme: [
      `A bioinformatics project reproducing the de novo, haplotype-resolved genome assembly of the Mediterranean fruit fly (Ceratitis capitata, ~600 Mbp) from a single individual, following the CiFi paper (McGinty et al., 2025, Nature Communications).`,
      `The pipeline takes CiFi-phased PacBio HiFi reads, converts the chromatin-contact reads into paired-end format, assembles them with hifiasm (using its advanced --dual-scaf contact-based phasing), and scaffolds the result to chromosome scale with YaHS. Assembly quality is validated with standard metrics (N50, L50) and BUSCO completeness scoring. My CiFi-phased assemblies reached up to 99.7% BUSCO completeness — at or above the range reported in the original paper.`,
      `Run end-to-end on an HPC cluster (SLURM), this project demonstrates a real, benchmarked genomics workflow and a careful comparison of alignment strategies (BWA vs. minimap2/Pore-C) against published results. Conducted at Colby College under Dr. David R. Angelini.`,
      `Built with: hifiasm · YaHS · BUSCO · minimap2 · BWA · samtools · Python · Bash · SLURM`
    ]
  },
  {
  id: "CAFE5",
  type: "Bioinformatics",
  title: "CAFE5 Analysis — Gene Family Evolution in Bumble Bees",
  excerpt: "A comparative-genomics pipeline that studies how gene families expand and contract across 11 Bombus (bumble bee) species...",
  tags: ["CAFE5 Software", "Python", "R", "Orthofinder Software", "Genomics"],
  github: "https://github.com/anika-nur/Cafe5_Analysis.git",
  live: null,
  files: [],
  readme: [
    `A comparative-genomics pipeline that studies how gene families expand and contract across 11 Bombus (bumble bee) species, using CAFE5 to estimate the rate of gene gain and loss and to identify rapidly evolving gene families across the phylogeny.`,
    `Starting from NCBI RefSeq protein data, the pipeline filters each gene to its longest isoform, clusters proteins into orthogroups with OrthoFinder, builds and refines an ultrametric species tree (Python + R/phytools), and formats everything into CAFE5-ready inputs — with Apis mellifera (honeybee) as the outgroup. The core question: which gene families are changing significantly across bumble bees, and how fast?`,
    `Fully scripted for an HPC cluster (SLURM), it's a reproducible, well-documented workflow spanning data retrieval, orthology inference, and phylogenetic modeling. Conducted at Colby College under Dr. David R. Angelini.`,
    `Built with: CAFE5 · OrthoFinder · BioPython · R (phytools) · NCBI Datasets · Bash · SLURM`
  ]
},
{
id: "Faceguard",
type: "CS",
title: "FaceGuard — Face Verification with Siamese Networks",
excerpt: "A real-time face verification system that decides whether two face images belong to the same person ...",
tags: ["CAFE5 Software", "Python", "R", "Orthofinder Software", "Genomics"],
github: "https://github.com/anika-nur/FaceGuard.git",
live: null,
files: [],
readme: [
  `A real-time face verification system that decides whether two face images belong to the same person. Built on a Siamese Neural Network with a One-Shot Learning approach, it achieves high accuracy from minimal training data — verifying identities without needing thousands of examples per person.`,
  `The model pairs deep learning for feature learning with OpenCV for live image capture and processing, so verification runs in real time against a webcam feed. A trained model and full write-up accompany the code.`,
  `Built with: Python · TensorFlow/Keras · Siamese Neural Networks · OpenCV · Jupyter`
]
},
{
id: "Microbiome",
type: "CS",
title: "Microbiome Analysis with Python",
excerpt: "An end-to-end Python pipeline that analyzes the gut microbiomes of soapberry bugs (Jadera haematoloma) from 16S rRNA sequencing data.",
tags: ["Pandas", "Python", "Matplotlib", "Seaborn", "Jupyter Notebook"],
github: "https://github.com/anika-nur/Microbiome_Analysis_with_Python.git",
live: null,
files: [],
readme: []
}

  // Add new projects below — copy a block above and edit the fields.
  // {
  //   id: "my-project-slug",
  //   type: "Web App",           // Bioinformatics | NLP | Data Analysis | Web App | etc.
  //   title: "Project Title",
  //   excerpt: "One or two sentences for the homepage and archive card.",
  //   tags: ["Python", "React"],
  //   github: "https://github.com/yourusername/repo-name",  // or null
  //   live: "https://yourapp.com",                           // or null
  //   files: [
  //     { name: "README.md", url: "https://github.com/yourusername/repo-name/blob/main/README.md" },
  //     { name: "main.py",   url: "https://raw.githubusercontent.com/yourusername/repo-name/main/main.py" },
  //   ],
  //   readme: [
  //     "First paragraph of the full description.",
  //     "Second paragraph.",
  //     "As many as you want."
  //   ]
  // },
];
