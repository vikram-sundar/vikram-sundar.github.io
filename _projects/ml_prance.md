---
layout: page
title: ML on Phage-Assisted Continuous Evolution 
description: Inferring Fitness from Continuous Evolution Experiments (Prof. Kevin Esvelt, MIT)
importance: 5
related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/ML_PRANCE_Methods.png" title="ML PRANCE Methods" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Machine Learning to Infer Fitnesses from Continuous Evolution. (a) PRANCE (phage- and robotic-assisted near-continuous evolution) links phage reproduction to the desired fitness of a given protein and then optimizes fitness through a cycle of infection, reproduction, and mutation. (b) A probabilistic graphical model of a continuous evolution process that represents PRANCE, to be optimized with machine learning. (c) The process used to generate PRANCE simulations for training and validation of the machine learning.
</div>

My first PhD project focused on machine learning on the outputs of continuous evolution experiments, like phage-assisted continuous evolution (PACE) and phage- and robotic-assisted near-continuous evolution (PRANCE). I developed a simple latent-variable machine learning model for inferring fitness landscapes and generated large numbers of PRANCE simulations to validate my method. Using careful hyperparameter tuning and extensive validation, I demonstrated that my method was generally highly accurate under a wide variety of simulation conditions. 

Unfortunately, very few variants are observed in a typical PACE or PRANCE experiment, so very few fitnesses can be inferred by this method. To augment the quantity of data available, I developed a negative data heuristic that generated upper bounds on fitnesses that were not observed in a given continuous evolution experiment. However, even with this upper bound, I found that the quantity of fitness data generated by a single continuous evolution experiment was generally quite small compared to the amount of sequencing required, so I switched to more promising methods like DHARMA and [FLIGHTED](flighted.html). 

The results of this work are not and will not be published, but they are available in my thesis {% cite doctorthesis %}. If you would like to use my code, please contact me directly.
