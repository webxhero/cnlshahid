import { PERSONAL_INFO, EXPERIENCES, SERVICES, SKILL_CATEGORIES } from '../data/portfolioData';

export const downloadCvPdf = () => {
  // Create an elegant print-styled window for saving/printing as PDF
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to download the CV PDF.');
    return;
  }

  const cvContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${PERSONAL_INFO.name} - Resume / CV</title>
      <style>
        @page {
          size: A4;
          margin: 15mm;
        }
        body {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          color: #1a1a1a;
          background: #ffffff;
          line-height: 1.5;
          margin: 0;
          padding: 20px;
          font-size: 13px;
        }
        .header {
          border-bottom: 2px solid #5e7a4f;
          padding-bottom: 12px;
          margin-bottom: 18px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .name {
          font-size: 26px;
          font-weight: bold;
          color: #111111;
          margin: 0;
          letter-spacing: -0.5px;
        }
        .title {
          font-size: 14px;
          font-weight: 600;
          color: #5e7a4f;
          margin-top: 4px;
        }
        .contact-info {
          text-align: right;
          font-size: 11px;
          color: #444444;
          line-height: 1.6;
        }
        .section-title {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          color: #111111;
          letter-spacing: 0.8px;
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 4px;
          margin-top: 18px;
          margin-bottom: 10px;
        }
        .summary {
          font-size: 12px;
          color: #333333;
          margin-bottom: 15px;
        }
        .exp-item {
          margin-bottom: 14px;
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          font-size: 13px;
          color: #111;
        }
        .exp-sub {
          font-size: 12px;
          color: #5e7a4f;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .exp-bullets {
          margin: 4px 0 0 16px;
          padding: 0;
          font-size: 12px;
          color: #333;
        }
        .exp-bullets li {
          margin-bottom: 3px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .skill-box {
          background: #f8f9fa;
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid #eee;
        }
        .skill-cat {
          font-weight: 700;
          font-size: 11px;
          color: #5e7a4f;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .skill-list {
          font-size: 11px;
          color: #333;
        }
        .footer-note {
          margin-top: 25px;
          padding-top: 10px;
          border-top: 1px solid #eee;
          text-align: center;
          font-size: 10px;
          color: #777;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <h1 class="name">${PERSONAL_INFO.name}</h1>
          <div class="title">${PERSONAL_INFO.title}</div>
        </div>
        <div class="contact-info">
          <div>Email: ${PERSONAL_INFO.email}</div>
          <div>Phone: ${PERSONAL_INFO.phone}</div>
          <div>Location: ${PERSONAL_INFO.location}</div>
          <div>Website: ${PERSONAL_INFO.website}</div>
        </div>
      </div>

      <div class="section-title">Professional Summary</div>
      <p class="summary">${PERSONAL_INFO.shortBio} Holds a <strong>${PERSONAL_INFO.education}</strong>.</p>

      <div class="section-title">Work Experience</div>
      ${EXPERIENCES.map(exp => `
        <div class="exp-item">
          <div class="exp-header">
            <span>${exp.role} @ ${exp.company}</span>
            <span>${exp.period}</span>
          </div>
          <div class="exp-sub">${exp.location} | ${exp.type}</div>
          <ul class="exp-bullets">
            ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      `).join('')}

      <div class="section-title">Core Competencies & Technical Skills</div>
      <div class="skills-grid">
        ${SKILL_CATEGORIES.map(cat => `
          <div class="skill-box">
            <div class="skill-cat">${cat.category}</div>
            <div class="skill-list">${cat.skills.map(s => s.name).join(', ')}</div>
          </div>
        `).join('')}
      </div>

      <div class="section-title">Featured Services</div>
      <div class="skills-grid">
        ${SERVICES.map(s => `
          <div class="skill-box">
            <div class="skill-cat">${s.title}</div>
            <div class="skill-list">${s.subtitle}</div>
          </div>
        `).join('')}
      </div>

      <div class="footer-note">
        Official Portfolio CV of ${PERSONAL_INFO.name} • ${PERSONAL_INFO.website} • Generated on ${new Date().toLocaleDateString()}
      </div>

      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(cvContent);
  printWindow.document.close();
};
