# Bio-Image Analysis with napari

In this course, we will explore ways to analyze and visualize microscopy images with [napari](https://napari.org/stable/), an nD viewer open-source software.

We explore some napari plugins as an interactive and convenient way of performing these analysis, especially the [napari-assistant](https://github.com/haesleinhuepf/napari-assistant?tab=readme-ov-file#napari-assistant), [napari-apoc](https://github.com/haesleinhuepf/napari-accelerated-pixel-and-object-classification?tab=readme-ov-file#napari-accelerated-pixel-and-object-classification-apoc) and [napari-clusters-plotter](https://github.com/BiAPoL/napari-clusters-plotter) plugins.

We will also perform feature extraction using [napari-skimage-regionprops](https://github.com/haesleinhuepf/napari-skimage-regionprops), plot features against each other, and perform a multichannel analysis, where we measure summary statistics of objects in one channel relative to objects in another channel.

All the plugins mentioned above are part of the [devbio-napari plugin bundle](https://github.com/haesleinhuepf/devbio-napari), which is a collection of plugins for developmental biology image analysis.

Some [Jupyter](https://jupyter.org/) notebooks will be used to illustrate and reproduce the examples.

For this, we will be installing our packages in a conda environment. Please follow the instructions below.

## Getting started with Miniforge and Python 

Please follow the instructions from [this blog post](https://biapol.github.io/blog/mara_lampert/getting_started_with_miniforge_and_python/readme.html) written by [Mara Lampert](https://biapol.github.io/blog/mara_lampert/readme.html), updated by [Stefan Hahmann](https://biapol.github.io/blog/stefan_hahmann/readme.html) and by Mara Lampert again under [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/legalcode) to install Miniforge on your computer.

## Cloning the repository

Clone this repository to your computer (go to the repository page on GitHub [here](https://github.com/BiAPoL/DIGS-BB_LM_Course_Bio-Image_Analysis_2024), click the green button <span style="color:green">**Code**</span> and choose one option to clone it). The most straight-forward way is to download it as a `.zip` file. If you do that, unzip the repository in a folder of your choice and remember where you placed it.