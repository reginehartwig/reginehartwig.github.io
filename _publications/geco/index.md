---
layout: publications
permalink: /publications/geco/
date: 2024_12_01 # determines sorting just take the date of the first publication as YYYY_MM_DD
image: assets/teaser.png
image_mouseover: assets/header_vid.mp4
icon: assets/favicon.ico

title: "GECO: Geometrically consistent embedding with lightspeed inference"
venue: TBD, 2025
authors:
  - name: reginehartwig
    affiliations: "1,2"

  - name: dominikmuhle
    affiliations: "1,2"

  - name: riccardomarin
    affiliations: "1"

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
    # - name: Paper
    #   link: https://arxiv.org/abs/2305.09527
    #   style: "bi bi-file-earmark-richtext"
    # - name: Code
    #   link: https://github.com/DominikMuhle/dnls_covs
    #   style: "bi bi-github"
    # - name: Video
    #   link: https://www.youtube.com/watch?v=_wDUresP6v8&t=23s
    #   style: "bi bi-youtube"

# citation: '@article{muhle2023dnls_covs,
#   title={Learning Correspondence Uncertainty via Differentiable Nonlinear Least Squares},
#   author={Dominik Muhle and Lukas Koestler and Krishna Murthy Jatavallabhula and Daniel Cremers},
#   journal={IEEE Conference on Computer Vision and Pattern Recognition (CVPR)},
#   year={2023},
# }'

# acknowledgements: 'This work was supported by the ERC Advanced Grant SIMULACRON, by the Munich Center for Machine Learning and by the EPSRC Programme Grant VisualAI EP/T028572/1.'
---


{% include_relative content.html %}