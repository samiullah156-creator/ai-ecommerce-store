<!-- styled:v2 -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1d1726,50:167dfe,100:9533fa&height=180&section=header&text=AuraCart%3A%20AI%20E-commerce%20Store&fontSize=38&fontColor=ffffff&fontAlignY=36&desc=React%20%E2%80%A2%20TypeScript%20%E2%80%A2%20React%20Router&descAlignY=58&descSize=16&animation=fadeIn" width="100%" alt="AuraCart: AI E-commerce Store" />

**A modern React and TypeScript storefront for tech gadgets and lifestyle electronics, with product browsing, a cart and toast notifications.**

<p>
  <img src="https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React%20Router%207-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<p>
  <a href="#how-it-works">How it works</a> ·
  <a href="#features">Features</a> ·
  <a href="#tech-stack">Tech stack</a> ·
  <a href="#project-structure">Project structure</a> ·
  <a href="#getting-started">Getting started</a>
</p>

</div>

---

## Features

- Hero section and featured products on the home page
- Product catalogue across Audio, Smart Home, Computing and Gaming
- Cart built on React Context: add, remove and update quantities with a live total
- Toast notifications for cart actions
- Responsive layout with a shared header and footer
- Client-side routing for the Home, Products and Cart pages

## How it works

```mermaid
flowchart LR
    H([Home]) --> P[Products<br/>by category]
    P --> C[Add to cart]
    C --> X[CartContext<br/>quantities + total]
    X --> K([Cart page])
    C --> T[Toast<br/>notification]

    classDef box fill:#1d1726,stroke:#167dfe,color:#e5e7eb
    classDef ends fill:#2e1065,stroke:#9533fa,color:#ffffff
    class P,C,X,T box
    class H,K ends
```

## Tech stack

| Area | Tools |
|:--|:--|
| UI | React 19, TypeScript, Lucide icons |
| Routing | React Router 7 |
| State | React Context (cart, toasts) |
| Build | Vite |

## Project structure

```
├── App.tsx
├── components/   # Home/Hero, Layout/Header + Footer, Product/ProductCard + FeaturedProducts
├── context/      # CartContext, ToastContext
├── pages/        # Home, Products, Cart
└── types.ts
```

## Getting started

```bash
npm install
npm run dev
```

---

<div align="center">

**Built by [Ch Muhammad Samiullah](https://github.com/samiullah156-creator)** · AI Automation Engineer and Full-Stack Developer at [Lexvaxa](https://lexvaxa.com)

<a href="https://github.com/samiullah156-creator"><img src="https://img.shields.io/badge/More%20projects-181717?style=for-the-badge&logo=github&logoColor=white" alt="More projects" /></a>
<a href="https://lexvaxa.com/contact"><img src="https://img.shields.io/badge/Work%20with%20me-167dfe?style=for-the-badge&logo=googlecalendar&logoColor=white" alt="Work with me" /></a>
<a href="https://www.linkedin.com/in/sami-lexvaxa/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>

<sub>⭐ Star this repo if you found it useful</sub>

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:9533fa,50:167dfe,100:1d1726&height=110&section=footer" width="100%" alt="" />
