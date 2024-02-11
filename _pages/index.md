---
title: Vikram Voleti
layout: default
permalink: /
---

| <a href="{{ site.google_scholar_url }}" target="_blank" style="text-align:center; display:block"><i class="ai ai-google-scholar-square ai-3x"></i></a> | <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" style="text-align:center; display:block"><i class="fa fa-linkedin ai-3x"></i></a> | <a href="https://github.com/{{ site.github_username }}" target="_blank" style="text-align:center; display:block"><i class="fa fa-github ai-3x"></i></a> |

<!-- <br/> -->

<img class="profile-picture" src="{{site.url}}{{site.baseurl}}/images/profile-picture/Vikram_Voleti_Mila_flip.jpg" />

I am a Research Scientist at [Stability AI](https://stability.ai/), I work on generative modeling for image, video, and 3D.

I completed my PhD in Computer Science at [Mila](https://mila.quebec/en/){:target="_blank"}, [University of Montreal](https://diro.umontreal.ca/){:target="_blank"}, I was supervised by [Prof. Christopher Pal](https://mila.quebec/en/person/pal-christopher/){:target="_blank"}. My main research interests are at the intersection of computer vision and deep learning, my past research spans generative modeling and representation learning for image, video and 3D.
<!-- My projects include score-based diffusion probabilistic models for video prediction, generation, interpolation; multi-resolution image generation; self-supervised video prediction using dynamical modelling; 3D human pose estimation and inverse kinematics from videos. -->

<!-- I also work as an AI Advisor to [Blue Lion Labs](https://bluelionlabs.com/){:target="_blank"}. -->
Prior to that, I was a Research Intern at Meta, where I worked on generation of video, 3D objects, 4D content from text. Before that, I was a MITACS Research Intern at [Unity Labs](https://unity.com/labs), I worked on 3D human pose estimation and inverse kinematics from video. In Fall 2019, I was a Research Intern at [Google](https://ai.google/research/teams/perception/){:target="_blank"} in the [Google AI Perception](https://ai.google/research/teams/perception/){:target="_blank"} team.
<!-- In 2019 and 2020, I was an AI Scientist in Residence at [NextAI](https://www.nextcanada.com/next-ai/){:target="_blank"}. -->

<!-- Previously, I worked as a Research Fellow with [Prof. C. V. Jawahar](https://faculty.iiit.ac.in/~jawahar/){:target="_blank"} at [IIIT-Hyderabad](https://cvit.iiit.ac.in){:target="_blank"} on automated lip synthesis for translation of a video into a different languages. I was a Mentor for the first [Foundations of AI/ML](https://www.talentsprint.com/aiml.dpl){:target="_blank"} certificate program for industry professionals by IIIT-H Machine Learning Lab. Prior to that, I worked at [GreyOrange Robotics](http://www.greyorange.com/){:target="_blank"} on real time embedded vision in videos for warehouse automation, and autonomous robots; and at [Airbus, India](http://www.airbus.com/){:target="_blank"} on software development and integration. -->

I graduated from the [Indian Institute of Technology (IIT), Kharagpur, India](http://www.iitkgp.ac.in/){:target="_blank"}, in 2014 with a Dual Degree (B.Tech. (H) + M.Tech.) in Electrical Engineering, my Master's specialization is Instrumentation and Signal Processing.

## PUBLICATIONS

<!-- | <a href="{{ site.google_scholar_url }}" target="_blank" style="text-align:center; display:block"><i class="ai ai-google-scholar-square ai-3x"></i></a> | -->

For a more complete list, please check my <a href="{{ site.google_scholar_url }}" target="_blank">Google Scholar</a> page.

{% for publication in site.data.papers %}

{% include publications.html %}

{% endfor %}

<p>&nbsp;</p>

## News

<table>
{% for article in site.data.news %}
<tr>
{% include news.html %}
</tr>
{% endfor %}
</table>
