---
layout: page
title: Protein/Ligand Binding
description: Debiasing, generalization, and attribution analysis on machine learning models (Dr. Lucy Colwell, University of Cambridge)
importance: 8
related_publications: true
---

I worked in Dr. Lucy Colwell’s lab at the University of Cambridge on machine learning as applied to protein/ligand binding for my masters’ degree. Our work generated 3 key results:

1. We demonstrated that standard debiasing algorithms for protein/ligand binding datasets like AVE and MUV debiasing do not improve generalization of models and do not accurately measure generalization. We propose using distant held-out test sets as metrics for performance instead of debiasing approaches. The paper has been published in JCIM (% cite debiasing %).
2. Focusing on the problem of predicting protein/ligand binding without prior experimental screens, we developed a data augmentation strategy to dramatically improve the performance of DTI models, models that seek to predict interactions between multiple proteins and ligands. Our approach demonstrates remarkable performance on challenging datasets consisting of proteins and ligands with no interactions given to the model. The paper has been posted on BiorXiv (% cite DTI %) and a previous version was presented at a NeurIPS workshop (% cite DTIconf %).
3. We used attribution methods to identify serious flaws in chemical fingerprints as a molecular representation. Specifically, we showed the existence of spurious correlations in fingerprint space due to the structure of fingerprints that are masked by the hashing process but become relevant and degrade model performance on protein/ligand binding datasets. A version of this paper has been presented at an ICML workshop (% cite attributionconf %).
