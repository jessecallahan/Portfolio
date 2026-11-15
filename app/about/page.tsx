'use client'
import Link from "next/link";
import styles from './page.module.css';

function About() {

  return (
    <>
      <div className={styles.color}>
        <ul className={styles.ul}>
          <ol>
            <div className={styles.headerColor}>What I do:</div>
            <ul>
              <li>
                I spend my days engineering robust, modern full-stack web applications backed by 5 years of professional experience.
              </li>
              <li>
                Right now, my main production work spans two distinct stacks—.NET, EF Core, and the latest Angular on one project, and Next.js, TypeScript, MikroORM, and PostgreSQL on another—though I’m technology-agnostic at heart and prioritize sound design patterns that transfer to any toolset.              </li>
              <li>
                I specialize in enterprise modernization, taking complex legacy systems—such as supporting, re-architecting, and rewriting a 2000-era Java 1.5 and Oracle DB codebase for a Fortune 500 client—and transforming them into clean, high-performance applications built with Next.js, TypeScript, and PostgreSQL.</li>
            </ul>
          </ol>
          <ol>
            <div className={styles.headerColor}>What I've done:</div>
            <ul>
              <li>Continue expanding my technical depth in full-stack engineering, software architecture, and emerging AI development.</li>
              <li>Successfully delivered and scaled multiple applications across diverse modern tech stacks with a strong focus on reliability, mobile-first design, and accessibility. </li>
              <li>Evolved my path from a background in Media Arts (Evergreen State, KAOS music director, KBCS reporter/editor) through a CS Associate's at Seattle Central (with acceptances to SPU, Seattle U, and UW Bothell, plus React/JS tutoring) and an intensive coding bootcamp to launch a thriving professional career.</li>
            </ul>
          </ol>
          <ol>
            <div className={styles.headerColor}>What I hope to do:</div>
            <ul>
              <li>
                Help you build, scale, or refine your next high-impact web application with clean and reliable architecture.
              </li>
              <li>
                Collaborate on cool open-source projects and push the boundaries of modern web development.
              </li>
              <li>
                Continue expanding my technical depth in full-stack engineering, software architecture, and emerging AI development.
              </li>
            </ul>
          </ol>
        </ul>
        <div className={styles.links}>I am always experimenting with new ideas and coding for fun. Check out my <Link href="/fun">fun</Link> projects page and my <Link href="/blog">blog</Link>, where I share my ideas.</div>
      </div>
    </>
  )
}

export default About