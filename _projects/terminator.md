---
layout: page
title: TERMinator 
description: Structure-Based Protein Design with Tertiary Repeating Motifs (Prof. Amy Keating, MIT)
importance: 6
related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/TERMinator_fig1_arch_overview.jpg" title="TERMinator Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
TERMinator Model Architecture. The TERM Information Condenser extracts information from structural matches to TERMs in the target protein to construct node and edge embeddings. The GNN Potts Model Encoder takes in TERM data and coordinate features and outputs a Potts model over positional amino acid labels. We use MCMC simulated annealing to generate optimal sequences given the Potts model.
</div>
As part of my first PhD rotation, I helped in the development of TERMinator, a neural network designed to predict protein sequence from a given structure. It used TERMs (tertiary repeating motifs), structural motifs found in the PDB, to generate a Potts model for a given protein that could be optimized to generate a sequence. We demonstrated that the use of TERMs and Potts models showed small advantages over previously available methods. My primary contribution was aiding in benchmarking and ablation studies of TERMinator. Our work was presented at a NeurIPS workshop {% cite TERMinatorconf %} and published in Protein Science {% cite TERMinator %}. TERMinator is available for public use [here](https://github.com/alexjli/terminator_public).
