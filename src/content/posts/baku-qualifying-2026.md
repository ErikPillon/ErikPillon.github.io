---
title: "What the data said about Baku qualifying"
subtitle: "Twenty scribbled questions, one evening with the telemetry, and the one I got wrong"
date: 2026-09-26
description: "I watched the Azerbaijan qualifying with a notebook, then spent the evening checking what I thought I'd seen against the timing data. The track gained 1.6 seconds — almost none of it on the straight."
tags:
  - "f1-analytics"
  - "data-visualization"
  - "telemetry"
  - "formula-1"
---

_A quick note for anyone who comes here for the maths and the book notes: I also do Formula 1 data analysis in my spare time. It started as a way to keep my hands dirty with real, messy, badly-behaved data — and it turns out a race weekend produces an enormous amount of exactly that. I post the charts on Instagram as [@pitwallprediction](https://www.instagram.com/pitwallprediction/). This is one of those evenings, written up properly._

I watched the Azerbaijan qualifying on Saturday with a notebook next to me, which is a slightly sad thing to admit but there we are. By the end I had about twenty scribbled lines — things I thought I'd seen, things the commentary said that I wasn't sure about, and a couple of questions I genuinely didn't know the answer to.

Then I spent the rest of the evening checking them against the timing and telemetry data. Some held up. One of them fell apart completely, which was the most useful thing that happened all night.

Here's what came out of it.

## The track gained 1.6 seconds, and almost none of it on the straight

Everyone says "the track is coming to us" during a qualifying hour. Baku especially — new asphalt, low usage, a surface that starts green and rubbers in fast. Fine. But how much, and *where*?

The nice thing about qualifying is that it's the one session where you can actually pull this apart. In a race, fuel burn and track evolution both march in the same direction with lap number, they're perfectly collinear, and no amount of cleverness will separate them from lap times alone. In qualifying, fuel is basically flat for the whole hour and tyre life resets at the start of every segment while the session clock keeps running. That breaks the collinearity. You can fit both terms at once and they don't cancel.

So: 109 push laps, 22 drivers, 56 minutes, every driver's own pace removed with a fixed effect. The whole lap improved at **28.6 ms per minute** (se 3.0). Over the session, that's about 1.6 seconds.

Then split it by sector:

| Sector | Full throttle | Improvement |
|---|---|---|
| Sector 1 | 64% | 13.3 ms/min (se 1.5) |
| Sector 2 | 60% | 13.3 ms/min (se 1.4) |
| Sector 3 | 94% | **2.0 ms/min (se 1.1)** |

That last row isn't a small effect. It's *no* effect — the coefficient is inside its own error bar.

And it makes complete physical sense once you say it out loud. Sector 3 at Baku is one corner and then 1,816 metres flat out. Rubber goes down where cars load the surface sideways, and nothing lateral happens on a straight. Over the hour the two cornering sectors handed back **1.49 s** between them. The flat-out sector gave **0.11 s**.

A track doesn't "come to you" uniformly. It comes to you in the corners.

## Nobody was quickest on a fresh tyre

Second thing I thought I'd noticed: cars kept circulating instead of doing the classic one-lap-and-box. And the good laps weren't the first good lap of a run.

That one held up nicely. **21 of the 22 drivers set their best qualifying lap on a set that was already three laps old or more.** The median best lap came on rubber five laps old. Exactly one driver was quickest inside the first two laps of a set.

Russell is the clean example, because he did the entire hour on three sets — one run per segment, three push laps each, no fresh rubber inside a run:

- **Q1:** 105.896 → 104.277 → 103.615
- **Q2:** 103.686 → 103.793 → 103.462
- **Q3:** 103.713 → 103.037 → **102.526** (pole)

The last push of every single run was his quickest. Pole came on the third push of a set that was already seven laps old.

Across all push laps, each extra lap on the set was worth about **93 ms** (se 31).

Now — here's where I had to be careful, and where I nearly wrote something wrong. The obvious objection is that this isn't the tyre at all, it's the car getting lighter as it burns fuel. And inside a qualifying segment, laps-on-the-set and laps-of-fuel-burned are **0.82 correlated**. Put both in one regression and neither survives: standard errors of about 54 ms on each, which tells you nothing.

So the regression can't settle it. The sectors can.

A car shedding fuel gets quicker *everywhere*, and most of all on a 1,816 m straight where it spends twenty seconds accelerating. A tyre coming into its window gets you grip in the corners and essentially nothing down the straight. So look at where the 93 ms actually lives:

- Sector 1 (64% full throttle): **−59.7 ms** per lap of the set (se 15.1)
- Sector 2 (60% full throttle): **−44.2 ms** (se 14.8)
- Sector 3 (94% full throttle): **+10.9 ms** (se 11.8)

Zero in the flat-out sector, with the wrong sign. And the speed trap doesn't move either — if anything it drifts down slightly, −0.32 km/h per lap on the set (se 0.16).

Fuel burn cannot do that. This is the tyre arriving, not the tank emptying.

## 0.837 and 0.001

The same session produced the biggest gap on the grid and the smallest one.

Russell took pole by **0.837 s**. Leclerc and Piastri, second and third, were separated by **0.001 s**. To put the first number in perspective: it was bigger than the entire spread from second place to eighth.

Russell was also quickest in all three sectors. Not a share of the lap — the whole thing.

The interesting part is *where* the margin came from, because the reflexive explanation for Mercedes at Baku is "they've got the engine, it's all on the straight." The split says otherwise:

- Sector 1 (64% full throttle): +0.070 s
- Sector 2 (60% full throttle): **+0.414 s**
- Sector 3 (94% full throttle): +0.353 s

The single biggest chunk came in sector 2 — the most cornering-heavy part of the lap. Sector 3 gave up 0.353 s, real and substantial, but second. Roughly **58% of the pole margin came in the two cornering sectors** and 42% in the flat-out one.

One lap against one lap, obviously. This is Saturday night, not a measurement of two cars over a stint.

## Fast everywhere

So I pushed on that Mercedes question properly, and the answer turned out to be more boring and more impressive than "engine": they were quickest at both ends.

Take each driver's best Q3 lap and measure two things that need no modelling at all — the minimum speed through each of the nine corners, and the speed trap. Plot one against the other and there's no trade-off anywhere on the grid. Russell sits alone in the top right:

- Mean minimum speed through the nine corners: **98.8 km/h**, quickest
- Speed trap: **328 km/h**, quickest
- Top speed on the lap: **331 km/h**, quickest

Corner by corner against the Q3 median he was quicker in six of the nine. The biggest single gain, **+6.0 km/h**, came at the last corner — the one that feeds the 1,816 m run to the line. Get that one right and you carry it for a kilometre and a half.

## The bit where I was wrong

I want to include this because it was the most instructive part of the whole exercise, and because a number you can't check is a number nobody should believe.

My first attempt at the corners-versus-straight question was to integrate `1/v` over a distance grid and split each lap into "flat-out time" and "turning time". Clean idea. Completely useless in practice: the integration carries about **0.2 s of error per lap**, which is roughly the size of the effect I was trying to measure. Bin it.

Second attempt: compare two drivers' speed traces metre by metre. Worse. Drivers reach the same apex up to **44 metres apart**, and that misalignment shows up as a spurious *52 km/h* "delta" at one point on the lap. I had actually started building a post around "Russell's +9 km/h final-corner exit" before a sanity check caught it.

What survives is measurement rather than reconstruction — each driver's own minimum speed in a window around each apex, and the trap speed the timing system hands you directly. Less clever. Actually true.

There was a smaller one too: two of my own scripts disagreed on what fraction of the lap is spent at full throttle, 72.7% against 71.5%. The culprit was linear interpolation of the throttle channel across its eighteen on/off transitions — interpolating a step signal invents values that were never there. 72.7% is the right one.

## What I'd watch on Sunday

If the surface is still coming to the cars, the track keeps getting quicker underneath the race, which pushes value toward track position and the later stint. But the gain lives on the racing line and in the corners — step off it to overtake and none of it is there.

And if a fresh set genuinely needs a few laps to arrive, then the undercut is weaker here than almost anywhere, and a late safety-car stop for new rubber is worth a lot less than it looks. Fresh tyres at Baku are a promise, not a weapon.

Though the honest caveat is that all of this is short-run soft-tyre behaviour over eight laps at qualifying loads, not a twenty-lap race stint. It tells you how a new set behaves in its first few laps — which, to be fair, is exactly the window an undercut lives in.

## Where all this actually lives

Fair question, since none of it is on this site.

The whole thing is a project I've been calling **PitWall Prediction Hub** — telemetry ingestion, a Postgres warehouse, the pace models, the chart rendering, the lot. It runs on a server in my basement, which is a sentence I enjoy writing far more than I should. Self-hosted, humming away, occasionally needing to be told that IPv6 is not its friend.

It's not polished enough to link yet. When it is, I'll put the link here and you'll be able to poke at the data yourself rather than taking my word for any of the numbers above — which, given the amount of this post devoted to methods that didn't work, feels like the right way round.

Until then, the charts live on Instagram: [@pitwallprediction](https://www.instagram.com/pitwallprediction/).
