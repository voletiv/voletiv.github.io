---
title: Vikram Voleti
layout: default
excerpt: Home page of Vikram Voleti's website
permalink: /
---

<br/>

<img class="profile-picture" src="{{site.url}}{{site.baseurl}}/images/profile-picture/profile_picture.jpg">

I am a PhD student at <a href="https://mila.quebec/en/">Mila</a>, <a href="https://diro.umontreal.ca/">University of Montreal</a> with <a href="https://mila.quebec/en/person/pal-christopher/">Prof. Chris Pal</a> as my supervisor.

Previously, I worked as a Research Fellow with [Prof. C. V. Jawahar](https://faculty.iiit.ac.in/~jawahar/){:target="_blank"} at the Applied Research Lab, [CVIT, IIIT-Hyderabad](https://cvit.iiit.ac.in){:target="_blank"}. I worked on projects involving automatic translation of videos into different languages, with applications in educational video dubbing.

I was also a Mentor for the [Foundations of Artificial Intelligence and Machine Learning](https://www.talentsprint.com/aiml.dpl){:target="_blank"} certificate program by IIIT-H Machine Learning Lab. I designed tutorials and lab sessions, and mentored industry professionals. I also worked as a Computer Vision consultant for <a href="https://playment.io">Playment</a> on semantic segmentation for autonomous driving.

Prior to that, I worked at [GreyOrange Robotics](http://www.greyorange.com/){:target="_blank"} on computer vision modules in embedded systems for real time pattern recognition in videos for warehouse automation, and on autonomous robots; and at [Airbus, India](http://www.airbus.com/){:target="_blank"} on software development and integration.

I graduated from [IIT Kharagpur, India](http://www.iitkgp.ac.in/){:target="_blank"}, in 2014 with a Dual Degree (B.Tech. (H) + M.Tech.) in Electrical Engineering, my Master's specialization was Instrumentation and Signal Processing.

<br/>

## News

<table>
{% for article in site.data.news %}
<tr>
{% include news.html %}
</tr>
{% endfor %}
</table>
