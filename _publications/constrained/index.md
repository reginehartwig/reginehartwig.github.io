---
layout: publications
permalink: /publications/constrained/
date: 2022_05_29 # determines sorting just take the date of the first publication as YYYY_MM_DD
image: assets/teaser.png
image_mouseover: assets/header_vid.mp4
icon: assets/favicon.ico

title: "Constrained Visual-Inertial Localization With Application And Benchmark in Laparoscopic Surgery"
venue: ICRA, 2022
authors:
  - name: reginehartwig
    affiliations: "1,3"

  - name: danielostler
    affiliations: "3"

  - name: jeanclaude
    affiliations: "2"

  - name: hubertusfeussner
    affiliations: "3"

  - name: dirkwilhelm
    affiliations: "3"

  - name: dirkwollherr
    affiliations: "1"

affiliations:
  - name: tum
    length: short
  - name: fraunhofer
    length: long
  - name: miti
    length: long

description: "We propose a novel method to tackle the visual-inertial localization problem for constrained camera movements. We use residuals from the different modalities to jointly optimize a global cost function. The residuals emerge from IMU measurements, stereoscopic feature points, and constraints on possible solutions in SE(3). In settings where dynamic disturbances are frequent, the residuals reduce the complexity of the problem and make localization feasible. We verify the advantages of our method in a suitable medical use case and produce a dataset capturing a minimally invasive surgery in the abdomen. Our novel clinical dataset MITI is comparable to state-of-the-art evaluation datasets, contains calibration and synchronization."

links:
    - name: Project Page
      link: /publications/constrained/
    - name: Paper
      link: https://arxiv.org/pdf/2202.11075
      style: "bi bi-file-earmark-richtext"
    # - name: Code
    #   link: https://github.com/DominikMuhle/dnls_covs
    #   style: "bi bi-github"
    - name: Video
      link: https://youtu.be/jWpsSsxi6E8
      style: "bi bi-youtube"

citation: '@inproceedings{hartwig2022constrained,
  title={Constrained visual-inertial localization with application and benchmark in laparoscopic surgery},
  author={Hartwig, Regine and Ostler, Daniel and Rosenthal, Jean-Claude and Feu{\ss}ner, Hubertus and Wilhelm, Dirk and Wollherr, Dirk},
  booktitle={2022 International Conference on Robotics and Automation (ICRA)},
  pages={9513--9520},
  year={2022},
  organization={IEEE}
}'

# acknowledgements: 'This work was supported by the ERC Advanced Grant SIMULACRON, by the Munich Center for Machine Learning and by the EPSRC Programme Grant VisualAI EP/T028572/1.'
---


{% include_relative content.html %}