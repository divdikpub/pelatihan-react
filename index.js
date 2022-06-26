const puppeteer = require("puppeteer-core");

const color = "#4285f4";
const style = `color: ${color}; font-size: 10px; margin-inline: 1cm; line-height: 16px; width: 100%; display: flex;`;

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto(
    `file:///${process.cwd()}/${process.argv[2]}.html`
  );
  await page.pdf({
    path: `${process.argv[2]}.pdf`,
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `
    <div style="${style} border-bottom: 1px solid ${color}; justify-content: space-between">
        <span>Pelatihan React 2022 — Divisi Pendidikan PUB</span>
        <span>Terakhir diperbarui: ${new Date().toLocaleString("id-ID", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}</span>
    </div>
  `,
    footerTemplate: `
    <div style="${style} border-top: 1px solid ${color}; justify-content: center">
        <span class="pageNumber"></span>/<span class="totalPages"></span>
    </div>
  `,
    margin: {
      top: "1.5cm",
      bottom: "1.5cm",
      right: "1cm",
      left: "1cm",
    },
  });

  await browser.close();
})();
