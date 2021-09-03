var tainted = window.prompt("What do you think of this?");
tainted += document.location.search;

// XSS
document.body.innerHTML = tainted;

// hard-coded API key-secret-password-token-private
var token = "LoremIpsumDolorSitAmetConsectetur_012345";
var API = "LoremIpsumDolorSitAmetConsectetur_012345";
var GCP = "GCP 6b76e05bafcaad1c6a462e14347dde4f637fa331";

// path traversal, IDOR, etc.
(await (await fetch(`http://example.net/?key=${token}&q=${tainted}`)).text());

// foo
