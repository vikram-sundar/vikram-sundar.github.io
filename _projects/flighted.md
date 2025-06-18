---
layout: page
title: FLIGHTED 
description: Inferring Fitness from High-Throughput Experiments (Prof. Kevin Esvelt, MIT)
importance: 2
related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/FLIGHTED_Summary.png" title="FLIGHTED Summary" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Summary of the FLIGHTED Approach to Incorporating Experimental Noise from High-Throughput Experiments. (a) A high-throughput experiment without FLIGHTED generates a readout that measures fitness and incorporates considerable noise. With FLIGHTED, practitioners can generate a probabilistic fitness landscape that accounts for experimental noise in these high-throughput datasets. (b) To train FLIGHTED, the FLIGHTED model models a specific source of noise in a particular high-throughput experiment and generates a distribution of noisy experimental results from a fitness landscape. We then use the FLIGHTED guide (a neural network) to convert experimental readouts to fitness predictions with calibrated errors. Training uses experimental results from a calibration dataset but does not require ground-truth fitness values. (c) FLIGHTED guide is evaluated using ground-truth fitness values from a calibration dataset for predictions and uncertainty. FLIGHTED guide can then be used to measure fitnesses from any high-throughput experiment of the same type, beyond the calibration dataset.
</div>

A key component of my main PhD research has focused on developing FLIGHTED, a tool for inference of fitness landscapes from high-throughput experiments. FLIGHTED is a Bayesian model that uses variational inference and biological noise models to infer fitness from a given set of high-throughput experimental data. Thus far, I have developed and released two versions of FLIGHTED for two different experiment classes:

1. FLIGHTED-Selection, which focuses on single-step selection experiments like phage display, mRNA display, and FACS. I showed through simulation that single-step selection experiments are incredibly noisy, especially for highly active variants, and FLIGHTED-Selection can accurately correct for this noise regardless of experimental conditions. Some preliminary benchmarking studies on the popular GB1 dataset indicate that downstream ML model performance is heavily affected by accounting for noise, suggesting that it is important for benchmarking studies to use methods like FLIGHTED to ensure accurate rankings.
2. FLIGHTED-DHARMA, designed for a new protein fitness assay named DHARMA developed by my colleague Boqiang Tu. DHARMA measures protein fitness by linking fitness with transcription of a base editor and measuring edits, a process which can be measured efficiently by high-throughput sequencing but is incredibly noisy. Using FLIGHTED, we make DHARMA measurements reliable and provide calibrated error estimates allowing experimentalists to run high-throughput DHARMA screens with even very small numbers of reads per variant. FLIGHTED-DHARMA is well-calibrated, robust, and interpretable.

I then used DHARMA and FLIGHTED to generate large protein fitness landscapes (up to a million variants) and perform large-scale protein engineering. A four-site fitness landscape of TEV protease, a sequence-specific protease, cutting the wild-type substrate is now available [here](https://zenodo.org/records/10779337).

A preprint describing FLIGHTED is available here {% cite flightedmain %} and it has also been presented at a NeurIPS {% cite flightedconf %} and ICLR workshop {% cite flightedgem %}; further information is available in my PhD thesis {% cite doctorthesis %}. If you would like to use FLIGHTED in your research, it has been released on Github [here](https://github.com/vikram-sundar/FLIGHTED_public) and is pip installable. Please contact me if you would like to use FLIGHTED or run into any issues.
