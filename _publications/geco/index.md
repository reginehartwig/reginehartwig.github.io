---
layout: publications
permalink: /publications/geco/
date: 2024_12_01 # determines sorting just take the date of the first publication as YYYY_MM_DD
image: assets/teaser.png
image_mouseover: assets/header_vid.mp4
icon: assets/favicon.ico

title: "GECO: Geometrically Consistent Embedding with Lightspeed Inference"
venue: ICCV, 2025
authors:
  - name: reginehartwig
    affiliations: "1,2"

  - name: dominikmuhle
    affiliations: "1,2"

  - name: riccardomarin
    affiliations: "1,2"

  - name: danielcremers
    affiliations: "1,2"

affiliations:
  - name: tum
    length: short
  - name: mcml
    length: long

description: "Recent advancements in feature computation have revealed that self-supervised feature extractors can recognize semantic correspondences. However, these features often lack an understanding of objects' underlying 3D geometry. In this paper, we focus on learning features capable of semantically characterizing parts distinguished by their geometric properties, e.g., left/right eyes or front/back legs. 
We propose GECO, a novel, optimal-transport-based learning method that obtains features geometrically coherent, well-characterizing symmetric points. GECO uses a lightweight model architecture that results in a fast inference, capable of processing images at 30fps. Our method is interpretable and generalizes across datasets, achieving state-of-the-art performance on PFPascal, APK, and CUB datasets improving by 6.0%, 6.2%, and 4.1% respectively. We achieve a speed-up of 98.2% compared to previous methods by using a smaller backbone and a more efficient training scheme. Finally, we find PCK insufficient to analyze the geometrical properties of the features. Hence, we expand our analysis, proposing novel metrics and insights that will be instrumental in developing more geometrically-aware methods."

links:
    - name: Project Page
      link: /publications/geco/
    - name: Paper
      link: https://arxiv.org/pdf/2508.00746
      style: "bi bi-file-earmark-richtext"
    - name: Code
      link: https://github.com/reginehartwig/geco
      style: "bi bi-github"
    - name: Video
      link: https://youtu.be/y-RMEnvjqbo
      style: "bi bi-youtube"

citation: '@article{hartwig2025geco,
  title={GECO: Geometrically Consistent Embedding with Lightspeed Inference},
  author={Regine Hartwig and Dominik Muhle and Riccardo Marin and Daniel Cremers},
  journal={IEEE International Conference on Computer Vision (ICCV)},
  year={2025},
}'

# acknowledgements: 'This work was supported by the ERC Advanced Grant SIMULACRON, cby the Federal Ministry for the Environment, Nature Conservation, Nuclear Safety and Consumer Protection (BMUV) through the AuSeSol-AI project (grant 67KI21007A), and by the TUM Georg Nemetschek Institute Artificial Intelligence for the Built World (GNI) through the AICC project.'
---


{% include_relative content.html %}