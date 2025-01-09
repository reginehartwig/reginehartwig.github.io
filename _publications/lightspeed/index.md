---
layout: publications
permalink: /publications/lightspeed/
date: 2024_12_01 # determines sorting just take the date of the first publication as YYYY_MM_DD
image: assets/teaser.png
image_mouseover: assets/header_vid.mp4
icon: assets/favicon.ico

title: "Lightspeed Computation of Geometry-aware Semantic Embeddings"
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

description: "Recent advancements in feature computation have revealed that self-supervised feature extractors can recognize semantic correspondences. However, these features often lack an understanding of objects' underlying geometry and 3D structure. In this paper, we focus on object categories with well-defined shapes and address the challenge of matching semantically similar parts distinguished by their geometric properties, e.g., left/right eyes or front/back legs. We propose a novel, optimal-transport based learning method that is faster and outperforms previous supervised methods in terms of semantic matching and geometric understanding."

links:
    - name: Project Page
      link: /publications/lightspeed/
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