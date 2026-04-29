"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "th" | "en";

type LocalizedProject = {
  id: string;
  name: string;
  type: string;
  company: string;
  period: string;
  goal: string;
  summary: string;
  role: string;
  features: string[];
  details: string[];
  stack: string[];
};

type RoadmapStatus = "done" | "current" | "upcoming";

type Dictionary = {
  nav: Record<"experience" | "skills" | "projects" | "ai" | "vision" | "education", string>;
  ui: Record<
    | "contact"
    | "viewExperience"
    | "projectList"
    | "current"
    | "yearsExp"
    | "age"
    | "company"
    | "goal"
    | "features"
    | "details"
    | "allProjects"
    | "projectArchive"
    | "role"
    | "close"
    | "openPhoto"
    | "toggleLanguage",
    string
  >;
  personal: {
    nameEn: string;
    nameTh: string;
    role: string;
    status: string;
    company: string;
    currentPeriod: string;
    location: string;
    email: string;
    phone: string;
    yearsExp: number;
    age: number;
    bio: string;
  };
  sections: Record<"experience" | "skills" | "ai" | "vision" | "education", string>;
  experiences: Array<{
    id: string;
    company: string;
    period: string;
    role: string;
    isCurrent: boolean;
    description: string;
    responsibilities?: string[];
    tags: string[];
  }>;
  skills: Array<{ category: string; focus: string; items: string[] }>;
  ai: {
    headline: string;
    description: string;
    cards: Array<{ name: string; desc: string }>;
    techStack: string[];
  };
  roadmap: Array<{ title: string; sub: string; status: RoadmapStatus }>;
  quote: { text: string; author: string };
  education: Array<{ period: string; degree: string; institution: string; detail: string }>;
  languages: Array<{ name: string; label: string; detail: string }>;
  projectsIntro: string;
  projects: LocalizedProject[];
};

const stacks = {
  smart4m: ["React", "Node.js", "MSSQL"],
  dust: ["Node.js", "Serial Port", "Email Notification", "MSSQL"],
  plc: ["C#", "Windows Form Application", "PLC Communication"],
  bondingWeb: ["PHP", "MSSQL", "Web Dashboard", "Maintenance"],
  startup: ["React", "Node.js", "MSSQL"],
  milkrun: ["Node.js", "Express", "TypeScript", "Prisma ORM", "React", "MUI", "Vite", "MSSQL"],
  portfolio: ["Next.js", "TypeScript", "Framer Motion", "next-themes", "Tailwind CSS"],
  herb: ["Image Processing", "Ionic Framework", "Mobile App", "Research"],
};

export const dictionary: Record<Locale, Dictionary> = {
  th: {
    nav: {
      experience: "ประสบการณ์",
      skills: "ทักษะ",
      projects: "โปรเจกต์",
      ai: "AI",
      vision: "เป้าหมาย",
      education: "การศึกษา",
    },
    ui: {
      contact: "ติดต่อ",
      viewExperience: "ดูประสบการณ์",
      projectList: "My Project List",
      current: "ปัจจุบัน",
      yearsExp: "ปีประสบการณ์",
      age: "อายุ",
      company: "บริษัท",
      goal: "เป้าหมาย",
      features: "ฟีเจอร์",
      details: "รายละเอียด",
      allProjects: "โปรเจกต์ทั้งหมด",
      projectArchive: "Project Archive",
      role: "บทบาท",
      close: "ปิด",
      openPhoto: "เปิดรูปโปรไฟล์",
      toggleLanguage: "เปลี่ยนภาษา",
    },
    personal: {
      nameEn: "Anucha Srilakaew",
      nameTh: "อนุชา ศรีลาแก้ว",
      role: "System Engineer / Full Stack Developer",
      status: "Currently at Astemo",
      company: "Astemo Chonburi Powertrain Ltd.",
      currentPeriod: "15/09/2025 - ปัจจุบัน",
      location: "Chonburi / Rayong / Bangkok, Thailand",
      email: "Anuchasrilakaew@gmail.com",
      phone: "0636415602",
      yearsExp: 5,
      age: 28,
      bio: "System Engineer ที่ดูแล ERP และ Power Platform เป็นหลัก ครอบคลุม Infor SyteLine, SQL Server, Power Automate, Power Apps, AI Builder, Report, Automation, API และ Web Application เพื่อเพิ่มประสิทธิภาพการทำงานและทดแทนระบบเดิม",
    },
    sections: {
      experience: "Experience",
      skills: "Skills",
      ai: "AI & Automation",
      vision: "Vision",
      education: "Education & Language",
    },
    experiences: [
      {
        id: "astemo",
        company: "Astemo Chonburi Powertrain Ltd.",
        period: "15/09/2025 - ปัจจุบัน",
        role: "System Engineer / Full Stack Developer",
        isCurrent: true,
        description:
          "ดูแลและพัฒนางานด้าน ERP และ Power Platform เป็นหลัก ครอบคลุม Infor SyteLine, SQL Server, Power Automate, Power Apps, AI Builder, Report, Automation, REST API และ Web Application เพื่อเพิ่มประสิทธิภาพการทำงานและทดแทนระบบเดิม",
        responsibilities: [
          "เชื่อมต่อและแก้ไขระบบ ERP Infor SyteLine รวมถึง VB Script และ Form Script",
          "พัฒนา workflow และ business automation ด้วย Power Automate, Power Apps และ AI Builder",
          "ออกแบบ SQL Server Database, Stored Procedure, View, Complex Query, CTE และ Performance Tuning",
          "พัฒนา Report และ Dashboard สำหรับ Inventory Aging, operation data และ accounting data",
          "สร้าง OCR / Document Processing flow เพื่ออ่านเอกสาร บันทึกข้อมูล และส่ง email อัตโนมัติ",
          "พัฒนา Web Application ด้วย ASP.NET Core MVC (C#), React และ TypeScript เมื่อจำเป็นต่อ workflow ภายใน",
          "พัฒนา REST API ด้วย Node.js / Express เพื่อเชื่อมต่อ ERP และระบบภายใน",
          "Deploy และดูแลระบบบน IIS, Windows Server, PM2, Git / Gitea, CI/CD และ SSL",
        ],
        tags: ["Infor SyteLine", "Power Platform", "Power Automate", "Power Apps", "AI Builder", "SQL Server", "VB Script", "Form Script", "ASP.NET Core MVC", "IIS", "CI/CD"],
      },
      {
        id: "ns-siam",
        company: "NS-Siam United Steel Co., Ltd.",
        period: "2024 - 2025",
        role: "System Engineer - Infrastructure",
        isCurrent: false,
        description:
          "ดูแลงาน IT Infrastructure และ System Support ภายในองค์กร ครอบคลุม Microsoft 365, Exchange, Azure / Entra, Intune, Active Directory, user support, endpoint support และการประสานงานด้านระบบพื้นฐาน",
        tags: ["IT Infrastructure", "System Support", "Microsoft 365", "Exchange", "Azure / Entra", "Intune", "Active Directory", "Endpoint Support"],
      },
      {
        id: "sony",
        company: "Sony Technology (Thailand) Co., Ltd.",
        period: "2021 - 2024",
        role: "System Engineer / Full Stack Developer",
        isCurrent: false,
        description:
          "พัฒนาระบบตาม User Requirements ออกแบบฐานข้อมูล MS SQL, MySQL, Oracle ทำ Testing & Debugging ออกแบบ UX/UI ด้วย Figma และสร้างระบบสนับสนุนงาน logistics ภายในองค์กร",
        tags: ["Node.js", "React", "TypeScript", "MSSQL", "Prisma", "Figma", "Oracle", "MySQL"],
      },
    ],
    skills: [
      {
        category: "Frontend Development",
        focus: "สร้าง web application ที่ใช้งานจริงในองค์กร",
        items: ["React", "TypeScript", "JavaScript", "ASP.NET Core MVC", "Razor View", "Material UI", "Responsive UI", "Figma"],
      },
      {
        category: "Backend & API",
        focus: "ออกแบบ service, business logic และ integration layer",
        items: ["C#", "ASP.NET Core", "Node.js", "Express", "REST API", "Prisma ORM", "Authentication", "Validation"],
      },
      {
        category: "Database & ERP",
        focus: "ทำงานกับข้อมูล production, product data และระบบ Infor ERP",
        items: ["SQL Server", "Stored Procedure", "View", "Complex Query", "CTE", "Performance Tuning", "Infor SyteLine", "VB Script / Form Script", "Product Master"],
      },
      {
        category: "Power Platform & Automation",
        focus: "สร้าง workflow และ automation สำหรับลด manual work ในกระบวนการธุรกิจ",
        items: ["Power Automate", "Power Apps", "AI Builder", "OCR", "Document Processing", "Approval Flow", "Email Notification", "SQL Automation"],
      },
      {
        category: "Report & Dashboard",
        focus: "พัฒนา report และ dashboard สำหรับข้อมูล operation, inventory และ accounting",
        items: ["Inventory Aging", "Operation Dashboard", "Accounting Report", "Monitoring Dashboard", "Grafana", "SQL Query", "Data Validation"],
      },
      {
        category: "System Integration",
        focus: "เชื่อมต่อระบบภายในและภายนอก ทั้ง ERP, REST API และ service ต่าง ๆ",
        items: ["ERP Integration", "REST API", "Barcode", "PR / PO", "Account Mapping", "Inventory", "Job / Issue"],
      },
      {
        category: "Infrastructure & Delivery",
        focus: "ดูแลการ deploy, environment และ CI/CD สำหรับระบบภายใน",
        items: ["Windows Server", "IIS", "PM2", "Git / Gitea", "Gitea CI/CD", "Jenkins", "Network Share", "SSL", "Production Support"],
      },
    ],
    ai: {
      headline: "Exploring AI for Internal Tools",
      description: "กำลังต่อยอดทักษะด้าน AI เพื่อนำมาช่วยงาน automation, document processing, search และ helpdesk ภายในองค์กร โดยเน้นการทดลองใช้งานให้เหมาะกับ workflow จริง",
      cards: [
        { name: "Document Processing", desc: "OCR และอ่านข้อมูลจากเอกสาร" },
        { name: "Knowledge Search", desc: "ค้นหาข้อมูลจากเอกสารภายใน" },
        { name: "LLM API", desc: "ทดลองเชื่อมต่อ LLM API" },
        { name: "Helpdesk Assistant", desc: "แนวคิด chatbot สำหรับ support ภายใน" },
      ],
      techStack: ["Python", "OCR", "AI Builder", "Power Automate", "Embedding", "Vector Search", "LLM API", "Prompt Design"],
    },
    roadmap: [
      { title: "Full Stack Developer", sub: "Node.js, React, TypeScript", status: "done" },
      { title: "Enterprise System Integrator", sub: "ERP, MSSQL, Power Platform", status: "done" },
      { title: "AI-Assisted Automation", sub: "OCR, document processing, search และ helpdesk assistant - กำลังพัฒนา", status: "current" },
      { title: "Solution Architect", sub: "ออกแบบระบบ Enterprise และ integration ที่เสถียรขึ้น", status: "upcoming" },
      { title: "Technical Leadership", sub: "เติบโตเป็นคนที่ออกแบบระบบ, นำทีม และสร้างผลลัพธ์ระยะยาวให้องค์กร", status: "upcoming" },
    ],
    quote: {
      text: "Build reliable systems, improve real workflows, and grow with the team.",
      author: "อนุชา ศรีลาแก้ว, 2025",
    },
    education: [
      {
        period: "2018-2021",
        degree: "วิศวกรรมคอมพิวเตอร์",
        institution: "Kasetsart University, Sakon Nakhon Campus",
        detail: "โปรเจกต์จบ: ระบบจดจำใบไม้สมุนไพรไทยด้วย Image Processing (Ionic Framework)",
      },
      {
        period: "2011-2017",
        degree: "มัธยมศึกษา",
        institution: "Pudindang Wittaya School",
        detail: "",
      },
    ],
    languages: [
      { name: "Thai", label: "Native", detail: "สื่อสารงานเทคนิคและประสานงานกับผู้ใช้งานได้อย่างชัดเจน" },
      { name: "English", label: "Working proficiency", detail: "อ่านเอกสารเทคนิค, เขียนอีเมล, ทำงานร่วมกับ requirement และ issue ภาษาอังกฤษได้" },
    ],
    projectsIntro: "ศูนย์รวมโปรเจกต์ที่เคยทำ ทั้งงาน enterprise, internal tools, automation, personal portfolio และโปรเจกต์จากช่วงมหาวิทยาลัย",
    projects: [] as LocalizedProject[],
  },
  en: {
    nav: {
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      ai: "AI",
      vision: "Vision",
      education: "Education",
    },
    ui: {
      contact: "Contact",
      viewExperience: "View Experience",
      projectList: "My Project List",
      current: "Current",
      yearsExp: "Years exp.",
      age: "Age",
      company: "Company",
      goal: "Goal",
      features: "Features",
      details: "Details",
      allProjects: "All Projects",
      projectArchive: "Project Archive",
      role: "Role",
      close: "Close",
      openPhoto: "Open profile photo",
      toggleLanguage: "Switch language",
    },
    personal: {
      nameEn: "Anucha Srilakaew",
      nameTh: "อนุชา ศรีลาแก้ว",
      role: "System Engineer / Full Stack Developer",
      status: "Currently at Astemo",
      company: "Astemo Chonburi Powertrain Ltd.",
      currentPeriod: "15/09/2025 - Present",
      location: "Chonburi / Rayong / Bangkok, Thailand",
      email: "Anuchasrilakaew@gmail.com",
      phone: "0636415602",
      yearsExp: 5,
      age: 28,
      bio: "System Engineer primarily focused on ERP and Power Platform, covering Infor SyteLine, SQL Server, Power Automate, Power Apps, AI Builder, reporting, automation, APIs, and internal web applications to improve workflows and replace legacy processes.",
    },
    sections: {
      experience: "Experience",
      skills: "Skills",
      ai: "AI & Automation",
      vision: "Vision",
      education: "Education & Language",
    },
    experiences: [
      {
        id: "astemo",
        company: "Astemo Chonburi Powertrain Ltd.",
        period: "15/09/2025 - Present",
        role: "System Engineer / Full Stack Developer",
        isCurrent: true,
        description:
          "Primarily responsible for ERP and Power Platform work, covering Infor SyteLine, SQL Server, Power Automate, Power Apps, AI Builder, reporting, automation, REST APIs, and internal web applications to improve operational efficiency and replace legacy workflows.",
        responsibilities: [
          "Integrate and troubleshoot Infor SyteLine ERP, including VB Script and Form Script",
          "Build workflow and business automation with Power Automate, Power Apps, and AI Builder",
          "Design SQL Server databases, stored procedures, views, complex queries, CTEs, and performance tuning",
          "Develop reports and dashboards for Inventory Aging, operation data, and accounting data",
          "Create OCR / document processing flows to read documents, save data, and send automated emails",
          "Develop web applications with ASP.NET Core MVC (C#), React, and TypeScript when required by internal workflows",
          "Develop REST APIs with Node.js / Express for ERP and internal system integration",
          "Deploy and maintain systems on IIS, Windows Server, PM2, Git / Gitea, CI/CD, and SSL",
        ],
        tags: ["Infor SyteLine", "Power Platform", "Power Automate", "Power Apps", "AI Builder", "SQL Server", "VB Script", "Form Script", "ASP.NET Core MVC", "IIS", "CI/CD"],
      },
      {
        id: "ns-siam",
        company: "NS-Siam United Steel Co., Ltd.",
        period: "2024 - 2025",
        role: "System Engineer - Infrastructure",
        isCurrent: false,
        description:
          "Handled IT infrastructure and system support operations, covering Microsoft 365, Exchange, Azure / Entra, Intune, Active Directory, user support, endpoint support, and coordination for core IT services.",
        tags: ["IT Infrastructure", "System Support", "Microsoft 365", "Exchange", "Azure / Entra", "Intune", "Active Directory", "Endpoint Support"],
      },
      {
        id: "sony",
        company: "Sony Technology (Thailand) Co., Ltd.",
        period: "2021 - 2024",
        role: "System Engineer / Full Stack Developer",
        isCurrent: false,
        description:
          "Developed systems from user requirements, designed MS SQL / MySQL / Oracle databases, performed testing and debugging, designed UX/UI with Figma, and built internal logistics support systems.",
        tags: ["Node.js", "React", "TypeScript", "MSSQL", "Prisma", "Figma", "Oracle", "MySQL"],
      },
    ],
    skills: [
      {
        category: "Frontend Development",
        focus: "Building production-ready internal web applications",
        items: ["React", "TypeScript", "JavaScript", "ASP.NET Core MVC", "Razor View", "Material UI", "Responsive UI", "Figma"],
      },
      {
        category: "Backend & API",
        focus: "Designing services, business logic, and integration layers",
        items: ["C#", "ASP.NET Core", "Node.js", "Express", "REST API", "Prisma ORM", "Authentication", "Validation"],
      },
      {
        category: "Database & ERP",
        focus: "Working with production data, product data, and Infor ERP",
        items: ["SQL Server", "Stored Procedure", "View", "Complex Query", "CTE", "Performance Tuning", "Infor SyteLine", "VB Script / Form Script", "Product Master"],
      },
      {
        category: "Power Platform & Automation",
        focus: "Building workflows and automation to reduce manual work in business processes",
        items: ["Power Automate", "Power Apps", "AI Builder", "OCR", "Document Processing", "Approval Flow", "Email Notification", "SQL Automation"],
      },
      {
        category: "Report & Dashboard",
        focus: "Developing reports and dashboards for operation, inventory, and accounting data",
        items: ["Inventory Aging", "Operation Dashboard", "Accounting Report", "Monitoring Dashboard", "Grafana", "SQL Query", "Data Validation"],
      },
      {
        category: "System Integration",
        focus: "Connecting ERP, REST APIs, and internal services",
        items: ["ERP Integration", "REST API", "Barcode", "PR / PO", "Account Mapping", "Inventory", "Job / Issue"],
      },
      {
        category: "Infrastructure & Delivery",
        focus: "Managing deployment, environments, and CI/CD for internal systems",
        items: ["Windows Server", "IIS", "PM2", "Git / Gitea", "Gitea CI/CD", "Jenkins", "Network Share", "SSL", "Production Support"],
      },
    ],
    ai: {
      headline: "Exploring AI for Internal Tools",
      description: "Developing practical AI skills for automation, document processing, search, and internal helpdesk workflows, with a focus on realistic enterprise use cases.",
      cards: [
        { name: "Document Processing", desc: "OCR and data extraction from documents" },
        { name: "Knowledge Search", desc: "Searching internal documents and knowledge" },
        { name: "LLM API", desc: "Experimenting with LLM API integration" },
        { name: "Helpdesk Assistant", desc: "Chatbot concept for internal support" },
      ],
      techStack: ["Python", "OCR", "AI Builder", "Power Automate", "Embedding", "Vector Search", "LLM API", "Prompt Design"],
    },
    roadmap: [
      { title: "Full Stack Developer", sub: "Node.js, React, TypeScript", status: "done" },
      { title: "Enterprise System Integrator", sub: "ERP, MSSQL, Power Platform", status: "done" },
      { title: "AI-Assisted Automation", sub: "OCR, document processing, search, and helpdesk assistant - in progress", status: "current" },
      { title: "Solution Architect", sub: "Designing more reliable enterprise systems and integrations", status: "upcoming" },
      { title: "Technical Leadership", sub: "Growing into system design, team leadership, and long-term business impact", status: "upcoming" },
    ],
    quote: {
      text: "Build reliable systems, improve real workflows, and grow with the team.",
      author: "Anucha Srilakaew, 2025",
    },
    education: [
      {
        period: "2018-2021",
        degree: "Computer Engineering",
        institution: "Kasetsart University, Sakon Nakhon Campus",
        detail: "Final project: Thai herb leaf recognition system using image processing (Ionic Framework)",
      },
      {
        period: "2011-2017",
        degree: "Secondary Education",
        institution: "Pudindang Wittaya School",
        detail: "",
      },
    ],
    languages: [
      { name: "Thai", label: "Native", detail: "Clear technical communication and coordination with users and stakeholders" },
      { name: "English", label: "Working proficiency", detail: "Reading technical documents, writing emails, and working with English requirements and issues" },
    ],
    projectsIntro: "A central archive of enterprise systems, internal tools, automation, personal work, and university projects I have built.",
    projects: [] as LocalizedProject[],
  },
};

const thaiProjects: LocalizedProject[] = [
  {
    id: "smart-4m-change",
    name: "Smart 4M Change",
    type: "Web Application",
    company: "Sony Technology Thailand",
    period: "Sony Technology Thailand",
    goal: "เปลี่ยนจากการกรอกข้อมูล 4M Change บนกระดาษมาเป็นระบบเว็บ",
    summary: "ระบบจัดการ 4M Change พร้อม approval flow, dashboard และ monitoring ตาม line production",
    role: "Full Stack Developer",
    features: ["Change Management", "Approval System", "Dashboard ภาพรวม", "Monitor Data แบบ Real-time", "Drop Down Data", "System Instruction"],
    details: ["Man Change / Machine Change / Material Change / Method Change / Total Change แยกตาม Line"],
    stack: stacks.smart4m,
  },
  {
    id: "smart-environment-dust-check",
    name: "Smart Environment (Dust Check)",
    type: "IoT Monitoring Web Application",
    company: "Sony Technology Thailand",
    period: "Sony Technology Thailand",
    goal: "วัดค่าฝุ่นในพื้นที่ที่ต้องควบคุม และแจ้งเตือนเมื่อเกินมาตรฐาน",
    summary: "ระบบ monitoring ค่าฝุ่นจากเครื่อง DKCO 52 ผ่าน Serial Port / COM Port พร้อมกราฟ real-time และ email alert",
    role: "Full Stack Developer",
    features: ["แสดงกราฟ Real-time", "ส่งอีเมลแจ้งเตือนอัตโนมัติ", "เลือก Location", "เลือก Port Connection"],
    details: ["Hardware: DKCO 52 via Serial Port / COM Port", "Measured values: PM 0.3, 0.5, 1.0, 2.0, 5.0"],
    stack: stacks.dust,
  },
  {
    id: "bonding-refill-plc-control",
    name: "Bonding Refill - Application Control PLC",
    type: "Desktop Application (Windows)",
    company: "Sony Technology Thailand",
    period: "Sony Technology Thailand",
    goal: "ควบคุม PLC สำหรับเติมกาวเข้าหลอดและ TANK กาว",
    summary: "Windows desktop application สำหรับควบคุมอุปกรณ์ในกระบวนการ bonding refill และติดตามสถานะ real-time",
    role: "Application Developer",
    features: ["Control Syringe / Magnet / Lid / Valve by ID", "Real-time ON/OFF status", "FILL amount display", "TIME value logging"],
    details: ["Managed IDs: 3GT-01, 42T-01, 5FT-01, 08(W)T-01, 08(B)T-01, WT-01, 3BT-01"],
    stack: stacks.plc,
  },
  {
    id: "bonding-refill-web-dashboard",
    name: "Bonding Refill - Web Dashboard",
    type: "Web Application",
    company: "Sony Technology Thailand",
    period: "Sony Technology Thailand",
    goal: "ติดตามและควบคุมกาวภายใน Shop กาว",
    summary: "Dashboard เดิมที่พัฒนาด้วย PHP สำหรับติดตามสถานะการเติมกาวและ process ตั้งแต่ Time In ถึง Time Out โดยรับช่วงต่อเพื่อดูแล แก้ไข และปรับปรุงระบบ",
    role: "Maintenance / Enhancement",
    features: ["Existing PHP dashboard maintenance", "Refill status dashboard", "Process tracking", "Status display", "Guideline / Requester information"],
    details: ["Status example: Save and process completed"],
    stack: stacks.bondingWeb,
  },
  {
    id: "smart-startup-check",
    name: "Smart Startup Check",
    type: "Web Application",
    company: "Sony Technology Thailand",
    period: "Sony Technology Thailand",
    goal: "ตรวจสอบความพร้อมของ Line Production ก่อนรันงานทุกวัน",
    summary: "ระบบตรวจสอบ startup readiness ของ production line พร้อม dashboard, shift, technician และ production leader information",
    role: "Full Stack Developer",
    features: ["Checklist readiness by line", "PASS / TOTAL / STATUS dashboard", "GOOD / NG by line", "Technician and Production Leader profile", "DAY / NIGHT shift support", "Date and Country / Line selection"],
    details: ["Coverage: AC, AU, AM, ONE STT, LENS Line Production, C Site, B Site (44 Production), POE", "Award: Golden Award of Service Kaizen, Thailand Kaizen Award 2021-2022"],
    stack: stacks.startup,
  },
  {
    id: "milkrun-system",
    name: "MilkRun System",
    type: "Web Application - End-to-end Logistics Management",
    company: "Astemo Chonburi Powertrain Ltd.",
    period: "Astemo Chonburi Powertrain Ltd.",
    goal: "บริหารจัดการการจัดส่งสินค้าระหว่าง Astemo กับ Customer",
    summary: "ระบบบริหารจัดการโลจิสติกส์ครบวงจร เชื่อม workflow การจัดส่ง ตรวจสอบก่อนส่ง และ proof of delivery",
    role: "Full Stack Developer",
    features: ["Delivery Plan", "Final Checklist", "POD (Proof of Delivery)", "AstemoToCustomer", "CustomerToAstemo", "Monthly delivery dashboard"],
    details: ["Integrated with Infor SyteLine ERP, MSSQL, SharePoint Online"],
    stack: stacks.milkrun,
  },
  {
    id: "portfolio-website",
    name: "Anucha Portfolio Website",
    type: "Personal Portfolio",
    company: "Personal Project",
    period: "Personal Project",
    goal: "รวบรวมประสบการณ์ ทักษะ วิสัยทัศน์ และรายการโปรเจกต์ทั้งหมดในที่เดียว",
    summary: "เว็บไซต์ portfolio/resume สำหรับรวบรวมประสบการณ์ ทักษะ วิสัยทัศน์ และรายการโปรเจกต์ทั้งหมดในที่เดียว",
    role: "Frontend Developer",
    features: ["Responsive portfolio", "Dark / Light theme", "Project archive", "Professional resume content"],
    details: [],
    stack: stacks.portfolio,
  },
  {
    id: "herb-leaf-recognition",
    name: "Thai Herb Leaf Recognition",
    type: "University Project",
    company: "Kasetsart University",
    period: "Kasetsart University",
    goal: "จดจำใบไม้สมุนไพรไทยด้วย Image Processing",
    summary: "โปรเจกต์จบระบบจดจำใบไม้สมุนไพรไทยด้วย Image Processing และ mobile application framework",
    role: "Developer",
    features: ["Leaf image recognition", "Mobile application interface", "Research-based implementation"],
    details: [],
    stack: stacks.herb,
  },
];

const englishProjects: LocalizedProject[] = [
  {
    id: "smart-4m-change",
    name: "Smart 4M Change",
    type: "Web Application",
    company: "Sony Technology Thailand",
    period: "Sony Technology Thailand",
    goal: "Replaced paper-based 4M Change forms with a web-based system",
    summary: "A 4M Change management system with approval workflow, dashboards, and line-based monitoring.",
    role: "Full Stack Developer",
    features: ["Change Management", "Approval System", "Overview Dashboard", "Real-time Monitoring", "Drop-down Master Data", "System Instruction"],
    details: ["Man Change / Machine Change / Material Change / Method Change / Total Change by production line"],
    stack: stacks.smart4m,
  },
  {
    id: "smart-environment-dust-check",
    name: "Smart Environment (Dust Check)",
    type: "IoT Monitoring Web Application",
    company: "Sony Technology Thailand",
    period: "Sony Technology Thailand",
    goal: "Measured dust levels in controlled areas and sent alerts when values exceeded standards",
    summary: "A dust monitoring system connected to DKCO 52 via Serial Port / COM Port with real-time charts and email alerts.",
    role: "Full Stack Developer",
    features: ["Real-time chart", "Automatic email alert", "Location selection", "Port connection selection"],
    details: ["Hardware: DKCO 52 via Serial Port / COM Port", "Measured values: PM 0.3, 0.5, 1.0, 2.0, 5.0"],
    stack: stacks.dust,
  },
  {
    id: "bonding-refill-plc-control",
    name: "Bonding Refill - Application Control PLC",
    type: "Desktop Application (Windows)",
    company: "Sony Technology Thailand",
    period: "Sony Technology Thailand",
    goal: "Controlled PLC operations for glue refill into syringes and tanks",
    summary: "A Windows desktop application for controlling bonding refill equipment and tracking real-time status.",
    role: "Application Developer",
    features: ["Control Syringe / Magnet / Lid / Valve by ID", "Real-time ON/OFF status", "FILL amount display", "TIME value logging"],
    details: ["Managed IDs: 3GT-01, 42T-01, 5FT-01, 08(W)T-01, 08(B)T-01, WT-01, 3BT-01"],
    stack: stacks.plc,
  },
  {
    id: "bonding-refill-web-dashboard",
    name: "Bonding Refill - Web Dashboard",
    type: "Web Application",
    company: "Sony Technology Thailand",
    period: "Sony Technology Thailand",
    goal: "Tracked and controlled glue refill operations in the glue shop",
    summary: "An existing PHP dashboard for refill status and process tracking from Time In to Time Out, inherited for maintenance, fixes, and improvements.",
    role: "Maintenance / Enhancement",
    features: ["Existing PHP dashboard maintenance", "Refill status dashboard", "Process tracking", "Status display", "Guideline / Requester information"],
    details: ["Status example: Save and process completed"],
    stack: stacks.bondingWeb,
  },
  {
    id: "smart-startup-check",
    name: "Smart Startup Check",
    type: "Web Application",
    company: "Sony Technology Thailand",
    period: "Sony Technology Thailand",
    goal: "Checked production line readiness before daily operation",
    summary: "A production startup readiness system with dashboards, shift support, technician data, and production leader information.",
    role: "Full Stack Developer",
    features: ["Checklist readiness by line", "PASS / TOTAL / STATUS dashboard", "GOOD / NG by line", "Technician and Production Leader profile", "DAY / NIGHT shift support", "Date and Country / Line selection"],
    details: ["Coverage: AC, AU, AM, ONE STT, LENS Line Production, C Site, B Site (44 Production), POE", "Award: Golden Award of Service Kaizen, Thailand Kaizen Award 2021-2022"],
    stack: stacks.startup,
  },
  {
    id: "milkrun-system",
    name: "MilkRun System",
    type: "Web Application - End-to-end Logistics Management",
    company: "Astemo Chonburi Powertrain Ltd.",
    period: "Astemo Chonburi Powertrain Ltd.",
    goal: "Managed delivery operations between Astemo and customers",
    summary: "An end-to-end logistics management system connecting delivery planning, final checks, and proof of delivery workflows.",
    role: "Full Stack Developer",
    features: ["Delivery Plan", "Final Checklist", "POD (Proof of Delivery)", "AstemoToCustomer", "CustomerToAstemo", "Monthly delivery dashboard"],
    details: ["Integrated with Infor SyteLine ERP, MSSQL, SharePoint Online"],
    stack: stacks.milkrun,
  },
  {
    id: "portfolio-website",
    name: "Anucha Portfolio Website",
    type: "Personal Portfolio",
    company: "Personal Project",
    period: "Personal Project",
    goal: "Collected experience, skills, vision, and project history in one place",
    summary: "A portfolio/resume website that presents professional experience, skills, vision, and project archive.",
    role: "Frontend Developer",
    features: ["Responsive portfolio", "Dark / Light theme", "Project archive", "Professional resume content"],
    details: [],
    stack: stacks.portfolio,
  },
  {
    id: "herb-leaf-recognition",
    name: "Thai Herb Leaf Recognition",
    type: "University Project",
    company: "Kasetsart University",
    period: "Kasetsart University",
    goal: "Recognized Thai herb leaves with image processing",
    summary: "A final-year project for Thai herb leaf recognition using image processing and a mobile application framework.",
    role: "Developer",
    features: ["Leaf image recognition", "Mobile application interface", "Research-based implementation"],
    details: [],
    stack: stacks.herb,
  },
];

dictionary.th.projects = thaiProjects;
dictionary.en.projects = englishProjects;

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-locale");
    if (saved === "th" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("portfolio-locale", nextLocale);
    document.documentElement.lang = nextLocale;
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionary[locale],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
