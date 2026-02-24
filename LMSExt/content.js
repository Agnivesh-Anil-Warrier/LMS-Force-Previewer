console.log("LMS tab fixer active");

document.addEventListener(
  "click",
  function (event) {

    const link = event.target.closest("a");
    if (!link) return;

    const url = link.href;
    if (!url) return;

    const lower = url.toLowerCase();

    // Case 1: Direct Moodle resource page
    if (lower.includes("/mod/resource/view.php")) {

      event.preventDefault();
      event.stopImmediatePropagation();

      console.log("Opening resource in new tab:", url);
      window.open(url, "_blank", "noopener");
      return;
    }

    // Case 2: Direct file link (folder PDFs)
    if (lower.includes("pluginfile.php") && lower.includes(".pdf")) {

      event.preventDefault();
      event.stopImmediatePropagation();

      console.log("Opening PDF file in new tab:", url);
      window.open(url, "_blank", "noopener");
      return;
    }

  },
  true
);
