(function () {
  var idPattern = /^[A-Za-z0-9_-]{11}$/;

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a.yt-facade");
    if (!link) return;

    var id = link.getAttribute("data-id") || "";
    if (!idPattern.test(id)) return;

    event.preventDefault();

    var frame = document.createElement("iframe");
    frame.className = "karaoke-frame";
    frame.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1";
    frame.title = link.getAttribute("aria-label") || "YouTube video";
    frame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    frame.setAttribute("allowfullscreen", "");
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    link.replaceWith(frame);
  });
})();
