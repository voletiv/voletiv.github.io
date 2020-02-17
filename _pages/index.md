---
title: Vikram Voleti
layout: default
excerpt: Home page of Vikram Voleti's website
permalink: /
---

| <a href="mailto:vikram.voleti@gmail.com" target="_blank" style="text-align:center; display:block"><i class="fa fa-envelope-square ai-3x"></i></a> | <a href="{{ site.google_scholar_url }}" target="_blank" style="text-align:center; display:block"><i class="ai ai-google-scholar-square ai-3x"></i></a> | <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" style="text-align:center; display:block"><i class="fab fa-linkedin ai-3x"></i></a> | <a href="https://github.com/{{ site.github_username }}" target="_blank" style="text-align:center; display:block"><i class="fa fa-github ai-3x"></i></a> |

<br/>

<img class="profile-picture" src="{{site.url}}{{site.baseurl}}/images/profile-picture/profile_picture.jpg" />

I am a PhD student at [Mila](https://mila.quebec/en/){:target="_blank"}, [University of Montreal](https://diro.umontreal.ca/){:target="_blank"} with [Prof. Chris Pal](https://mila.quebec/en/person/pal-christopher/){:target="_blank"} as my supervisor. Currently, I am a Visiting Research Associate at the [University of Guelph](https://www.uoguelph.ca/engineering/){:target="_blank"} with [Prof. Graham Taylor](https://www.gwtaylor.ca/){:target="_blank"}.

I was a Research Intern at [Google](https://ai.google/research/teams/perception/){:target="_blank"}, Mountain View in the [Google AI Perception](https://ai.google/research/teams/perception/){:target="_blank"} team in the fall of 2019. I worked with Bryan Seybold on Semi-supervised Active Speaker Detection in videos.

Previously, I worked as a Research Fellow with [Prof. C. V. Jawahar](https://faculty.iiit.ac.in/~jawahar/){:target="_blank"} at [CVIT, IIIT-Hyderabad](https://cvit.iiit.ac.in){:target="_blank"} on automated lip synthesis for translation of a video into a different languages.

I also worked as a Mentor for the [Foundations of Artificial Intelligence and Machine Learning](https://www.talentsprint.com/aiml.dpl){:target="_blank"} certificate program by IIIT-H Machine Learning Lab. I designed tutorials and lab sessions, and mentored industry professionals. I was also a Computer Vision consultant for [Playment](https://playment.io){:target="_blank"}, I worked on semantic segmentation for autonomous driving.

Prior to that, I worked at [GreyOrange Robotics](http://www.greyorange.com/){:target="_blank"} on real time embedded vision in videos for warehouse automation, and autonomous robots; and at [Airbus, India](http://www.airbus.com/){:target="_blank"} on software development and integration.

I graduated from the [Indian Institute of Technology (IIT), Kharagpur, India](http://www.iitkgp.ac.in/){:target="_blank"}, in 2014 with a Dual Degree (B.Tech. (H) + M.Tech.) in Electrical Engineering, my Master's specialization was Instrumentation and Signal Processing.

## News

<table>
{% for article in site.data.news %}
<tr>
{% include news.html %}
</tr>
{% endfor %}
</table>
