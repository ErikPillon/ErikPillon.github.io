---
title:  Some of the most influential articles ever written 
layout: post
post-image: 
description: 
tags: 
- articles
---

<ul>
    {% for article in site.data.articles_list %}
        {% if article.read == "yes" %}
            <li> <b>{{ article.article_title }}</b>, <i>{{ article.author }} ({{ article.year }})</i> <br>
            {{ article.minimal_abstract_of_the_article }} <br>
            Field: {{ article.field_of_study }} </li>
            Link to the article: <a href="assets/articles/{{ article.author | replace: ' ', '_' | downcase }}_{{ article.year }}.pdf">pdf</a>
        {% endif %}
    {% endfor %}
</ul>