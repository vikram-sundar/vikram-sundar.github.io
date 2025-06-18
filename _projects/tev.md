---
layout: page
title: Engineering TEV Protease 
description: Engineering Altered Specificities of TEV Protease (Prof. Kevin Esvelt, MIT)
importance: 1
related_publications: true
---

My main PhD research focused on altering the specificity of TEV protease, a sequence-specific protease, to cut other substrates. To do this, I worked with my experimental collaborator Boqiang Tu to develop a new high-throughput assay DHARMA, which links protein fitness to base editing activity, and [a new denoising method FLIGHTED](flighted.html). Using DHARMA and FLIGHTED, Bo and I generated large TEV protease fitness landscapes: a combinatorial landscape on 4 sites on the wild-type substrate available [here](https://zenodo.org/records/10779337), a combinatorial landscape on 8 sites on the wild-type substrate, and an error-prone PCR landscape with over 1.6 million variants. These landscapes will be released soon.

Based on these results, I performed a number of benchmarking studies of standard protein fitness models, examining supervised protein fitness prediction with experimental data. My key conclusions were:

1. Data scale is by far the most important factor affecting model performance.
2. On the modeling side, the task-specific top model (the model fed protein language model embeddings or a one-hot encoding and used to learn the specific protein fitness task of interest) matters the most. I found that the optimal architecture was a convolutional neural network, and that fine-tuning improved performance somewhat while being highly computationally expensive. 
3. Protein language model scale in contrast did not affect performance. 
4. The metric used to evaluate model performance matters greatly for large datasets, and protein design metrics like the mean of the top 100 predictions should be used.
5. It is vastly more data-efficient to generate datasets containing random samples of high-mutant variants, as opposed to thorough coverage of low-mutant variants. Error-prone PCR is a simple and efficient way of generating such datasets and as such should be preferred.

With this data, Bo and I generated error-prone PCR landscapes on alternative substrates and used those to engineer TEV protease variants with alternative specificity and activity. We demonstrated clear signs of altered specificity and showed that the machine learning improved performance even over the best-performing variants in the training set of over 1.6 million variants. This demonstrates the value of machine learning for protein engineering.

Some details about this work have been included in the FLIGHTED preprint {% cite flightedmain %} and the DHARMA preprint {% cite dharma %}. More information is available in my thesis {% cite doctorthesis %}. Code for the protein fitness models is available in the FLIGHTED repository on Github [here](https://github.com/vikram-sundar/FLIGHTED_public). Please contact me if you would like to use our datasets; they will be published soon when the DHARMA paper is submitted. 
