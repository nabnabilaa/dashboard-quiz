export interface LearningSlide {
    icon: string;
    title: string;
    content: string;
}

export const learningSlides: LearningSlide[] = [
    {
        icon: "💡",
        title: "1. From Idea to Application",
        content: ` <div class="visual-box" > <div class="visual-flow" > <span class="flow-item" >Dream / Idea</span> <span class="flow-arrow" >➜</span> <span class="flow-item" >Analysis</span> <span class="flow-arrow" >➜</span> <span class="flow-item" >UML (Design)</span> <span class="flow-arrow" >➜</span> <span class="flow-item" >Application</span> </div> </div> <p>Don't start writing code right away! Building an application is like building a house. You need an architect's blueprint before calling the builders.</p> <p>A proper workflow ensures the application we build is truly useful and solves the intended problem.</p> `
    },
    {
        icon: "⚠️",
        title: "2. The Danger of No Plan",
        content: ` <div class="visual-box" style="background:#FEF2F2; border-color:#EF4444;" > <span style="font-size:3rem; margin-bottom:0.5rem;" >🏚️ vs 🏠</span> <div style="color:#991B1B; font-weight:bold;" >No Plan = Collapse</div> </div> <p>Did you know? Nearly <b>47% of IT projects fail</b> because of unclear requirements at the start.</p> <ul style="margin-left:1.5rem; margin-bottom:1rem;" > <li>❌ Ballooning costs</li> <li>❌ Sluggish timelines</li> <li>❌ Unused features</li> </ul> <p>Requirement analysis is the foundation to prevent "wrong building".</p> `
    },
    {
        icon: "👷‍♂️",
        title: "3. Analyst vs Developer",
        content: ` <p>In large projects, roles are divided. Don't mix them up!</p> <table class="slide-table" > <tr> <th>Aspect</th> <th>Analyst (Architect)</th> <th>Developer (Builder)</th> </tr> <tr> <td><b>Focus</b></td> <td>"WHAT is to be achieved?" (Problem)</td> <td>"HOW to make it?" (Technical)</td> </tr> <tr> <td><b>Output</b></td> <td>Documents, UML Diagrams</td> <td>Source Code, Database</td> </tr> <tr> <td><b>Mindset</b></td> <td>Business & Strategy</td> <td>Logic & Algorithms</td> </tr> </table> `
    },
    {
        icon: "👂",
        title: "4. Step 1: Listening",
        content: ` <p>An analyst must be a good listener before designing a solution.</p> <div class="visual-box" > <div style="display:flex; gap:2rem;" > <div> <div style="font-size:2rem;" >❓</div> <b>Why?</b><br> <small>Business Goals</small> </div> <div> <div style="font-size:2rem;" >🎯</div> <b>What?</b><br> <small>System Requirements</small> </div> </div> </div> <p>Example: "Why do we need a queue system?" -> "So patients don't pile up in the lobby." (Why) -> "The system must support online booking." (What).</p> `
    },
    {
        icon: "💎",
        title: "5. Value & Constraints",
        content: ` <p>Before starting, we must know the "Price" and "Boundaries".</p> <table class="slide-table" > <tr> <th>Category</th> <th>Explanation</th> </tr> <tr> <td><b>Business Value</b></td> <td>What benefit is gained? Can be money (Cost Savings) or Image (Clinic becomes modern).</td> </tr> <tr> <td><b>Constraints</b></td> <td>Project limits. e.g., "Must be done in 3 months" (Time) or "Servers must be in certain region" (Regulation).</td> </tr> </table> `
    },
    {
        icon: "⚖️",
        title: "6. Features vs Quality",
        content: ` <p>A system has two sides of the same coin. It's not just about "What can it do", but "How well does it do it".</p> <table class="slide-table" > <tr> <th>Type</th> <th>Description</th> <th>Example</th> </tr> <tr> <td><b>Functional (Features)</b></td> <td>What the system DOES.</td> <td>Login, Print Receipt, Calculate Total.</td> </tr> <tr> <td><b>Non-Functional (Quality)</b></td> <td>How WELL it works.</td> <td>Loading < 2 seconds, Secure from Hackers, Responsive on Mobile.</td> </tr> </table> `
    },
    {
        icon: "🗺️",
        title: "7. What is UML?",
        content: ` <div class="visual-box" > <span style="font-size:3rem;" >📝 + 🤝 = ✅</span> </div> <p><b>UML (Unified Modeling Language)</b> is an international standard language using visual diagrams.</p> <p><b>Function:</b> Acts as a "Mediator Language" between business people (Clients) and technical people (Programmers) to avoid misunderstandings.</p> <p>UML is the blueprint of our software.</p> `
    },
    {
        icon: "👤",
        title: "8. Use Case Diagram",
        content: ` <p>This is the very first diagram created. It's very simple.</p> <div class="visual-box" > <svg width="200" height="100" viewBox="0 0 200 100" > <!-- Actor --> <circle cx="30" cy="30" r="10" fill="none" stroke="#4F46E5" stroke-width="2" /> <line x1="30" y1="40" x2="30" y2="70" stroke="#4F46E5" stroke-width="2" /> <line x1="10" y1="50" x2="50" y2="50" stroke="#4F46E5" stroke-width="2" /> <line x1="30" y1="70" x2="10" y2="90" stroke="#4F46E5" stroke-width="2" /> <line x1="30" y1="70" x2="50" y2="90" stroke="#4F46E5" stroke-width="2" /> <!-- Line --> <line x1="60" y1="50" x2="110" y2="50" stroke="#4F46E5" stroke-width="2" /> <!-- Use Case --> <ellipse cx="150" cy="50" rx="40" ry="20" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2" /> <text x="150" y="55" font-size="10" text-anchor="middle" fill="#4F46E5" >Login</text> </svg> </div> <p><b>Focus:</b> Answers the question "WHO can do WHAT?".</p> <p>This diagram doesn't care about time sequence, only the list of features available to each user.</p> `
    },
    {
        icon: "🧩",
        title: "9. Use Case Components",
        content: ` <table class="slide-table" > <tr> <th width="30%" >Symbol</th> <th>Name & Function</th> </tr> <tr> <td style="text-align:center;" >👤 (Person)</td> <td><b>Actor</b>: Anyone interacting with the system (User, Admin, or Other System).</td> </tr> <tr> <td style="text-align:center;" >⭕ (Oval)</td> <td><b>Use Case</b>: Specific functionality / feature (e.g., "Withdraw Cash").</td> </tr> <tr> <td style="text-align:center;" >── (Line)</td> <td><b>Association</b>: Connecting line between Actor and Use Case.</td> </tr> <tr> <td style="text-align:center;" >⬜ (Box)</td> <td><b>Boundary</b>: System boundary. Separates what's inside the app and what's outside (the real world).</td> </tr> </table> `
    },
    {
        icon: "🔗",
        title: "10. Relationships: Include vs Extend",
        content: ` <p>In Use Cases, there are two special relationships that often appear:</p> <table class="slide-table" > <tr> <th>Relation</th> <th>Nature</th> <th>Example</th> </tr> <tr> <td><b>&lt;&lt;include&gt;&gt;</b></td><td><b>Mandatory</b>. Use Case A cannot run without B.</td><td>"Transfer" ➜ <i>include</i> ➜ "Check Balance" (Balance must be checked).</td></tr><tr><td><b>&lt;&lt;extend&gt;&gt;</b></td><td><b>Optional</b>. Use Case B only runs under certain conditions.</td><td>"Check Balance" ➜ <i>extend</i> ➜ "Print Receipt" (If desired).</td></tr></table><div class="visual-box"><span style="font-size:0.8rem; color:var(--secondary);">Tips: Include = "Must Be There", Extend = "Can Be There" </span> </div> `
    },
    {
        icon: "🔄",
        title: "11. Activity Diagram",
        content: ` <p>If Use Case is the "Menu List", then Activity Diagram is the "Cooking Recipe".</p> <div class="visual-box" > <div class="visual-flow" > <span class="flow-item" style="background:#10B981; color:white; border:none;" >Start</span> <span class="flow-arrow" >➜</span> <span class="flow-item" >Input</span> <span class="flow-arrow" >➜</span> <span class="flow-item" >Check?</span> <span class="flow-arrow" >➜</span> <span class="flow-item" style="background:#EF4444; color:white; border:none;" >Finish</span> </div> </div> <p>This diagram describes the workflow step by step, including branching logic (IF/ELSE).</p> <p>It is very similar to a classic Flowchart.</p> `
    },
    {
        icon: "🔷",
        title: "12. Activity Symbols",
        content: ` <table class="slide-table" > <tr> <th>Visual Symbol</th> <th>Meaning</th> </tr> <tr> <td>⚫ (Black Circle)</td> <td><b>Start Node</b>: The point where the process begins.</td> </tr> <tr> <td>🟥 (Rectangle)</td> <td><b>Action</b>: An event or activity being performed.</td> </tr> <tr> <td>🔶 (Diamond)</td> <td><b>Decision</b>: Branching. e.g., "Balance Sufficient?" (Yes left, No right).</td> </tr> <tr> <td>🎯 (Target)</td> <td><b>Final Node</b>: The point where the process ends.</td> </tr> </table> `
    },
    {
        icon: "🏗️",
        title: "13. Class Diagram",
        content: ` <p>This is the most technical diagram. It describes static data structures.</p> <div class="visual-box" > <div style="border:2px solid var(--primary); width:150px; background:white;" > <div style="padding:5px; border-bottom:1px solid var(--primary); font-weight:bold; background:#EEF2FF;" >Student</div> <div style="padding:5px; border-bottom:1px solid var(--primary); text-align:left; font-size:0.8rem;" >- name: String<br>- nis: Int</div> <div style="padding:5px; text-align:left; font-size:0.8rem;" >+ study()<br>+ exam()</div> </div> </div> <p>This diagram serves as the blueprint for creating the <b>Database</b> and <b>Programming Classes</b> (OOP).</p> <p>It consists of 3 parts: Class Name, Attributes (Data), and Operations (Functions).</p> `
    },
    {
        icon: "⏱️",
        title: "14. Sequence Diagram",
        content: ` <p>Describes interactions between objects based on <b>time order</b>.</p> <div class="visual-box" > <span style="font-size:0.9rem;" >User ➜ (Login) ➜ Server ➜ (Check DB) ➜ Database</span> <br><br> <span style="color:var(--secondary); font-size:0.8rem;" >⬇️ Time flows downward ⬇️</span> </div> <p>Explains details: "Who sends what message to whom, and when?".</p> <p>Perfect for designing complex data exchange logic (APIs).</p> `
    },
    {
        icon: "🏢",
        title: "15. System Architecture (Layers)",
        content: ` <p>A good system is divided into layers to keep it organized.</p> <table class="slide-table" > <tr> <th>Layer</th> <th>Shop Analogy</th> <th>IT Function</th> </tr> <tr> <td><b>Presentation</b></td> <td>Storefront / Cashier</td> <td><b>UI (User Interface)</b>: What the user sees.</td> </tr> <tr> <td><b>Business Logic</b></td> <td>Shop Manager</td> <td><b>Application Logic</b>: Calculations, Route validation.</td> </tr> <tr> <td><b>Data Layer</b></td> <td>Warehouse</td> <td><b>Database</b>: Safe data storage place.</td> </tr> </table> `
    },
    {
        icon: "🚀",
        title: "16. Conclusion: Success Flow",
        content: ` <div class="visual-box" style="background:#D1FAE5; border-color:#10B981;" > <b>Success Recipe for IT Projects</b> </div> <ol style="margin-left:1.5rem; line-height:2;" > <li><b>Dream (Idea):</b> Find the problem you want to solve.</li> <li><b>Analysis:</b> Understand the requirements (Why & What).</li> <li><b>Design (UML):</b> Create visual maps (Use Case, Activity, etc.).</li> <li><b>Construction (Coding):</b> Build the application based on the design.</li> </ol> <p style="margin-top:1rem; text-align:center; font-weight:bold; color:var(--primary);" >Congratulations! You are ready to be a System Architect. 🎓</p> `
    }
];
