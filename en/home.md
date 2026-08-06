---
lang-ref: home
layout: home
title: GBIF Mongolia
description: Lorem markdownum spatium limes indefessus neque *at* orat aestuat
background: /assets/images/4410688507_a68a2c8ed2_b.jpg
imageLicense: Copyright by the creator. For license and creator details, see https://nabu-naturgucker-beobachtungen.de/?sprache=en&bild=-1811949731.
height: 70vh
cta:
  - text: Occurrences
    href: /occurrence/search
    isPrimary: true # this will break as it is illegal yaml
  - text: Datasets
    href: /dataset/search
stats:
  features:
    - title: <span data-ajax-path="data.occurrenceSearch.documents.total" data-ajax-url="https://graphql.gbif.org/graphql?query=query%0A%7B%0A%20%20occurrenceSearch%28%0A%20%20%20%20predicate%3A%20%7Btype%3A%20and%2C%20predicates%3A%20%5B%7Btype%3A%20in%2C%20key%3A%20%22country%22%2C%20values%3A%20%5B%22FR%22%2C%20%22GP%22%2C%20%22MQ%22%2C%20%22GF%22%2C%20%22PF%22%2C%20%22YT%22%2C%20%22TF%22%2C%20%22NC%22%2C%20%22RE%22%2C%20%22BL%22%2C%20%22MF%22%2C%20%22PM%22%2C%20%22WF%22%5D%7D%5D%7D%0A%20%20%20%20size%3A%2010%0A%20%20%29%20%7B%0A%20%20%20%20documents%20%7B%0A%20%20%20%20%20%20total%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A">9,000,000</span>
      description: Occurrences
      href: /occurrence/search

    - title: <span data-ajax-path="count" data-ajax-url="https://api.gbif.org/v1/dataset/search?publishing_country=MN">9,000,000</span>
      description: Datasets
      href: /dataset/search

permalink: /
---

Edit `/home.md` to change the text.

Lorem markdownum spatium limes indefessus neque *at* orat aestuat, quicquam ne
flavusque omnibus, virginis socerque sparsos vidimus eundem. Sustinet **ramo
pontum ut** avus quamquam de trabes vestemque cruorem tremor.

Viscera mercibus isdem hebetarat undas! Iubet ora ire unum telis adicit, si
Telephus *valent*, instructo refers. Ille **est resque**, sic ruris erit ante
profana detegeret. Et cogor tractus arboribus prensurum praesens memorantur
neque inplet iussus temeraria merui **fas ecce** aethera dixit fieretque [plura
tollebat altius](http://virgineusque.net/est.html).
