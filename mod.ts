export async function open(url: string | URL): Promise<void> {
  const programAliases = {
    windows: "explorer",
    darwin: "open",
    linux: "sensible-browser",
  };

  const { href } = typeof url === "string" ? new URL(url) : url;

  const process = Deno.run({
    cmd: [programAliases[Deno.build.os], href],
  });

  await process.status();
}
