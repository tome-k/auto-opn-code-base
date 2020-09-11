export async function open(url: string) {
    let browserProcess;

    switch (Deno.build.os) {
        case "windows":
            browserProcess = Deno.run({cmd: ["explorer", url]});
            break;

        case "darwin":
            browserProcess = Deno.run({cmd: ["open", url]});
            break;

        case "linux":
            browserProcess = Deno.run({cmd: ["sensible-browser", url]});
            break;
    }

    await browserProcess.status();
}
