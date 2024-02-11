---
title: Vikram Voleti's publications
layout: default
permalink: /publications
---

| <a href="{{ site.google_scholar_url }}" target="_blank" style="text-align:center; display:block"><i class="ai ai-google-scholar-square ai-3x"></i></a> |

{% for publication in site.data.papers %}

{% include publications.html %}

{% endfor %}

<p>&nbsp;</p>

# THESIS / REPORTS

{% for publication in site.data.reports %}

{% include publications.html %}

{% endfor %}

