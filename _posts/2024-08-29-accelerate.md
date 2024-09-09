---
layout: post
title: Accelerate 
subtitle: Building and Scaling High Performing Technology Organizations 
authors: Nicole Forsgren, Jez Humble, Gene Kim
post-image: ../assets/images/agile_meeting.jpeg
year of Publication: 2018
pages: 312
tags: 
- IT 
- DevOps
- Software Development
- Agile
- Book review
---

![Agile meeting](/assets/images/agile_meeting.jpeg)

> Accelerate is not a book about IT; Accelerate is a book about culture and the best work methodologies to effectively deliver business value while also fostering innovation in an ever-changing world.

This work is a scientific approach to optimizing software development and ultimately how to leverage technology to deliver business value.

The backbone of the entire book is a massive multi-year social study, covering more than 23000 survey responses from over 2000 different organizations, spanning from small startups to IT behemoths.

All in all, this book is a work about “_culture_”; the fundamental underlying principle is that “organizational culture predicts performance outcome” (p. 31) and the entire book is about defining and implementing the culture that yields the best results in the field of IT.

Thanks to an extensive survey, the authors come to the hypothesis that not only the best work culture affects the way of working, but also the IT best practices, the relationships between teams and individuals and the right prioritization of outcomes ultimately affects the culture itself.

It is then the main hypothesis of the book that

> “lean management, along with a set of other other technical practices known collectively as continuous delivery, do in fact impact culture”.

It is therefore to you to adopt and implement the principles and the lessons of the study to change the culture of your organization.

## Westrum Organizational Typologies

Building on the seminal work of the sociologist Ron Westrum (see below for a more detailed bibliography), we can summarize the different work cultures into 3 distinct categories, or types:

- Organizations that are power-oriented have a **pathological** culture: these are organizations ruled by fear and threat. Problems are solved by finding a scapegoat, and employees often hoard information for political reasons or distort it to look better.
- **Bureaucratic** organizations instead are rules-oriented: departments defend themselves and maintain their “turf”, insist on their own rules, and generally do things by the book.
- **Generative** are performance-oriented organizations that focus on the mission. Everything is subordinated to good performance and the main driving principle is the ideal of effectively delivering business value.
Westrum then insight that organization culture further affects the information flow within an organization and that good information flow is critical for the safety and effectiveness of high-tempo environments, including technology organization.

_Ça va sans dire_, generative culture is the ideal goal that we should achieve in order to maximize our organization's performance.

## Book Structure and Key Takeaways

The book is divided into 3 parts: part I talks about the findings of the study, part II deals with the rigorous scientific methods that led to the results in Part I and the final Part III is the summary of a case study that two of the authors performed while working at the multinational leading organization in the banking sector.

### Key Takeaways

Maximum productivity and consistent delivery rate are reached when there’s good information flow, high cooperation and trust, bridging between teams, and conscious inquiry. We can achieve this by either working on the culture of the organization or focusing on some technological good practices. The majority of all these principles are concentrated in the main chapters of the book, namely:

- Chapter 4: **Technical Practices**
- Chapter 5: **Architecture**
- Chapter 8: **Production Development**

#### Continuous Delivery Capabilities

- Use versioning control systems for all your artifacts;
- Automate your deployment process: automation reduces the cognitive load, reduces burnout, and increase deployment rate;
- Implement Continuous Integration: the development practice where code is regularly checked in and each check-in triggers a series of tests to discover regressions;
- Use trunk-based development methods: try to keep less than 3 active branches and keep the life span of each branch really short (less than a day);
- Implement test automation: let tests run automatically and often

#### Support test data management:

- Shift left on security: implement security practices into the designing and testing phase of the software development;
- Implement Continuous Delivery:
- Architecture Capabilities
- Use a loosely coupled architecture: tests and deployments can be made indipendently; teams can work in parallel. which in turn allows them to work faster and deliver more value to the organization.
- Architect for empowered teams: allow each team to use their preferred tools and frameworks

#### Product and process capabilities
- Gather and implement customer feedback
- Make the flow of work visible though the value stream: teams should have a good understanding and visibility into the flow of work of their product within the bigger picture.
- Work in small batches: decompose work into small features that allow for faster development and feedback gathering
- Foster and enable team experimentation: allow teams to test and try out new ideas without requiring approval from outside of the team.

#### Lean management and monitoring capabilities

- Have a lightweight change approval processes
- Monitor across applications and infrastructure to inform business decisions
- Check system health proactively
- Improve processes and manage work with work-in-process limits
- visualize work to monitor quality and communicate throughout the team

#### Cultural capabilities

- Support a generative culture
- Encourage and support learning
- Support and facilitate collaboration among teams
- Provide resources and tools that make work meaningful
- Support or embody transformational leadership

### Bibliography

1. Westrum, R. (2004). **A typology of organisational cultures.** _BMJ Quality & Safety_, 13(suppl 2), ii22-ii27.
2. Westrum, R. (2014). **The study of information flow: A personal journey.** _Safety Science_, 67, 58–63.

authors: Erik Pillon, the52ndbook@gmail.com