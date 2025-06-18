// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About Me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research-projects",
          title: "Research Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/www.dropbox.com/scl/fi/swxxozf89ocg0vsxl1g1p/CV.pdf?rlkey=ew30kljle9eh10loj2awbu8uj&st=gleetvuv&dl=0";
          },
        },{id: "news-i-presented-flighted-and-dharma-as-a-poster-presentation-at-the-mlsb-workshop-at-neurips-2023",
          title: 'I presented FLIGHTED and DHARMA as a poster presentation at the MLSB workshop...',
          description: "",
          section: "News",},{id: "news-i-presented-flighted-and-dharma-as-an-oral-presentation-at-the-gembio-workshop-at-iclr-2024",
          title: 'I presented FLIGHTED and DHARMA as an oral presentation at the GEMBio workshop...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-phd-thesis-at-mit-and-received-my-phd-in-computational-and-systems-biology",
          title: 'I successfully defended my PhD thesis at MIT and received my PhD in...',
          description: "",
          section: "News",},{id: "news-i-will-start-as-a-machine-learning-scientist-at-generate-biomedicines",
          title: 'I will start as a machine learning scientist at Generate:Biomedicines.',
          description: "",
          section: "News",},{id: "projects-protein-ligand-binding",
          title: 'Protein/Ligand Binding',
          description: "Debiasing, generalization, and attribution analysis on machine learning models (Dr. Lucy Colwell, University of Cambridge)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cambridge.html";
            },},{id: "projects-flighted",
          title: 'FLIGHTED',
          description: "Inferring Fitness from High-Throughput Experiments (Prof. Kevin Esvelt, MIT)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/flighted.html";
            },},{id: "projects-protein-diffusion-models",
          title: 'Protein Diffusion Models',
          description: "Diffusion Models for de novo Protein Binders (Generate:Biomedicines)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/generate_internship.html";
            },},{id: "projects-dna-encoded-libraries",
          title: 'DNA-Encoded Libraries',
          description: "Uncertainty quantification and applicability domain analysis for machine learning on DNA-encoded libraries (Google Accelerated Sciences)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/google.html";
            },},{id: "projects-force-field-functor-theory",
          title: 'Force-Field Functor Theory',
          description: "Incorporating Nuclear Quantum Effects into Force Fields (Prof. Alan Aspuru-Guzik, Harvard University)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/harvard.html";
            },},{id: "projects-permeability-modeling",
          title: 'Permeability Modeling',
          description: "Predicting Permeability with Machine Learning and Molecular Dynamics Simulations (Inductive Bio)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/inductive.html";
            },},{id: "projects-ml-on-phage-assisted-continuous-evolution",
          title: 'ML on Phage-Assisted Continuous Evolution',
          description: "Inferring Fitness from Continuous Evolution Experiments (Prof. Kevin Esvelt, MIT)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ml_prance.html";
            },},{id: "projects-terminator",
          title: 'TERMinator',
          description: "Structure-Based Protein Design with Tertiary Repeating Motifs (Prof. Amy Keating, MIT)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/terminator.html";
            },},{id: "projects-engineering-tev-protease",
          title: 'Engineering TEV Protease',
          description: "Engineering Altered Specificities of TEV Protease (Prof. Kevin Esvelt, MIT)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tev.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%73%75%6E%64%61%72@%6D%69%74.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XsLeWw8AAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9315-8426", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/vikram-sundar", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/vikram-sundar", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://www,bsky.app/profile/vikramsundar.bsky.social", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/vikramsundar", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@vikramsundar", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
