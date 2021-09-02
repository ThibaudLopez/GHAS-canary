var tainted = window.prompt("What do you think of this?");

// XSS
document.body.innerHTML = tainted;

// path traversal, IDOR, etc.
(await (await fetch(`http://example.net/?q=${tainted}`)).text());
