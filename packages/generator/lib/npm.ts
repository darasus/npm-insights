import got from "got";

export class NPM {
  async getPackage(pkgId: string) {
    const url = `https://registry.npmjs.org/${pkgId}`;
    const res = await got(url);
    return JSON.parse(res.body);
  }
}
