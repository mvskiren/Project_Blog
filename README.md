This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Design a Blogging Platform

<!--ts-->

- [Design a Blogging Platform](#design-a-blogging-platform)
- [Problem Statement](#problem-statement)
- [Requirements](#requirements)
  - [Core Requirements](#core-requirements)
  - [High Level Requirements](#high-level-requirements)
  - [Micro Requirements](#micro-requirements)
- [Output](#output)
  - [Design Document](#design-document)
    - [Recommended Tech Stack](#recommended-tech-stack)

<!--te-->

# Problem Statement

Design a simple multi-user publishing/blogging platform, allowing writers to publish and manage the blogs under their personal publication and readers to read them.

# Requirements

<!--rs-->

_The problem statement is something to start with, be creative and dive into the product details and add constraints and features you think would be important._

<!--re-->

## Core Requirements

- writers should be able to **publish** blog under their personal publication
- readers should be able to **read** the blog
- a user can be both - a reader as well as a writer
- author of the blog should be able to **delete** the blog
- blog may **contain images**, but will not contain any video
- time to access the blog should be **as low as possible**
- we have to render "**number of blogs**" written by every user on his/her profile
- users should be able to **search** for a particular blog
- the platform should be scaled for **5 million** daily active readers
- the platform should be scaled for **10,000** daily active writers

## High Level Requirements

<!--hs-->

- make your high-level components operate with **high availability**
- ensure that the data in your system is **durable**, not matter what happens
- define how your system would behave while **scaling-up** and **scaling-down**
- make your system **cost-effective** and provide a justification for the same
- describe how **capacity planning** helped you made a good design decision
- think about how other services will interact with your service
<!--he-->

## Micro Requirements

<!--ms-->

- ensure the data in your system is **never** going in an inconsistent state
- ensure your system is **free of deadlocks** (if applicable)
- ensure that the throughput of your system is not affected by **locking**, if it does, state how it would affect
<!--me-->


## Design Document

<!--ds-->

Create a **design document** of this system/feature stating all critical design decisions, tradeoffs, components, services, and communications. Also specify how your system handles at scale, and what will eventually become a chokepoint.

Do **not** create unnecessary components, just to make design look complicated. A good design is **always simple and elegant**. A good way to think about it is if you were to create a spearate process/machine/infra for each component and you will have to code it yourself, would you still do it?

<!--de-->

## Prototype

To understand the nuances and internals of this system, build a prototype that

- has a realtional database with schema able to handle all the core requirements
- has an interface for writers to
  - publish the blog
  - manage the blog
- has an interface for readers to
  - browse all the publications and read the blogs
  - search a blog or a publication

### Recommended Tech Stack

This is a recommended tech-stack for building this Blog site.

| Which    | Options                                          |
| -------- | ------------------------------------------------ |
| FrontEnd | NextJs,Typescript,SASS,Tailwind,Javascript       |
| Database | Relational Database - AmazonDynamoDB, PostgreSQL |

# Outcome

<!--fs-->

Note: System design and Core Requirements information was inspired by Arpit Bhayani.

<!--fe-->
