import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Database,
  Mail,
  Network,
  Search,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  Workflow,
} from 'lucide-react';
import './styles.css';

const metrics = [
  { value: '6+', label: 'Years in SRE / DevOps' },
  { value: '30%', label: 'Incident rate reduced' },
  { value: '4', label: 'AI engineering scenarios' },
  { value: '2018', label: 'Started cloud platform work' },
];

const focusAreas = [
  'OpenClaw platform setup and Skill creation',
  'RAG deep retrieval and document Q&A systems',
  'MaxCompute reliability and private-cloud support',
  'Pytest + Playwright + POM automation architecture',
];

const projects = [
  {
    icon: BrainCircuit,
    eyebrow: 'AI Engineering / RAG',
    title: 'OpenClaw + RAG 智能知识与业务辅助平台',
    description:
      '参与公司内部 OpenClaw 平台搭建，围绕业务问题创建 Skill 能力，并建设 RAG 深度检索与文档咨询问答系统，将分散文档转化为可检索、可追问、可复用的知识服务。',
    points: ['OpenClaw 平台接入', 'Skill / Agent 能力沉淀', '文档解析、召回、重排与问答增强'],
    accent: '01',
  },
  {
    icon: Bot,
    eyebrow: 'AI Testing / Multimodal',
    title: '基于多模态大模型的智能化测试与运维平台',
    description:
      '主导 Pytest + Playwright + POM 分层自动化体系，通过 Docker + Jenkins 实现分布式执行，并引入 Qwen3-VL 进行失败归因、视觉走查和国际化一致性校验。',
    points: ['失败归因 Agent', 'Trace 全程录制', 'Prompt 资产沉淀'],
    accent: '02',
  },
  {
    icon: Database,
    eyebrow: 'SRE / Big Data Platform',
    title: '阿里云 MaxCompute 大数据平台稳定性保障',
    description:
      '负责专有云环境下 MaxCompute 相关模块稳定性保障，基于 Python/Shell 建设自动化巡检、日志收集、安全审计和故障处理能力。',
    points: ['故障率降低约 30%', 'PyODPS 数据校验', '客户工单与疑难问题闭环'],
    accent: '03',
  },
  {
    icon: Workflow,
    eyebrow: 'DevOps / Quality Gate',
    title: 'DevOps CI/CD 质量门禁建设',
    description:
      '构建 Jenkins + GitLab 质量门禁与持续集成流程，支持代码构建、测试执行、报告回收和质量问题复盘，提升研发交付效率。',
    points: ['Jenkins + GitLab', '自动化质量门禁', '回归报告分析'],
    accent: '04',
  },
];

const skills = [
  { icon: Bot, title: 'AI 工程化', text: 'OpenClaw、Skill、Agent、Prompt Engineering，将大模型能力落到真实业务流程。' },
  { icon: Search, title: 'RAG 深度检索', text: '文档解析、切分、向量化、召回、重排、上下文组装与问答效果优化。' },
  { icon: ServerCog, title: 'SRE 稳定性保障', text: '面向 MaxCompute 与专有云环境，处理集群异常、客户工单和疑难故障闭环。' },
  { icon: TerminalSquare, title: '运维开发', text: '使用 Python/Shell 构建巡检、日志、安全审计、数据校验和流程自动化工具。' },
  { icon: ShieldCheck, title: '质量工程', text: 'Pytest、Playwright、POM、Jenkins、Docker，建设自动化测试与质量门禁。' },
  { icon: Database, title: '大数据平台', text: '熟悉 MaxCompute、PyODPS、离线数仓和大数据平台高可用运维。' },
];

const timeline = [
  { time: '2025.12 - 至今', title: 'OpenClaw + RAG 内部智能知识平台', text: '参与平台搭建、Skill 创建、文档咨询问答系统与深度检索能力建设。' },
  { time: '2023 - 2024', title: '多模态智能化测试与运维平台', text: '将 Qwen3-VL 引入自动化测试，建设失败归因、视觉走查和 i18n 校验能力。' },
  { time: '2021.06 - 2024.08', title: 'MaxCompute 稳定性保障', text: '负责专有云环境下大数据平台运维开发、故障排查、客户支持与稳定性优化。' },
  { time: '2018.04 - 2020.11', title: 'DevOps CI/CD 质量门禁', text: '建设 Jenkins + GitLab 自动化门禁、回归报告分析与持续集成流程。' },
];

function handleCardPointerMove(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  event.currentTarget.style.setProperty('--glow-x', `${x}%`);
  event.currentTarget.style.setProperty('--glow-y', `${y}%`);
}
function App() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="mesh" />
        <nav className="nav shell">
          <a className="brand" href="#home" aria-label="回到首页">LIU HAO</a>
          <div className="navLinks" aria-label="页面导航">
            <a href="#profile">Profile</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="contactButton" href="mailto:1278496392@qq.com">联系我 <ArrowUpRight size={17} /></a>
        </nav>

        <div className="heroContent shell">
          <p className="kicker">SRE / AI Engineering / RAG / DevOps</p>
          <h1>刘浩</h1>
          <h2 className="heroTitle">用 AI 工程化提升系统稳定性、质量效率与知识服务体验。</h2>
          <div className="heroBottom">
            <p>
              6年+云计算、大数据平台稳定性保障、运维开发、测试开发及 AI 工程化落地经验。长期参与阿里云 MaxCompute 相关项目，近期参与 OpenClaw、Skill、RAG 深度检索和文档咨询问答系统建设。
            </p>
            <div className="heroActions">
              <a className="primaryLink" href="#projects">查看核心项目 <ArrowUpRight size={18} /></a>
              <a className="ghostLink" href="mailto:1278496392@qq.com">1278496392@qq.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="profile shell" id="profile">
        <div className="profilePanel">
          <div className="profileHeader">
            <p className="sectionLabel">Profile</p>
            <h2>高级运维开发工程师 / SRE / AI 工程化实践者</h2>
          </div>
          <p>
            工作覆盖分布式集群自动化运维、故障排查、DevOps 流程建设、自动化测试平台、AI 智能归因、RAG 知识库和文档问答系统等方向，重点解决业务流程中信息检索难、故障定位慢、知识复用弱、测试误报率高等问题。
          </p>
          <div className="infoGrid">
            <span>西安交通大学 / 计算机科学与技术 / 本科</span>
            <span>求职意向：SRE / 运维开发 / AI 测试开发</span>
            <span>技术栈：Python / Shell / Jenkins / Docker / K8s</span>
            <span>AI：OpenClaw / RAG / Skill / Qwen3-VL</span>
          </div>
        </div>
        <div className="metricGrid">
          {metrics.map((item) => (
            <div className="metric" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="focus shell" aria-label="核心方向">
        <div className="sectionHead">
          <div>
            <p className="sectionLabel">Focus</p>
            <h2>当前能力主线</h2>
          </div>
          <p>围绕 AI 工程化、智能运维和企业知识检索，把技术能力转化为可复用的业务效率工具。</p>
        </div>
        <div className="focusGrid">
          {focusAreas.map((item, index) => (
            <article className="focusItem magicBorderCard" key={item} onMouseMove={handleCardPointerMove}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects shell" id="projects">
        <div className="sectionHead">
          <div>
            <p className="sectionLabel">Selected Projects</p>
            <h2>核心项目经验</h2>
          </div>
          <p>项目经验占网站表达的主体，优先呈现最近半年 AI 工程化与 RAG 方向。</p>
        </div>
        <div className="projectGrid">
          {projects.map(({ icon: Icon, eyebrow, title, description, points, accent }) => (
            <article className="projectCard" key={title}>
              <div className="projectTop">
                <Icon size={30} />
                <span>{accent}</span>
              </div>
              <p className="projectEyebrow">{eyebrow}</p>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {points.map((point) => <li key={point}><CheckCircle2 size={16} />{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="skills shell" id="skills">
        <div className="sectionHead compact">
          <p className="sectionLabel">Capabilities</p>
          <h2>专业技能矩阵</h2>
        </div>
        <div className="skillGrid">
          {skills.map(({ icon: Icon, title, text }) => (
            <article className="skillCard" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline shell">
        <div className="sectionHead compact">
          <p className="sectionLabel">Experience</p>
          <h2>经历时间线</h2>
        </div>
        <div className="timelineList">
          {timeline.map((item) => (
            <article className="timelineItem" key={item.title}>
              <time>{item.time}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="closingInner shell">
          <Cpu size={36} />
          <p className="sectionLabel">Contact</p>
          <h2>寻找 SRE、AI 工程化、RAG 应用与智能测试平台方向机会。</h2>
          <p>
            我希望在更核心的团队继续发挥 AI 工程化和 SRE 方向的经验，把 OpenClaw、Skill、RAG、自动化测试和稳定性保障沉淀为真正可落地的效率系统。
          </p>
          <div className="contactRow">
            <a className="mailLink" href="mailto:1278496392@qq.com"><Mail size={19} /> 1278496392@qq.com</a>
            <a className="mailLink" href="tel:15868865440"><Network size={19} /> 15868865440</a>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
