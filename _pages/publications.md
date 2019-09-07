---
title: Vikram Voleti's publications
layout: default
excerpt: Vikram Voleti's publications
permalink: /publications
---

## CONFERENCE PAPERS

{% for publication in site.data.conference_papers %}

{% include publications.html %}

{% endfor %}

<p>&nbsp;</p>

{% comment %}
## JOURNAL PAPERS

{% for publication in site.data.journal_papers %}

{% include publications.html %}

{% endfor %}

<p>&nbsp;</p>

{% assign numOfJournals = loopindex %}
{% endcomment %}

## THESIS / REPORTS

{% for publication in site.data.reports %}

{% include publications.html %}

{% endfor %}

