(function () {
  const pages = [
    { href: "vietnam-danang-hoian.html", label: "ダナン・ホイアン" },
    { href: "thailand-bangkok-ayutthaya.html", label: "バンコク・アユタヤ" },
    { href: "cambodia-siemreap.html", label: "アンコールワット" },
    { href: "vietnam-hochiminh.html", label: "ホーチミン" },
    { href: "indonesia-lombok.html", label: "ロンボク・ギリ島" },
    { href: "indonesia-bali.html", label: "バリ島" },
    { href: "philippines.html", label: "フィリピン" },
  ];

  const current = location.pathname.split("/").pop() || "index.html";

  const links = pages
    .map(({ href, label }) => {
      const active = href === current ? ' active' : '';
      return `<a class="plan-link${active}" href="${href}">${label}</a>`;
    })
    .join("\n  ");

  const nav = `<nav class="topnav">
  <a class="topnav-home" href="index.html">🌏 一覧</a>
  ${links}
</nav>`;

  document.write(nav);
})();
