console.log("LMS tab fixer active");

document.addEventListener(
  "click",
  function (event) {

    const link = event.target.closest("a");
    if (!link) return;

    const url = link.href;
    if (!url) return;

    // Moodle resource links
    if (!url.includes("/mod/resource/view.php"))
        return;

    event.preventDefault();
    event.stopImmediatePropagation();

    window.open(url, "_blank", "noopener");

  },
  true
);