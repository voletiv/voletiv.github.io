---
title: Vikram Voleti's publications
layout: default
excerpt: Vikram Voleti's publications
permalink: /publications
---

| <a href="{{ site.google_scholar_url }}" target="_blank" style="text-align:center; display:block"><i class="ai ai-google-scholar-square ai-3x"></i></a> |

# PRE-PRINTS

{% for publication in site.data.preprints %}

{% include publications.html %}

{% endfor %}

<p>&nbsp;</p>

# PUBLICATIONS

{% for publication in site.data.conference_papers %}

{% include publications.html %}

{% endfor %}

<p>&nbsp;</p>

{% comment %}
# JOURNAL PAPERS

{% for publication in site.data.journal_papers %}

{% include publications.html %}

{% endfor %}

<p>&nbsp;</p>

{% assign numOfJournals = loopindex %}

{% endcomment %}

# THESIS / REPORTS

{% for publication in site.data.reports %}

{% include publications.html %}

{% endfor %}

